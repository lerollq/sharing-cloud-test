import React, { useState, useEffect } from 'react'
import { formatDate } from '../../../helpers/date'

interface OwnProps {
  date: string | number
  handler?(): void
}

const CountDown: React.FC<OwnProps> = ({ date, handler }) => {
  const [timeleft, setTimeleft] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeleft = new Date(date).getTime() - new Date().getTime()
      if (timeleft <= 0) {
        // Negativ timeleft means the countdown is finished.
        // First clear interval
        clearInterval(intervalId)
        // Then trigger the props handler function if exists
        handler?.()
      }
      setTimeleft(formatDate(timeleft))
    }, 1000)

    return () => {
      // This is required to avoid an angry error from react when component unmount
      // We properly delete the running interval
      clearInterval(intervalId)
    }
  }, [])

  return <React.Fragment>{timeleft}</React.Fragment>
}

export default CountDown
