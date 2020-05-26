import styled from 'styled-components'

interface StyledProp {
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

const StyledCol = styled.div<StyledProp>`
  display: inline-block;
  height: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  ${({ xs }) => (xs ? `width: ${(xs / 12) * 100}%` : 'width:100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && `width: ${(sm / 12) * 100}%`};
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && `width: ${(md / 12) * 100}%`};
  }

  @media only screen and (min-width: 768px) {
    ${({ lg }) => lg && `width: ${(lg / 12) * 100}%`};
  }
`

export default StyledCol
