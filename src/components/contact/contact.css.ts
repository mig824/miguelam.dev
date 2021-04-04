import styled from '@emotion/styled'

import { defaultTheme, tabletPortrait768 } from '@utils/design'

export const Section = styled.section`
  padding: 0.5rem;
  padding-bottom: 2rem;
  width: 100%;
  margin: auto;
  border-bottom: solid 2px ${defaultTheme.accentColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${tabletPortrait768} {
    padding: 3rem;
  }
`
export const FormHeader = styled.div`
  text-align: center;

  h2 {
    color: ${defaultTheme.tertiaryColor};
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1.4rem 0;

  a,
  button {
    background-color: transparent;
    padding: 0;
    border: none;
  }

  svg {
    max-height: 2.5rem;
    width: 2.5rem;
    white-space: default;
    transition: transform 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }

  .email {
    fill: ${defaultTheme.accentColor} !important;

    &:hover {
      transform: rotate(45deg);
    }
  }

  .linkedin {
    margin-left: 1.4rem;
    fill: ${defaultTheme.accentColor} !important;

    &:hover {
      transform: rotate(-45deg);
    }
  }

  .github {
    margin-left: 1.4rem;

    g > path {
      fill: ${defaultTheme.accentColor} !important;
    }

    &:hover {
      transform: rotate(74deg);
    }
  }
`

export const Form = styled.form`
  overflow: hidden;
  width: 90%;
  max-width: 700px;
  transition: max-height 0.6s ease;

  label {
    width: 100%;
    display: flex;
    margin: 1.5rem 0 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  input {
    width: 99%;
    height: 2rem;
    border-radius: 3px;
    border: none;
    padding: 0 0.5rem;
  }

  textarea {
    width: 99%;
    border-radius: 3px;
    border: none;
    padding: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.7rem 0;
    margin-top: 2rem;
    color: ${defaultTheme.tertiaryColor};
    background-color: transparent;
    border: 2px solid ${defaultTheme.secondaryColor};
    border-radius: 3px;
    letter-spacing: 2px;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      border: 2px solid ${defaultTheme.secondaryColorHover};
      letter-spacing: 4px;
    }
  }

  ${tabletPortrait768} {
    width: 70%;
  }
`
