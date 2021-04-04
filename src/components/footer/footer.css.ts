import styled from '@emotion/styled'

import { defaultTheme, mobileLandscape480 } from '@utils/design'

export const FooterCSS = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.lightTextColor};
  padding: 2rem 1rem;

  a {
    color: ${defaultTheme.tertiaryColor};
    text-decoration: none;
    font-weight: 600;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${defaultTheme.tertiaryColor};
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  svg {
    max-height: 2rem;
    width: 2rem;
    transition: transform 0.2s ease-in-out;
    margin-left: 6px;

    &:hover {
      transform: translateY(-13%);
      cursor: pointer;
    }
  }

  div:first-of-type {
    margin-bottom: 1rem;
  }

  ${mobileLandscape480} {
    flex-direction: row;
    align-items: center;

    div:first-of-type {
      margin-bottom: 0;
    }

    div:last-of-type {
      margin-top: 0;
    }
  }
`
