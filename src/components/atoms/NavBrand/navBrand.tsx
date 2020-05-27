import React from 'react'
import styled from 'styled-components'
import { Link } from '../Link'

interface OwnProps {
  className?: string
}

const NavBrand: React.FC<OwnProps> = ({ className }) => (
  <div className={className}>
    <Link to="/">Micro Booking</Link>
  </div>
)

export default styled(NavBrand)`
  color: white;

  > a {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
