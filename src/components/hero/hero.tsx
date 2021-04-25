import React, { FC } from 'react'

import {
  HeroContainer,
  NameContainer,
  Stripes,
  Stripes2,
  Stripes3,
} from './hero.css'

export const Hero: FC = () => {
  return (
    <HeroContainer>
      <NameContainer>
        <h1>Blog</h1>
      </NameContainer>
      <Stripes />
      <Stripes2 />
      <Stripes3 />
    </HeroContainer>
  )
}
