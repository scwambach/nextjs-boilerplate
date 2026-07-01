import { getAccentTheme } from './logic'

describe('getAccentTheme', () => {
  it('returns tertiary for a primary theme', () => {
    expect(getAccentTheme('primary')).toBe('tertiary')
  })

  it('returns primary as the fallback for an unrecognized theme', () => {
    // @ts-expect-error - intentionally passing an invalid theme to test the default branch
    expect(getAccentTheme('unknown')).toBe('primary')
  })
})
