import { RefObject } from 'react'

/**
 * Computes the content height to animate to based on open state, and
 * returns a resize handler that collapses the accordion when the
 * viewport resizes while open (so stale pixel heights don't get stuck).
 */
export const measureContentHeight = (
  ref: RefObject<HTMLDivElement>,
  open: boolean
): number | undefined => {
  if (!ref.current) return 0

  const content = ref.current.querySelector('.content') as HTMLElement | null
  if (!content) return 0

  return open ? content.scrollHeight : 0
}

export const handleToggle =
  (open: boolean, setOpen: (open: boolean) => void) => () => {
    setOpen(!open)
  }

export const createResizeHandler =
  (
    open: boolean,
    setOpen: (open: boolean) => void,
    setHeight: (height: number) => void
  ) =>
  () => {
    if (open) {
      setHeight(0)
      setOpen(false)
    }
  }
