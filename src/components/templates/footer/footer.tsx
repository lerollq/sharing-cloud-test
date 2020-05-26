import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => (
  <div className={className}>
    Made with{' '}
    <span role='img' aria-label='heart'>
      ❤️
    </span>{' '}
    by LaSmala - No Copyright {new Date().getFullYear()}
  </div>
)

export default styled(Footer)`
  text-align: center;
  padding: 1rem;
  background-color: purple;
  color: white;
`
