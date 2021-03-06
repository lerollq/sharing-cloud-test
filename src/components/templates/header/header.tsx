import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../../organisms/Navbar'

interface Props {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => (
  <header className={className}>
    <Navbar />
  </header>
)

export default styled(Header)`
  background-color: purple;
`
