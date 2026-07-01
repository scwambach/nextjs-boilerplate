import { getAccentTheme } from './logic'

describe('getAccentTheme', () => {
  it('returns tertiary for a primary theme', () => {
    expect(getAccentTheme('primary')).toBe('tertiary')
  })

  it('returns tertiary for a secondary theme', () => {
    expect(getAccentTheme('secondary')).toBe('tertiary')
  })

  it('returns secondary for a tertiary theme', () => {
    expect(getAccentTheme('tertiary')).toBe('secondary')
  })

  it('returns primary as the fallback for an unrecognized theme', () => {
    // @ts-expect-error - intentionally passing an invalid theme to test the default branch
    expect(getAccentTheme('unknown')).toBe('primary')
  })
})
