import React, { FC } from 'react'

import LinkedinIcon from '../../utils/icons/linkedin-icon.svg'
import GithubIcon from '../../utils/icons/github-icon.svg'
import { FooterCSS } from './footer.css'

interface MetadataProps {
  author: string
  pathname: string
  linkedin: string
  github: string
}

export const Footer: FC<{ metadata: MetadataProps }> = ({ metadata }) => {
  return (
    <FooterCSS>
      <div>
        <a
          href={`${metadata.github}/${metadata.pathname}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the source code!
        </a>
      </div>
      <div className="icons">
        <a href={metadata.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="linkedin" alt="Linkedin logo" />
        </a>
        <a href={metadata.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="github" alt="Github logo" />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </div>
    </FooterCSS>
  )
}
