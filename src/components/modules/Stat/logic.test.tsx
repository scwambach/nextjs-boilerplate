import { formatStatValue, getLimitedValue, hasExceededMaxValue } from './logic'

describe('getLimitedValue', () => {
  it('caps the value at maxValue when exceeded', () => {
    expect(getLimitedValue(1500, 1000)).toBe(1000)
  })

  it('returns the raw value when no maxValue is set', () => {
    expect(getLimitedValue(1500, undefined)).toBe(1500)
  })
})

describe('hasExceededMaxValue', () => {
  it('returns true when value exceeds maxValue', () => {
    expect(hasExceededMaxValue(1500, 1000)).toBe(true)
  })

  it('returns false when there is no maxValue', () => {
    expect(hasExceededMaxValue(1500, undefined)).toBe(false)
  })
})

describe('formatStatValue', () => {
  it('formats currency values', () => {
    expect(formatStatValue(500, 'currency', true)).toBe('$500.00')
  })

  it('formats percentage values', () => {
    expect(formatStatValue(50, 'percentage')).toBe('50%')
  })

  it('formats plain numbers with commas by default', () => {
    expect(formatStatValue(1000, 'number')).toBe('1,000')
  })
})
