import React, { useState, useEffect } from 'react'

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
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
      setTimeleft(
        `${days > 0 ? `${days}d ` : '0d '}${hours > 0 ? `${hours}h ` : '0h '}${minutes > 0 ? `${minutes}m ` : '0m '}${
          seconds > 0 ? `${seconds}s` : '0s '
        }`
      )
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
