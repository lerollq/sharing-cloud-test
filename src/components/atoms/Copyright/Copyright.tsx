import React from 'react'

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <React.Fragment>
      Made with
      <span role='img' aria-label='heart'>
        ❤️
      </span>
      by LaSmala - No Copyright {currentYear}
    </React.Fragment>
  )
}

export default Copyright
