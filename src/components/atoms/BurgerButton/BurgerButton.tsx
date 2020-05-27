import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../styled'
import { ButtonStyledProps } from '../../../styled/components/button'

type OwnProps = React.HTMLAttributes<HTMLButtonElement> & ButtonStyledProps

interface StyledProps {
  className?: string
}

const BurgerButton: React.FC<StyledProps & OwnProps> = ({ className, ...props }) => (
  <Button {...props} className={className}>
    <i className='fas fa-bars' />
  </Button>
)

export default styled(BurgerButton)`
  display: none;
  margin-left: auto;
  transition: transform 0.4s;
  font-size: x-large;
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
