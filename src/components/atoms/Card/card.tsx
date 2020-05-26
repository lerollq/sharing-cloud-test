import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Card: React.FC<Props> = ({ className, children }) => <div className={className}>{children}</div>

export default styled(Card)`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`
