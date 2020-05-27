import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { resourceSelectors, resourceActions } from '../../../store/resource'
import { LoadingCardBody } from '../../molecules/LoadingCardBody'
import { Resource } from '../../../store/resource/types'
import { Card, CardHeader, Grid } from '../../../styled'
import { BadgeResourceAvailability } from '../../atoms/BadgeResourceAvailability'

interface DispatchToProps {
  getResourceAsyncAction(): Promise<void>
}

interface StateToProps {
  resource: Resource
  loading: boolean
  loaded: boolean
}

type ResourceDetailsProps = StateToProps & DispatchToProps

const ResourceDetails: React.FC<ResourceDetailsProps> = React.memo(
  ({ loaded, loading, getResourceAsyncAction, resource }) => {
    useEffect(() => {
      // If resource not loaded, call getResourceAsyncAction
      if (!loaded) {
        getResourceAsyncAction()
      }
    }, [loaded, getResourceAsyncAction])

    return (
      <Card>
        <CardHeader alignItems='center' justifyContent='space-between'>
          <h2> {resource.name}</h2>
          <BadgeResourceAvailability />
        </CardHeader>
        <LoadingCardBody loading={loading}>
          <Grid.Row>
            <strong>Minimum booking reservation:</strong>
            {resource.minimumBookingDuration} minutes
          </Grid.Row>
          <br />
          <Grid.Row>
            <strong>Maximum booking reservation:</strong>
            {resource.maximumBookingDuration} minutes
          </Grid.Row>
          <br />
        </LoadingCardBody>
      </Card>
    )
  }
)

const mapStateToProps = (state: AppState) => ({
  resource: resourceSelectors.selectResource(state),
  ...resourceSelectors.selectStatus(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getResourceAsyncAction: () => dispatch(resourceActions.getResourceAsyncAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails)
