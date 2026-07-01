import { toUsCurrency } from './toUsCurrency'

describe('toUsCurrency', () => {
  it('formats number without decimals by default', () => {
    expect(toUsCurrency(1234.56)).toBe('$1,235')
  })

  it('formats number with decimals when specified', () => {
    expect(toUsCurrency(1234.56, true)).toBe('$1,234.56')
  })

  it('handles whole numbers without decimals', () => {
    expect(toUsCurrency(1000)).toBe('$1,000')
  })

  it('handles whole numbers with decimals when specified', () => {
    expect(toUsCurrency(1000, true)).toBe('$1,000.00')
  })

  it('handles small numbers', () => {
    expect(toUsCurrency(5.99)).toBe('$6')
  })

  it('handles small numbers with decimals', () => {
    expect(toUsCurrency(5.99, true)).toBe('$5.99')
  })

  it('handles zero', () => {
    expect(toUsCurrency(0)).toBe('$0')
  })

  it('handles zero with decimals', () => {
    expect(toUsCurrency(0, true)).toBe('$0.00')
  })

  it('handles large numbers', () => {
    expect(toUsCurrency(1234567.89)).toBe('$1,234,568')
  })

  it('handles large numbers with decimals', () => {
    expect(toUsCurrency(1234567.89, true)).toBe('$1,234,567.89')
  })
})
