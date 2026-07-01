import { getImageSrc } from './logic'

describe('getImageSrc', () => {
  it('returns the provided src when given', () => {
    expect(getImageSrc('https://example.com/a.jpg', 100, 100)).toBe(
      'https://example.com/a.jpg'
    )
  })

  it('falls back to a sized placeholder when no src is provided', () => {
    expect(getImageSrc(undefined, 300, 200)).toBe(
      'https://fakeimg.pl/300x200?text=url+is+broken&font=bebas'
    )
  })

  it('falls back to the default placeholder size when width/height are missing', () => {
    expect(getImageSrc(undefined, undefined, undefined)).toBe(
      'https://fakeimg.pl/600x400?text=url+is+broken&font=bebas'
    )
  })
})
