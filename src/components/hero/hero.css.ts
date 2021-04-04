import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { defaultTheme, typeScale } from '@utils/design'

export const HeroContainer = styled.section`
  width: 100%;
  height: 20vh;
  position: relative;
  border-bottom: 2px solid ${defaultTheme.tertiaryColor};
  overflow: hidden;
`
export const NameContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1rem;

  h1 {
    font-size: ${typeScale.hero};
    color: ${defaultTheme.tertiaryColor};
    letter-spacing: 1rem;
  }

  #thin {
    font-family: ${defaultTheme.primaryFont};
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

export const Stripes = styled.div`
  animation: ${slide} 4s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    ${defaultTheme.primaryColor} 50%,
    ${defaultTheme.secondaryColor} 50%
  );
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
`

export const Stripes2 = styled(Stripes)`
  animation-direction: alternate-reverse;
  animation-duration: 5s;
`

export const Stripes3 = styled(Stripes)`
  animation-duration: 6s;
`
