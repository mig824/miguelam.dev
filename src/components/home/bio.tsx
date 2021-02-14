import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { tabletPortrait768 } from '../../utils/style'

export const Bio: FC = () => {
  const { bioImage } = useStaticQuery(graphql`
    query {
      bioImage: file(relativePath: { eq: "pic_with_doggos.png.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionContainer>
      <TextContainer>
        <h3>Hola!</h3>
        <p>
          Miguel is a software engineer with experience working on both ends of
          the stack, primarily in JavaScript land (other languages don't worry
          him though since he speaks computer). He enjoys tackling challenging
          problems, creating things that are useful to others, and constantly
          working on his craft. He believes that sharing our knowledge is the
          key to success and that hard work beats talent every day of the week.
          He also wants to pet your dog or cat or &lt;insert pet here&gt;...you
          get the idea.
        </p>
      </TextContainer>
      <ImgContainer>
        <Img fluid={bioImage.childImageSharp.fluid} />
      </ImgContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  max-width: 1100px;
  margin: auto;

  ${tabletPortrait768} {
    flex-direction: row;
    justify-content: space-between;
    padding: 3em;
  }
`

const TextContainer = styled.div`
  max-width: 550px;
  padding: 0.5em;
  margin-bottom: 1em;

  ${tabletPortrait768} {
    width: 80%;
    margin: auto;
    padding: 0 2em 0 1em;
  }
`

const ImgContainer = styled.div`
  max-width: 550px;
  width: 90%;
  margin: auto;
`
