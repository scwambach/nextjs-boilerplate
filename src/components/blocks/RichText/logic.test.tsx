import { getColumnCount } from './logic'

describe('getColumnCount', () => {
  it('counts only the populated copy columns', () => {
    expect(
      getColumnCount({
        copy: 'a',
        column2Copy: 'b',
        column3Copy: undefined,
        column4Copy: undefined,
      })
    ).toBe(2)
  })

  it('returns 0 when no copy columns are populated (edge case)', () => {
    expect(
      getColumnCount({
        copy: undefined as any,
        column2Copy: undefined,
        column3Copy: undefined,
        column4Copy: undefined,
      })
    ).toBe(0)
  })
})
