import React from 'react'
import { graphql } from 'gatsby'

import SEO from '@components/seo'

export default function HomePage() {
  return (
    <>
      <SEO title="Blog" />
      <p style={{ textAlign: 'center' }}>Under Construction 👷🏽‍♀️</p>
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
