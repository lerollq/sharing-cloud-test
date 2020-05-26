import React from 'react'
import styled from 'styled-components'

export interface CardBodyProps {
  className?: string
}

const CardBody: React.FC<CardBodyProps> = ({ className, children }) => <div className={className}>{children}</div>

export default styled(CardBody)`
  padding: 1rem 2rem;
  width: 100%;
`
