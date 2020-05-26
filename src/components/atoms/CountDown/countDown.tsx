import React, { useState, useEffect } from 'react'

interface OwnProps {
  date: string | number
  handler?(): void
}

const CountDown: React.FC<OwnProps> = ({ date, handler }) => {
  const [timeleft, setTimeleft] = useState('')

  useEffect(() => {
    const id = setInterval(() => {
      const timeleft = new Date(date).getTime() - new Date().getTime()
      if (timeleft < 0 && handler) {
        handler()
      }
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
      setTimeleft(
        `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m ` : ''}${
          seconds > 0 ? `${seconds}s` : ''
        }`
      )
    }, 1000)

    return () => {
      // This is required to avoid an angry error from react when component unmount
      // We properly delete the running interval
      clearInterval(id)
    }
  })

  return <React.Fragment>{timeleft}</React.Fragment>
}

export default CountDown
