import styled from '@emotion/styled'

import { tabletPortrait768, defaultTheme } from '../../utils/style'

export const Section = styled.section`
  padding: 1em;
  width: 100%;
  margin: auto;
  border-bottom: solid 2px ${defaultTheme.accentColor};

  .mint {
    color: ${defaultTheme.accentColor};
  }

  ${tabletPortrait768} {
    flex-direction: row;
    justify-content: space-between;
    padding: 3em;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  max-width: 1100px;
  margin: auto;

  ${tabletPortrait768} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'bio image'
      'skills skills';
  }
`

export const TextContainer = styled.div`
  max-width: 550px;
  height: 100%;
  padding: 0.5em;
  margin: 1em 1em 1em 0;
  grid-area: bio;

  h3 {
    color: ${defaultTheme.secondaryColor};
  }

  ${tabletPortrait768} {
    width: 80%;
    padding: 1em 2em 1em 1em;
  }
`

export const ListContainer = styled.div`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 200px));
  list-style-type: '\u2192';

  li::marker {
    color: ${defaultTheme.tertiaryColor};
  }

  li {
    padding: 0.5rem;
  }
`

export const ImgContainer = styled.div`
  max-width: 550px;
  width: 90%;
  margin: auto;
  grid-area: image;
`
