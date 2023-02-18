import { useEffect, useState, RefObject } from 'react'

interface UseIntersectionObserverProps {
  ref: RefObject<Element>
  rootMargin?: string
  threshold?: number
}

const useIntersectionObserver = ({
  ref,
  rootMargin = '0px',
  threshold = 1,
}: UseIntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin, threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, rootMargin, threshold])

  return isIntersecting
}

export { useIntersectionObserver }
