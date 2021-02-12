import React, { FC } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { darkTheme, typeScale } from '../../utils/style'

export const Hero: FC = () => {
  return (
    <HeroContainer>
      <NameContainer>
        <h1>Miguel</h1>
        <h1 id="thin">Michel</h1>
      </NameContainer>
      <Stripes />
      <Stripes2 />
      <Stripes3 />
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  border-bottom: 2px solid ${darkTheme.tertiaryColor};
  overflow: hidden;
`
const NameContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1rem;

  h1 {
    font-size: ${typeScale.hero};
    color: ${darkTheme.tertiaryColor};
    letter-spacing: 1rem;
  }

  #thin {
    font-family: ${darkTheme.primaryFont};
  }
`

const slide = keyframes`
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
`

const Stripes = styled.div`
  animation: ${slide} 4s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    ${darkTheme.primaryColor} 50%,
    ${darkTheme.secondaryColor} 50%
  );
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
`

const Stripes2 = styled(Stripes)`
  animation-direction: alternate-reverse;
  animation-duration: 5s;
`

const Stripes3 = styled(Stripes)`
  animation-duration: 6s;
`
