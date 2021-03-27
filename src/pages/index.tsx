import React from 'react'

import SEO from '@components/seo'
import { Hero } from '@components/hero'
import { Bio } from '@components/bio'

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Bio />
    </>
  )
}
