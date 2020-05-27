import styled, { css } from 'styled-components'

interface StyledProps {
  color?: 'primary' | 'secondary'
  block?: boolean
  outlined?: boolean
}

const BaseButton = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 0.45rem 0.65rem;
  border: 2px solid transparent;
  border-radius: 2px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default styled(BaseButton)<StyledProps>`
  ${({ theme, color, outlined }) =>
    color === 'primary' &&
    css`
      color: white;
      background-color: ${theme.colors.primary};

      ${outlined &&
      css`
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      `}
    `}

    ${({ outlined }) =>
      outlined &&
      css`
        background-color: transparent;
      `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`
