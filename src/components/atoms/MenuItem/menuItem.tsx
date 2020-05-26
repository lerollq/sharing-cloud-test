import styled from 'styled-components'

export default styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin-right: 10px;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
`
