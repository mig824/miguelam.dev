import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

import SEO from '@components/seo'
import { MainContent, PostHeader, SmallTextBox } from './styles'

export default function BlogPostTemplate({ data: { post } }) {
  const imageData = getImage(post.frontmatter.image.sharp)
  const bgImageData = convertToBgImage(imageData)

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <article>
        {bgImageData && (
          <PostHeader
            Tag="div"
            aria-label={post.frontmatter.imageDesc}
            {...bgImageData}
          >
            <h1>{post.frontmatter.title}</h1>
          </PostHeader>
        )}
        <SmallTextBox>
          <small>{post.frontmatter.date}</small>
          <small>{post.timeToRead} minute read</small>
        </SmallTextBox>
        <MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </>
  )
}

export const BlogPostQuery = graphql`
  query($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        title
        date
        imageDesc
        image {
          sharp: childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`
