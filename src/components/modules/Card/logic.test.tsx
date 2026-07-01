import { getInnerImageRadius } from './logic'

describe('getInnerImageRadius', () => {
  it('subtracts 4 from the outer radius for the inset image', () => {
    expect(getInnerImageRadius(8)).toBe(4)
    expect(getInnerImageRadius(12)).toBe(8)
  })

  it('returns undefined when no radius is provided', () => {
    expect(getInnerImageRadius(undefined)).toBeUndefined()
  })
})
