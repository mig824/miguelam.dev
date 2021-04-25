import React from 'react'
import { graphql } from 'gatsby'

import SEO from '@components/seo'
import { Hero } from '@components/hero'
import { Bio } from '@components/bio'
import { Contact } from '@components/contact'

export default function HomePage({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <p>Blog goes here</p>
    </>
  )
}

export const HomePageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        pathname
        github
        linkedin
      }
    }
  }
`
