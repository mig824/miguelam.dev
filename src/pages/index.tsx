import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '@components/seo'
import { Post } from '@components/post'
import {
  defaultTheme,
  tabletPortrait768,
  tabletLandscape992,
} from '@utils/design'

export default function BlogPage({ data }) {
  return (
    <>
      <SEO title="Blog" />
      <PostsContainer>
        {data.remark.nodes.map((post, idx) => (
          <React.Fragment key={post.id}>
            {idx === 0 && <hr />}
            <Post post={post} />
            <hr />
          </React.Fragment>
        ))}
      </PostsContainer>
    </>
  )
}

const PostsContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;

  hr {
    width: 40%;
    border-color: ${defaultTheme.tertiaryColor};
    margin: 2rem auto;
  }

  ${tabletPortrait768} {
    width: 70%;
  }

  ${tabletLandscape992} {
    width: 60%;
  }
`

export const BlogQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        pathname
        github
        linkedin
      }
    }
    remark: allMarkdownRemark {
      nodes {
        id
        timeToRead
        frontmatter {
          title
          slug
          date
          category
          snippet
          imageDesc
          image {
            sharp: childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
