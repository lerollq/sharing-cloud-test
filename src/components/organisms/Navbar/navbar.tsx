import React, { useState } from 'react'
import styled from 'styled-components'
import { NavMenu } from '../../molecules/NavMenu'
import { NavBrand } from '../../atoms/NavBrand'
import { BurgerButton } from '../../molecules/BurgerButton'

interface OwnProps {
  className?: string
}

const Navbar: React.FC<OwnProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false)
  return (
    <nav className={className}>
      <NavBrand />
      <BurgerButton onClick={() => setCollapse(!collapse)} color='primary' />
      <NavMenu show={collapse} />
    </nav>
  )
}

export default styled(Navbar)`
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
