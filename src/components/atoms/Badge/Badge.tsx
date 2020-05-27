import styled from 'styled-components'

interface StyledProps {
  color: 'success' | 'danger'
}

export default styled.div<StyledProps>`
  padding: 0.35rem 1rem;
  border-radius: 2px;
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) => (color === 'success' ? 'green' : 'red')};
`
