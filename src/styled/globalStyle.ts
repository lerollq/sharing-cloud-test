import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *  {
    box-sizing: border-box;
  }
  html, 
  body, #root {
    display: block;
  }

  body {
    margin:0;
  }
`
