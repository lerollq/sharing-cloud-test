import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { bookingsSelectors, bookingsActions } from '../../../store/bookings'
import { Row, Col } from '../../atoms/Grid'
import { userSelectors } from '../../../store/user'
import { Button } from '../../../styled'

interface OwnProps {
  bookingId: string
}

interface StyledProps {
  className?: string
}

interface DispatchToProps {
  deleteBookingAsyncAction(bookingId: string): Promise<void>
}

interface StateToProps extends ReturnType<typeof bookingsSelectors.selectBookingsById> {
  userId: string
}

export type Props = OwnProps & StateToProps & StyledProps & DispatchToProps

const BookingRow: React.FC<Props> = ({
  name,
  start,
  end,
  className,
  bookerId,
  userId,
  bookingId,
  deleteBookingAsyncAction,
}) => {
  const [deleteLoading, setDeleteLoading] = useState(false)
  const startTime = new Date(start).getTime()
  const endTime = new Date(end).getTime()

  const handleOnDelete = () => {
    setDeleteLoading(true)
    deleteBookingAsyncAction(bookingId).finally(() => {
      setDeleteLoading(false)
    })
  }
  return (
    <div className={className}>
      <Row>
        <Col xs={12} xl={9}>
          <strong>From:&nbsp;</strong>
          {new Date(startTime).toLocaleString()}
          <br />
          <strong>To:&nbsp;</strong>
          {new Date(endTime).toLocaleString()}
          <br />
          <strong>Subject:&nbsp;</strong>
          {name}
        </Col>
        <Col xs={12} xl={3}>
          <Button
            block
            color='primary'
            onClick={handleOnDelete}
            disabled={userId !== bookerId || deleteLoading}
            loading={deleteLoading}>
            Delete
          </Button>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  ...bookingsSelectors.selectBookingsById(state, ownProps.bookingId),
  userId: userSelectors.selectUserId(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  deleteBookingAsyncAction: (bookingId: string) => dispatch(bookingsActions.deleteBookingAsyncAction(bookingId)),
})

export default styled(connect(mapStateToProps, mapDispatchToProps)(BookingRow))`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
`
