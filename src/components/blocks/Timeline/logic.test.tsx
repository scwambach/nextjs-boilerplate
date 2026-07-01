import { getInnerRadius } from './logic'

describe('getInnerRadius', () => {
  it('subtracts 4 from the outer box radius', () => {
    expect(getInnerRadius(8)).toBe(4)
    expect(getInnerRadius(12)).toBe(8)
  })

  it('keeps a radius of 4 unchanged and returns undefined when no radius is given (edge cases)', () => {
    expect(getInnerRadius(4)).toBe(4)
    expect(getInnerRadius(undefined)).toBeUndefined()
  })
})
