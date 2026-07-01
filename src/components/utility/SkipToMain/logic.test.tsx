import { handleSkipToMain } from './logic'

describe('handleSkipToMain', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('focuses the #bodyContent element when present (happy path)', () => {
    document.body.innerHTML = '<div id="bodyContent" tabindex="-1"></div>'
    handleSkipToMain()
    expect(document.getElementById('bodyContent')).toHaveFocus()
  })

  it('does nothing when #bodyContent is missing (edge case)', () => {
    document.body.innerHTML = ''
    expect(() => handleSkipToMain()).not.toThrow()
  })
})
