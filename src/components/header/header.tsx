import React, { FC } from 'react'

import { HeaderCSS } from './header.css'

export const Header: FC<{ author: string }> = ({ author = '' }) => (
  <HeaderCSS>
    <h4>
      <a href="https://mmiguel.dev" target="_blank" rel="noopener noreferrer">
        {author}
      </a>{' '}
      | <span className="blog-text">Blog</span>
    </h4>
  </HeaderCSS>
)
