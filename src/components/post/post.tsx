import React, { FC } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

import {
  ArticleCSS,
  ImageContainer,
  TextContainer,
  PostMetadata,
} from './post.css'

interface PostProps {
  id: string
  timeToRead: number
  frontmatter: {
    title: string
    slug: string
    date: string
    category: string
    snippet: string
    imageDesc: string
    image: {
      sharp: IGatsbyImageData
    }
  }
}

export const Post: FC<{ post: PostProps }> = ({ post }) => {
  const { title, slug, date, snippet, image, imageDesc } = post.frontmatter
  const imageData = getImage(image.sharp)

  return (
    <ArticleCSS>
      <ImageContainer>
        <Link to={`/${slug}`}>
          {imageData && <GatsbyImage image={imageData} alt={imageDesc} />}
        </Link>
      </ImageContainer>
      <TextContainer>
        <PostMetadata>
          <small>{post.timeToRead} minute read</small>
          <small>{date}</small>
        </PostMetadata>
        <Link to={`/${slug}`}>
          <h3 className="title">{title}</h3>
        </Link>
        <p className="snippet">{snippet}</p>
        <Link to={`/${slug}`} className="read-more">
          Read &rarr;
        </Link>
      </TextContainer>
    </ArticleCSS>
  )
}
