import React, { FC } from 'react'

import SEO from '../components/seo'
import { Hero, Bio } from '../components/home'

const HomePage: FC = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Bio />
  </>
)

export default HomePage
