import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global as GlobalCSS } from '@emotion/react'

import Header from './header'
import { Footer } from './footer'
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
      <Footer />
    </>
  )
}

export default Layout
