import React, { FC } from 'react'

import { FooterCSS } from './footer.css'
import ExternalLinkIcon from '@utils/icons/external-link.svg'

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
        <a href="https://mmiguel.dev" target="_blank" rel="noopener noreferrer">
          main site
        </a>
        <a
          href={`${metadata.github}/${metadata.pathname}/tree/blog`}
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
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
