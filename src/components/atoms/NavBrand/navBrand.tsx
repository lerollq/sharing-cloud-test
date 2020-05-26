import React from 'react'
import styled from 'styled-components'

interface OwnProps {
  className?: string
}

const NavBrand: React.FC<OwnProps> = ({ className }) => <div className={className}>Micro Booking</div>

export default styled(NavBrand)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`
