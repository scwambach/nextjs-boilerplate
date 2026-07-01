import { Radius } from '../../../utils/types/types'

/**
 * The inner image sits inset within the card's outer Box, so it needs a
 * smaller corner radius than the card itself (unless the card uses the
 * smallest radius already, in which case the image stays square-ish).
 */
export const getInnerImageRadius = (
  boxRadius?: Radius
): Radius | undefined => {
  if (!boxRadius) return undefined
  return boxRadius === 4 ? boxRadius : ((boxRadius - 4) as Radius)
}
