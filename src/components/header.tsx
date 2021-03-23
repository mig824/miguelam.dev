import React, { FC } from 'react'

const Header: FC<{ author: string }> = ({ author = '' }) => (
  <header>
    <h4>{author}</h4>
  </header>
)

export default Header
