import { Dispatch, SetStateAction } from 'react'

/**
 * Curried Escape-key handler that closes the drawer. Registered on
 * `document` so Escape closes the drawer regardless of which element
 * currently has focus.
 */
export const handleEscapeClose =
  (setIsOpen: Dispatch<SetStateAction<boolean>>) => (e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false)
  }

/** Toggles the drawer open/closed state. */
export const handleToggle =
  (setIsOpen: Dispatch<SetStateAction<boolean>>, isOpen: boolean) => () => {
    setIsOpen(!isOpen)
  }

/** Explicitly closes the drawer (used by the in-panel close button). */
export const handleClose =
  (setIsOpen: Dispatch<SetStateAction<boolean>>) => () => {
    setIsOpen(false)
  }
