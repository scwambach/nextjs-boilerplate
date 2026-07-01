import { ColumnSize, StatsProps } from '@utils/types'

/**
 * Derives the Grid column count for Stats: one column per item, capped at
 * 6, and falling back to 1 when there are no items.
 */
export const getStatsColumns = (
  items?: StatsProps['items']
): ColumnSize => {
  if (!items || items.length === 0) return 1
  return (items.length > 6 ? 6 : items.length) as ColumnSize
}
