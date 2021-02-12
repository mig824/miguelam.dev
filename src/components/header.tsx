import React, { FC } from 'react'
import styled from '@emotion/styled'

import { darkTheme } from '../utils/style'

const Header: FC<{ author: string }> = ({ author = '' }) => (
  <header>
    <h4>{author}</h4>
  </header>
)

export default Header
