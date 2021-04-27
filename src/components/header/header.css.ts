import styled from '@emotion/styled'

import { defaultTheme } from '@utils/design'

export const HeaderCSS = styled.header`
  border-bottom: solid 2px ${defaultTheme.accentColor};
  padding: 0 1.5rem;

  h4 {
    color: ${defaultTheme.secondaryColor};
  }

  a {
    color: ${defaultTheme.secondaryColor};
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${defaultTheme.secondaryColor};
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  .blog-text {
    color: ${defaultTheme.tertiaryColor};

    &::after {
      background-color: ${defaultTheme.tertiaryColor};
    }
  }
`
