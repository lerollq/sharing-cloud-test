import styled from 'styled-components'

const Footer = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.primary};
  text-align: center;
  color: white;
  padding: 1rem;
`

export default Footer
