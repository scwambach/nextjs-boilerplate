import { Radius } from '@utils/types/types'

/**
 * Derives the inner image radius for a Timeline event: 4px less than the
 * outer box radius (since the inner image sits inset within the padded
 * card), capped so a radius of 4 stays at 4.
 */
export const getInnerRadius = (
  boxRadius?: Radius
): Radius | undefined => {
  if (boxRadius === 4) return boxRadius
  return boxRadius ? ((boxRadius - 4) as Radius) : undefined
}
