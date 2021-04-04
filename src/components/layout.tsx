import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global as GlobalCSS } from '@emotion/react'
import '@fontsource/yeseva-one'
import '@fontsource/josefin-sans/300.css'

// import Header from './header'
import { Footer } from './footer'
import { globalCSS } from '@utils/design'

const Layout: FC = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          author
          pathname
          github
          linkedin
        }
      }
    }
  `)

  return (
    <>
      <GlobalCSS styles={globalCSS} />
      {/* <Header author={site.siteMetadata?.author || `Author`} /> */}
      <main>{children}</main>
      <Footer metadata={site.siteMetadata} />
    </>
  )
}

export default Layout
