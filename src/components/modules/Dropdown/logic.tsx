import { RefObject } from 'react'

/**
 * Checks whether any of the dropdown's menu links currently have focus.
 * Used to decide whether a blur event should actually close the menu
 * (it shouldn't, if focus simply moved to another item inside it).
 */
export const doAnyListItemsHaveFocus = (
  ref: RefObject<HTMLDivElement>
): boolean => {
  if (!ref.current) {
    return false
  }
  const listItems = ref.current.querySelectorAll('.menu .linkObject')
  let hasFocus = false
  listItems.forEach((item) => {
    if (item === document.activeElement) {
      hasFocus = true
    }
  })
  return hasFocus
}

/**
 * Closes the dropdown when a mousedown happens outside of it.
 */
export const createOutsideClickHandler =
  (ref: RefObject<HTMLDivElement>, setOpen: (open: boolean) => void) =>
  (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false)
    }
  }

/**
 * Closes the dropdown on Escape for keyboard users.
 */
export const createKeyDownHandler =
  (setOpen: (open: boolean) => void) => (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

export const handleToggle =
  (open: boolean, setOpen: (open: boolean) => void) => () => {
    setOpen(!open)
  }

export const handleItemClick = (setOpen: (open: boolean) => void) => () => {
  setOpen(false)
}

/**
 * On blur, keep the menu open only if focus moved to another item inside it.
 */
export const createItemBlurHandler =
  (ref: RefObject<HTMLDivElement>, setOpen: (open: boolean) => void) => () => {
    setTimeout(() => {
      setOpen(doAnyListItemsHaveFocus(ref))
    }, 10)
  }
