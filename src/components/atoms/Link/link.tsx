import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

interface OwnProps {
  to: string
  className?: string
}

export type LinkProps = OwnProps

const Link: React.FC<LinkProps> = ({ to, className, children }) => (
  <RouterLink to={to} className={className} role='button'>
    {children}
  </RouterLink>
)

export default styled(Link)`
  text-decoration: none;
  color: white;
  font-size: large;
  font-weight: bold;
`
