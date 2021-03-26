import { green, lavender, gold, neutral, darkBlue, mint } from './colors'
import { headerFont, primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: green[200],
  primaryColorHover: green[100],
  primaryColorActive: green[300],
  secondaryColor: lavender[200],
  secondaryColorHover: lavender[100],
  secondaryColorActive: lavender[300],
  tertiaryColor: gold[200],
  tertiaryColorHover: gold[100],
  tertiaryColorActive: gold[300],
  lightTextColor: neutral[200],
  darkTextColor: neutral[600],
  captionTextColor: neutral[300],
  backgroundColor: darkBlue[200],
  accentColor: mint[200],
  headerFont,
  primaryFont,
}
