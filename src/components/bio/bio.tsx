import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  Section,
  ContentContainer,
  ImgContainer,
  TextContainer,
  ListContainer,
  List,
} from './bio.css'

export const Bio: FC = () => {
  return (
    <Section>
      <ContentContainer>
        <TextContainer>
          <h3>Hola!</h3>
          <p>
            Miguel is a California-based software engineer with experience
            working on both ends of the stack, primarily in JavaScript land
            (other languages don't worry him though since he speaks computer).
            He enjoys tackling challenging problems, creating things that are
            useful to others, and learning new ways to improve his skillset. He
            believes that sharing our knowledge is the key to success and that
            hard work beats talent every day of the week.
          </p>
          <p>
            {' '}
            When he's not doing computer-related things he's out rock climbing,
            camping, snowboarding, running, or eating. He also wants to pet your
            dog, cat, or <i>&lt;insert pet here&gt;</i>.
          </p>
        </TextContainer>
        <ListContainer>
          <p className="mint">
            He specializes in the following languages/tools to provide
            performant, intuitive user experiences:
          </p>
          <List>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Node.js / Express.js</li>
            <li>React / Gatsby</li>
            <li>CSS-in-JS</li>
            <li>GraphQL</li>
          </List>
        </ListContainer>
        <ImgContainer>
          <StaticImage
            src="../../images/pic-with-doggos.jpeg"
            alt="A picture of Miguel with dogs in front of the Golden Gate Bridge"
            layout="fullWidth"
            placeholder="tracedSVG"
            quality={100}
          />
          <br />
          <small>
            Unfortunately no, they're not all his. Just the dude closest to the
            camera. That's his co-pilot, Rico
          </small>
        </ImgContainer>
      </ContentContainer>
    </Section>
  )
}
