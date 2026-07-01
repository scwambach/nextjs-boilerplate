import { Themes } from '../../../utils/types/types'

/**
 * Picks the accent color used for the highlight tag/CTA button so it
 * contrasts with the card's own theme background.
 */
export const getAccentTheme = (theme: Themes): Themes => {
  switch (theme) {
    case 'primary':
    case 'secondary':
      return 'tertiary'
    case 'tertiary':
      return 'secondary'
    default:
      return 'primary'
  }
}
