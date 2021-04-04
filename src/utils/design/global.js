import { css } from '@emotion/react'
import { headerFont, primaryFont, typeScale, fluid } from './typography'
import { defaultTheme } from './themes'
import { desktop1200 } from './breakpoints'

export const MIN_SITE_WIDTH = 360
export const MAX_SITE_WIDTH = 1100
export const globalCSS = css`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: ${fluid(14, 17)};

    ${desktop1200} {
      font-size: 17.25px;
    }
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

  p {
    font-size: ${typeScale.baseFontSize};
    line-height: ${fluid(20, 24)};
  }

  li {
    font-size: ${typeScale.baseFontSize};
  }

  small {
    font-size: ${typeScale.smallFontSize};
    color: ${defaultTheme.captionTextColor};
  }

  input,
  textarea {
    font-family: ${defaultTheme.primaryFont};
    font-size: ${typeScale.baseFontSize};
    color: ${defaultTheme.darkTextColor};
    font-weight: 600;
  }
`
