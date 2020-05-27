import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  className?: string
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'end' | 'start' | 'flex-end' | 'flex-start'
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

const CardHeader: React.FC<Props> = ({ className, children }) => <div className={className}>{children}</div>

export default styled(CardHeader)`
  display: flex;
  padding: 1rem 2rem;
  width: 100%;
  ${({ flexWrap }) => (flexWrap
    ? css`
          flex-wrap: ${flexWrap};
        `
    : css`
          flex-wrap: wrap;
        `)}
  ${({ alignItems }) => alignItems
    && css`
      align-items: ${alignItems};
    `}
  ${({ justifyContent }) => justifyContent
    && css`
      justify-content: ${justifyContent};
    `}
`
