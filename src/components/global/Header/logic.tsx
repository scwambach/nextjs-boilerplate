/**
 * Toggles the mobile navigation menu's open state.
 * Curried so it can be bound to the current state setter from the component.
 */
export const handleMenuToggle =
  (menuOpen: boolean, setMenuOpen: (open: boolean) => void) => (): void => {
    setMenuOpen(!menuOpen)
  }

/**
 * Builds the className for the mobile nav list, appending an "open" modifier
 * when the mobile menu is expanded.
 */
export const getMainNavClassName = (menuOpen: boolean): string =>
  `unstyled mainNav${menuOpen ? ' open' : ''} `

/**
 * Builds the className for the nav toggle button, appending an "open"
 * modifier when the mobile menu is expanded.
 */
export const getNavToggleClassName = (menuOpen: boolean): string =>
  `navToggle${menuOpen ? ' open' : ''}`
