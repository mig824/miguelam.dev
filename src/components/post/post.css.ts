import styled from '@emotion/styled'

import { defaultTheme, mobileLandscape480 } from '@utils/design'

export const ArticleCSS = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mobileLandscape480} {
    flex-direction: row;
  }
`

export const ImageContainer = styled.div`
  width: 35%;
  height: 100%;
  margin: auto;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 65%;
  margin: auto;

  a {
    color: inherit;
    text-decoration: none;
  }

  .title {
    margin: 1rem 0;
    text-align: center;
    color: ${defaultTheme.secondaryColor};

    &:hover {
      color: ${defaultTheme.secondaryColorHover};
    }
  }

  .snippet {
    text-align: center;
    margin: 0;
  }

  .read-more {
    text-align: right;
    margin-top: 1rem;
    color: ${defaultTheme.tertiaryColor};
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(1%);
    }
  }

  ${mobileLandscape480} {
    margin: 0;
  }
`

export const PostMetadata = styled.div`
  display: flex;
  justify-content: space-between;

  small {
    color: ${defaultTheme.accentColor};
  }
`
