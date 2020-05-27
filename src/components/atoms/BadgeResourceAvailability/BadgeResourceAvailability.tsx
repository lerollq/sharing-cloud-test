import React, { useState, useCallback, useEffect } from 'react'
import { Badge } from '../../../styled'
import { bookingsSelectors } from '../../../store/bookings'
import { connect } from 'react-redux'

interface StateToProps {
  bookingsTime: {
    start: string
    end: string
  }[]
}

const BadgeResourceAvailability: React.FC<StateToProps> = ({ bookingsTime }) => {
  const [available, setAvailable] = useState(false)
  /**
   * This method check every second if current time is between start & end date of any bookings
   * And will update current available state if different
   */

  const checkAvailability = useCallback(() => {
    const currentTime = new Date().getTime()
    const isAvailable = !bookingsTime.some(
      ({ end, start }) => currentTime > new Date(start).getTime() && currentTime < new Date(end).getTime()
    )
    if (isAvailable !== available) {
      setAvailable(isAvailable)
    }
  }, [available, bookingsTime])

  useEffect(() => {
    // Start interval to check resource availability
    checkAvailability()
    const intervalId = setInterval(checkAvailability, 1000)

    return () => {
      // Properly delete interval
      clearInterval(intervalId)
    }
  }, [checkAvailability])

  return <Badge color={available ? 'success' : 'danger'}>{available ? 'Available' : 'Not Available'} </Badge>
}

export const mapStateToProps = (state: AppState) => ({
  bookingsTime: bookingsSelectors.selectBookingsTimes(state),
})

export default connect(mapStateToProps)(BadgeResourceAvailability)
