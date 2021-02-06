import React from 'react'
import { Link } from 'gatsby'

import { darkTheme } from '../utils/style'

const Header = ({ siteTitle = '' }) => (
  <header
    style={{
      background: darkTheme.primaryColor,
      marginBottom: `1.45rem`,
      borderBottom: `${darkTheme.tertiaryColor} 2px solid`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: darkTheme.lightTextColor,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
