import { addCommas } from '../../../utils/addCommas'
import { toUsCurrency } from '../../../utils/toUsCurrency'
import { StatProps } from '../../../utils/types'

/**
 * Caps the displayed value at maxValue (if provided) so the number
 * doesn't visually overflow its container; the real value is still used
 * to determine whether to show the "+" suffix.
 */
export const getLimitedValue = (value: number, maxValue?: number): number =>
  maxValue ? Math.min(value, maxValue) : value

export const hasExceededMaxValue = (
  value: number,
  maxValue?: number
): boolean => (maxValue ? value > maxValue : false)

/**
 * Formats the numeric value according to the stat's declared type.
 */
export const formatStatValue = (
  value: number,
  type: StatProps['type'],
  decimals?: boolean
): string => {
  if (type === 'currency') {
    return toUsCurrency(value, decimals)
  }
  if (type === 'percentage') {
    return `${value}%`
  }
  return addCommas(value)
}
