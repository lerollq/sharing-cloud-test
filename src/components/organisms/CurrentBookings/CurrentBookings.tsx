import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody } from '../../atoms/Card'
import { connect } from 'react-redux'
import { bookingsActions, bookingsSelectors } from '../../../store/bookings'
import { LoadingCardBody } from '../../molecules/LoadingCardBody'
import { BookingRow } from '../../molecules/BookingRow'

interface MapStateToProps {
  loaded: boolean
  loading: boolean
  bookingsId: string[]
}

interface DispatchToProps {
  getBookingsAsyncAction(): Promise<void>
}

export type Props = MapStateToProps & DispatchToProps

const CurrentBookings: React.FC<Props> = ({ loaded, loading, getBookingsAsyncAction, bookingsId }) => {
  useEffect(() => {
    console.log('Loaded', loaded, 'Loading', loading)
    if (!loaded) {
      getBookingsAsyncAction()
    }
  }, [loading, loaded])

  return (
    <Card>
      <CardHeader>
        <h2>Current Bookings</h2>
      </CardHeader>
      <LoadingCardBody loading={loading}>
        {bookingsId.map((id, idx) => (
          <BookingRow key={idx} bookingId={id} />
        ))}
      </LoadingCardBody>
    </Card>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: bookingsSelectors.selectLoading(state),
  loaded: bookingsSelectors.selectLoaded(state),
  bookingsId: bookingsSelectors.selectBookingsId(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getBookingsAsyncAction: () => dispatch(bookingsActions.getBookingsAsyncAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBookings)
