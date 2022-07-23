import { createGlobalStyle } from 'styled-components'
import '../../assets/fonts/Catamaran/Catamaran-VariableFont_wght.ttf'
export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Catamaran,sans-serif;
  }
  body {
    background-color: #222224;
    width: 100vw;
    height: 100vh
  }
  
`
