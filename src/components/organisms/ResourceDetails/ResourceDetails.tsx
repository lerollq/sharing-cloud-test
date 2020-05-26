import React, { useEffect, useState } from 'react'
import { resourceSelectors, resourceActions } from '../../../store/resource'
import { connect } from 'react-redux'
import { Card, CardHeader } from '../../atoms/Card'
import { LoadingCardBody } from '../../molecules/LoadingCardBody'
import { Row } from '../../atoms/Grid'
import { Badge } from '../../atoms/Badge'
import { bookingsSelectors } from '../../../store/bookings'
import { Resource } from '../../../store/resource/types'

interface DispatchToProps {
  getResourceAsyncAction(): Promise<void>
}

interface StateToProps {
  bookingsTime: Array<{ end: string; start: string }>
  resource: Resource
  loading: boolean
  loaded: boolean
}

type ResourceDetailsProps = StateToProps & DispatchToProps

const ResourceDetails: React.FC<ResourceDetailsProps> = React.memo(
  ({ loaded, loading, getResourceAsyncAction, resource, bookingsTime }) => {
    const [available, setAvailable] = useState(false)

    /**
     * This method check every second if current time is between start & end date of any bookings
     * And will update current available state if different
     */
    const checkAvailability = () => {
      const currentTime = new Date().getTime()
      const isAvailable = !bookingsTime.some(
        ({ end, start }) => currentTime > new Date(start).getTime() && currentTime < new Date(end).getTime()
      )
      if (isAvailable !== available) {
        setAvailable(isAvailable)
      }
    }

    useEffect(() => {
      // If resource not loaded, call getResourceAsyncAction
      if (!loaded) {
        getResourceAsyncAction()
      }

      // Start interval to check resource availability
      const intervalId = setInterval(
        (function iife() {
          checkAvailability()
        })(),
        1000
      )

      return () => {
        // Properly delete interval
        clearInterval(intervalId)
      }
      // Re-render only if loadedn bookingsTime or available state change
    }, [loaded, bookingsTime, available])

    return (
      <Card>
        <CardHeader alignItems='center' justifyContent='space-between'>
          <h2> {resource.name}</h2>
          <Badge color={available ? 'success' : 'danger'}>{available ? 'Available' : 'Not Available'}</Badge>
        </CardHeader>
        <LoadingCardBody loading={loading}>
          <Row>
            <strong>Minimum booking reservation:</strong>
            {resource.minimumBookingDuration} minutes
          </Row>
          <br />
          <Row>
            <strong>Maximum booking reservation:</strong>
            {resource.maximumBookingDuration} minutes
          </Row>
          <br />
        </LoadingCardBody>
      </Card>
    )
  }
)

const mapStateToProps = (state: AppState) => ({
  resource: resourceSelectors.selectResource(state),
  ...resourceSelectors.selectStatus(state),
  bookingsTime: bookingsSelectors.selectBookingsTimes(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getResourceAsyncAction: () => dispatch(resourceActions.getResourceAsyncAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails)
