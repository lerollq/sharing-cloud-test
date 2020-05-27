import styled from 'styled-components'

const Main = styled.main`
  background-color: ${({ theme: { colors } }) => colors.primary};
  flex: 1;
  padding: 2rem 0.5rem;
`

export default Main
