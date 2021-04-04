import React, { FC } from 'react'

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
