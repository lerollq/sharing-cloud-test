import React from 'react'
import styled from 'styled-components'
import { Countdown } from '../../atoms/CountDown'

interface Props {
  className?: string
}
const Workspace: React.FC<Props> = ({ children, className }) => (
  <div className={className}>
    <Countdown date={1590449477376} handler={() => console.log('CountDown finish')} />
    {children}
  </div>
)

export default styled(Workspace)`
  flex: 1;
  padding: 2rem 0.5rem;
`
