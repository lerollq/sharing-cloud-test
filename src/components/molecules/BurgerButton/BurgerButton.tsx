import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '../../atoms/Button'

interface OwnProps extends ButtonProps {
  className?: string
}

const BurgerButton: React.FC<OwnProps> = ({ className, ...buttonProps }) => (
  <div className={className}>
    <Button {...buttonProps} fontSize='x-large' borderless>
      <i className='fas fa-bars'></i>
    </Button>
  </div>
)

export default styled(BurgerButton)`
  display: none;
  margin-left: auto;
  transition: transform 0.4s;
  > button:focus {
    outline: none;
  }
  &:hover {
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`
