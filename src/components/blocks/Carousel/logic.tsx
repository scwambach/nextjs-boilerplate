import { useEffect, useState } from 'react'

/**
 * Auto-advances a carousel's active index every `intervalMs`, pausing
 * while the pointer hovers the element matching `pauseSelector`.
 */
export const useCarouselAutoAdvance = (
  itemCount: number,
  pauseSelector = '.carousel:hover',
  intervalMs = 7000
) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.querySelector(pauseSelector)) {
        setActiveIndex((prev) => (prev + 1) % itemCount)
      }
    }, intervalMs)
    return () => clearInterval(interval)
  }, [itemCount, pauseSelector, intervalMs])

  return { activeIndex, setActiveIndex }
}
