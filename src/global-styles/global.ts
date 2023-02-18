import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily.pt}, sans-serif;
    color: ${theme.palette.white};
    background-color: ${theme.palette.white};

    overflow: hidden;
    overflow-y: auto;
  }

  #root {
    display: flex;
    
    position: relative;
  }
`
