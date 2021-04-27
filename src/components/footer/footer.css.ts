import styled from '@emotion/styled'

import { defaultTheme, mobileLandscape480 } from '@utils/design'

export const FooterCSS = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.lightTextColor};
  border-top: solid 2px ${defaultTheme.tertiaryColor};
  padding: 2rem 1rem;

  a {
    text-decoration: none;
    position: relative;
    color: ${defaultTheme.lightTextColor};

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

    &:hover {
      font-weight: 600;
      color: ${defaultTheme.tertiaryColor};
    }
  }

  svg {
    max-height: 1rem;
    width: 1rem;
    transition: transform 0.2s ease-in-out;
    fill: ${defaultTheme.tertiaryColor};
  }

  div:first-of-type {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    a:last-of-type {
      padding-top: 0.65rem;
    }
  }

  ${mobileLandscape480} {
    flex-direction: row;
    align-items: center;

    div:first-of-type {
      margin-bottom: 0;
    }

    div:last-of-type {
      margin-top: 0;
      align-self: flex-end;
    }
  }
`
