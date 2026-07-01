import { Dispatch, SetStateAction } from 'react'

/**
 * Curried Escape-key handler that closes the modal. Registered on
 * `document` so Escape closes the modal regardless of which element
 * currently has focus.
 */
export const handleEscapeClose =
  (setIsOpen: Dispatch<SetStateAction<boolean>>) => (e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false)
  }

/** Toggles the modal open/closed state. */
export const handleToggle =
  (setIsOpen: Dispatch<SetStateAction<boolean>>, isOpen: boolean) => () => {
    setIsOpen(!isOpen)
  }
