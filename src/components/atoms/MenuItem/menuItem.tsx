import React from 'react'
import styled from 'styled-components'

interface OwnProps {
  className?: string
}

const MenuItem: React.FC<OwnProps> = ({ className, children }) => <li className={className}>{children}</li>

export default styled(MenuItem)`
  list-style: none;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
