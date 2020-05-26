import styled from 'styled-components'

interface StyledProps {
  width: string
}

const StyledImage = styled.img<StyledProps>`
  height: auto;
  ${({ width }) => (width ? `width: ${width}` : 'width:100%')};
`

export default StyledImage
