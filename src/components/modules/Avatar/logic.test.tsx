import { getFirstLetters } from './logic'

describe('getFirstLetters', () => {
  it('returns the first letter of each name', () => {
    expect(getFirstLetters('John', 'Doe')).toBe('JD')
  })

  it('handles empty strings gracefully', () => {
    expect(getFirstLetters('', '')).toBe('')
  })
})
