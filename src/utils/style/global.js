import { css } from '@emotion/react'
import { headerFont, primaryFont, typeScale } from './typography'
import { defaultTheme } from './themes'

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
    background-color: ${defaultTheme.backgroundColor};
    font-family: ${primaryFont};
  }

  main {
    margin: 0 auto;
    color: ${defaultTheme.lightTextColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${headerFont};
  }

  h1 {
    font-size: ${typeScale.h1};
  }

  h2 {
    font-size: ${typeScale.h2};
  }

  h3 {
    font-size: ${typeScale.h3};
  }

  h4 {
    font-size: ${typeScale.h4};
  }

  h5 {
    font-size: ${typeScale.h5};
  }

  p,
  li {
    font-size: ${typeScale.paragraph};
    line-height: 1.5rem;
  }
`
