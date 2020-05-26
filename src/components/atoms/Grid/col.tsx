import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

const Col: React.FC<Props> = ({ className, children }) => <div className={className}>{children}</div>

const StyledCol = styled(Col)`
  display: inline-block;
  height: auto;
  padding-right: 5px;
  padding-left: 5px;
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
