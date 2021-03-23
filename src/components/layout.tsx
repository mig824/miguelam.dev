import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global as GlobalCSS } from '@emotion/react'

import Header from './header'
import { globalCSS } from '../utils/style'

const Layout: FC = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <GlobalCSS styles={globalCSS} />
      {/* <Header author={site.siteMetadata?.author || `Author`} /> */}

      <main>{children}</main>
      {/* <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </>
  )
}

export default Layout
