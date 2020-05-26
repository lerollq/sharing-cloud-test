import styled from 'styled-components'

export default styled.input`
  display: block;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 0.35rem 0.25rem;
  background: transparent;

  &[type='range'] {
    cursor: pointer;
  }
`
