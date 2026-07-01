import { getStatsColumns } from './logic'

describe('getStatsColumns', () => {
  it('returns one column per item when under the cap', () => {
    const items = [{ value: 1 }, { value: 2 }, { value: 3 }] as any
    expect(getStatsColumns(items)).toBe(3)
  })

  it('caps the column count at 6 when there are more than 6 items', () => {
    const items = Array.from({ length: 10 }, (_, i) => ({ value: i })) as any
    expect(getStatsColumns(items)).toBe(6)
  })

  it('falls back to 1 column when items is empty or undefined (edge case)', () => {
    expect(getStatsColumns([])).toBe(1)
    expect(getStatsColumns(undefined)).toBe(1)
  })
})
