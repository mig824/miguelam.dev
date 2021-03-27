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

    &:hover {
      cursor: pointer;
      color: ${defaultTheme.tertiaryColorHover};
      text-decoration: underline;
      font-weight: 600;
    }
  }

  div:first-of-type {
    margin-bottom: 1rem;
    order: 2;
  }

  div:last-of-type {
    order: 3;
  }

  .icons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
    order: 1;

    svg {
      max-height: 2rem;
      width: 2rem;
      white-space: default;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: translateY(-13%);
        cursor: pointer;
      }
    }

    .linkedin {
      g > #background {
        fill: ${defaultTheme.tertiaryColor} !important;
      }
    }

    .linkedin {
      g > #shapes > * {
        fill: ${defaultTheme.primaryColor} !important;
      }
    }

    .github {
      margin-left: 0.8rem;

      g > path {
        fill: ${defaultTheme.tertiaryColor} !important;
      }
    }
  }

  ${mobileLandscape480} {
    flex-direction: row;
    align-items: center;

    div:first-of-type {
      margin-bottom: 0;
      order: 1;
    }

    .icons {
      margin: 0;
      order: 2;
    }

    div:last-of-type {
      margin-top: 0;
      order: 3;
    }
  }
`
