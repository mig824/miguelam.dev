import styled from '@emotion/styled'

import { tabletPortrait768, defaultTheme, MAX_SITE_WIDTH } from '@utils/design'

export const Section = styled.section`
  padding: 0.5rem;
  padding-bottom: 2rem;
  width: 100%;
  margin: auto;
  border-bottom: solid 2px ${defaultTheme.secondaryColor};

  .mint {
    color: ${defaultTheme.accentColor};
    text-align: center;
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
  padding: 1rem;
  max-width: ${MAX_SITE_WIDTH}px;
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
  padding: 0.5rem;
  grid-area: bio;

  h2 {
    color: ${defaultTheme.secondaryColor};
  }

  ${tabletPortrait768} {
    width: 95%;
    padding: 1rem 0 1rem 1rem;
    margin-top: 1rem;
  }
`

export const ListContainer = styled.div`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;

  ${tabletPortrait768} {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 200px));
  list-style-type: '👉🏽';

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
