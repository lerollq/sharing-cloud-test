import React from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  title: string
  alt: string
  className?: string
  width: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

const Image: React.FC<Props> = ({ className, src, title, alt }) => (
  <img className={className} src={src} title={title} alt={alt} />
)

const StyledImage = styled(Image)`
  height: auto;
  ${({ width }) => (width ? `width: ${width}` : 'width:100%')};
`

export default StyledImage
