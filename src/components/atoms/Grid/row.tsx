import styled, { css } from 'styled-components'

interface StyledProp {
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'end' | 'start' | 'flex-end' | 'flex-start'
  justifyContent?: 'center' | 'flex-end' | 'flex-start'
}

export default styled.div<StyledProp>`
  display: flex;
  width: 100%;
  margin-bottom:5px;
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
