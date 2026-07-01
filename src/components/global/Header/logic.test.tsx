import {
  getMainNavClassName,
  getNavToggleClassName,
  handleMenuToggle,
} from './logic'

describe('Header logic', () => {
  describe('getMainNavClassName', () => {
    it('returns base classes when menu is closed', () => {
      expect(getMainNavClassName(false)).toBe('unstyled mainNav ')
    })

    it('appends "open" when menu is open', () => {
      expect(getMainNavClassName(true)).toBe('unstyled mainNav open ')
    })
  })

  describe('getNavToggleClassName', () => {
    it('returns base class when menu is closed', () => {
      expect(getNavToggleClassName(false)).toBe('navToggle')
    })

    it('appends "open" when menu is open', () => {
      expect(getNavToggleClassName(true)).toBe('navToggle open')
    })
  })

  describe('handleMenuToggle', () => {
    it('calls setMenuOpen with the inverse of the current state (closed -> open)', () => {
      const setMenuOpen = jest.fn()
      handleMenuToggle(false, setMenuOpen)()
      expect(setMenuOpen).toHaveBeenCalledWith(true)
    })

    it('calls setMenuOpen with the inverse of the current state (open -> closed)', () => {
      const setMenuOpen = jest.fn()
      handleMenuToggle(true, setMenuOpen)()
      expect(setMenuOpen).toHaveBeenCalledWith(false)
    })
  })
})
