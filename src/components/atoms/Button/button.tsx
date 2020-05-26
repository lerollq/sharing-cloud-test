import React from 'react'
import styled, { css } from 'styled-components'

interface StyledProps {
  color?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  disabled?: boolean
  borderless?: boolean
  fontSize?: 'x-large' | 'large' | 'medium' | 'small' | 'xx-large'
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export type ButtonProps = StyledProps

const Button: React.FC<ButtonProps> = ({ className, children, onClick, disabled, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

export default styled.button<StyledProps>`
  display: inline-block;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  ${({ color }) =>
    color === 'primary' &&
    `
      background: purple;
      color: white;
    `}
  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      opacity: 0.5;
    `}
  ${({ block }) =>
    block &&
    `
      width: 100%;
    `}
  ${({ borderless }) =>
    borderless &&
    `
      border: none;
    `}
  ${({ fontSize }) =>
    fontSize &&
    `
      font-size: ${fontSize};
    `}
`
