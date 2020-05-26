import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, 
  body {
    height: 100vh;
    margin:0;
  }
  body {
    font-family: Quicksand, sans-serif;
    font-weight: 300;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
   }
`
