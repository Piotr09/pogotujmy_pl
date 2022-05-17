import { createGlobalStyle } from 'styled-components'

import type { Theme } from './theme'
import theme from './theme'

interface StyleProps {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<StyleProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

  html, body, button {
    font-size: 16px;
    overflow-x: hidden;
    font-family: ${
      theme.fonts.primary
    }, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  img {
    display: block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    border-style: none;
  }

  ul, li {
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

 
  h1 {
    font-size: 32px;

    @media ${({ theme }) => theme.media.desktop} {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 24px;

    @media ${({ theme }) => theme.media.desktop} {
      font-size: 32px;
    }
  }

  h3 {
    font-size: 20px;

    @media ${({ theme }) => theme.media.desktop} {
      font-size: 24px;
    }
  }


  input {
    border: 2px solid #dddddd;
    border-radius: 6px;
    padding: 8px 20px;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  
  button {
    align-items: center;
    appearance: none;
    border: 0;
    background: none;
    text-align: unset;
    cursor: pointer;
    
    svg {
      margin-top: 10px;
      width: 17px;
      height: 17px;
    }
  }

  p {
    font-size: 15.5px;
    line-height: 27px;
  }

  .swiper-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
  .swiper-slide {
    position: relative;
  }
  
`

export default GlobalStyle
