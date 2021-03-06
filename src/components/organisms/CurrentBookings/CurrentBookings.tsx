import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader } from '../../atoms/Card'
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

const CurrentBookings: React.FC<Props> = ({
  loaded, loading, getBookingsAsyncAction, bookingsId,
}) => {
  useEffect(() => {
    if (!loaded) {
      getBookingsAsyncAction()
    }
  }, [loading, loaded, getBookingsAsyncAction])

  return (
    <Card>
      <CardHeader>
        <h2>Current Bookings</h2>
      </CardHeader>
      <LoadingCardBody loading={loading}>
        {bookingsId.map((id) => (
          <BookingRow key={id} bookingId={id} />
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
