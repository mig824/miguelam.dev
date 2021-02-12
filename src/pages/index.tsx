import React, { FC } from 'react'

import SEO from '../components/seo'
import { Hero } from '../components/home'

const HomePage: FC = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <div>
      <h2>Testing</h2>
    </div>
  </>
)

export default HomePage
