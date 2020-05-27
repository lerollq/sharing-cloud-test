import styled, { css } from 'styled-components'

interface StyledGridProps {
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const StyledCol = styled.div<StyledGridProps>`
  display: inline-block;
  height: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  width: auto;

  @media only screen and (min-width: 0px) {
    ${({ xs }) =>
      xs &&
      `
        width: ${(xs / 12) * 100}%;
      `};
  }

  @media only screen and (min-width: 540px) {
    ${({ sm }) =>
      sm &&
      `
        width: ${(sm / 12) * 100}%;
      `};
  }

  @media only screen and (min-width: 720px) {
    ${({ md }) =>
      md &&
      `
        width: ${(md / 12) * 100}%;
      `};
  }

  @media only screen and (min-width: 960px) {
    ${({ lg }) =>
      lg &&
      `
        width: ${(lg / 12) * 100}%;
      `};
  }

  @media only screen and (min-width: 1140px) {
    ${({ xl }) =>
      xl &&
      `
        width: ${(xl / 12) * 100}%;
      `};
  }
`

interface StyledRowProps {
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'end' | 'start' | 'flex-end' | 'flex-start'
  justifyContent?: 'center' | 'flex-end' | 'flex-start'
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  width: 100%;
  margin-bottom:5px;
  ${({ flexWrap }) =>
    flexWrap
      ? css`
          flex-wrap: ${flexWrap};
        `
      : css`
          flex-wrap: wrap;
        `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
`

export default {
  Col: StyledCol,
  Row: StyledRow,
}
