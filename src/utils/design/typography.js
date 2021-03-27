import { MAX_SITE_WIDTH, MIN_SITE_WIDTH } from './global'

export const primaryFont = '"Josefin Sans", sans-serif'
export const headerFont = '"Yeseva One", Tahoma'
export const typeScale = {
  hero: '4rem',
  h1: '1.8rem',
  h2: '1.6rem',
  h3: '1.4rem',
  h4: '1.2rem',
  h5: '1.1rem',
  baseFontSize: '1rem',
  smallFontSize: '0.8rem',
  smallestFontSize: '0.6rem',
}

export const fluid = (min, max) =>
  `calc(${min}px + ${max - min} * ((100vw - ${MIN_SITE_WIDTH}px) / (${
    MAX_SITE_WIDTH - MIN_SITE_WIDTH
  })))`
