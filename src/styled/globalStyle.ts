import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *  {
    box-sizing: border-box;
  }
  html, 
  body, #root {
    height:100vh;
  }

  html, body {
    display:block;    
  }

  #root {
    display:flex;
    flex-direction:column;
  }

  body {
    margin:0;
    font-family: 'Quicksand', sans-serif;
  }
`
