import styled, { css } from 'styled-components'

interface StyledProp {
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const StyledCol = styled.div<StyledProp>`
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
export default StyledCol
