import { css } from '@emotion/react'
import { headerFont, primaryFont } from './typography'
import { darkTheme } from './themes'

export const globalCSS = css`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${darkTheme.backgroundColor};
    font-family: ${primaryFont};
  }

  main {
    margin: 0 auto;
    color: ${darkTheme.lightTextColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${headerFont};
  }
`
