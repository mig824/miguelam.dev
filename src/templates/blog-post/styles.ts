import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

import { defaultTheme, tabletPortrait768 } from '@utils/design'

export const PostHeader = styled(BackgroundImage)`
  height: 15rem;
  position: relative;

  h1 {
    background-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.tertiaryColor};
    margin: 0;
    padding: 1rem;
    width: fit-content;
    max-width: 80%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const SmallTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;

  small {
    color: ${defaultTheme.accentColor};
  }
`

export const MainContent = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;

  ${tabletPortrait768} {
    padding: 0;
  }

  h2 {
    margin: 2rem 0 1rem 0;
    color: ${defaultTheme.secondaryColor};
  }

  h3 {
    margin: 1.2rem 0 0.9rem 0;
  }

  li {
    line-height: 1.4rem;

    &::marker {
      color: ${defaultTheme.tertiaryColor};
    }
  }

  a {
    color: ${defaultTheme.lightTextColor};
    text-decoration-color: ${defaultTheme.tertiaryColor};
  }
`
