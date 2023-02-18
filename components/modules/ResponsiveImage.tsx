import { useIntersectionObserver } from '@utils/useIntersectionObserver'
import React, { useRef, useState, useEffect } from 'react'

const lqip =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"%3E%3Cfilter id="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"%3E%3CfeGaussianBlur stdDeviation="2" result="b"%3E%3C/feGaussianBlur%3E%3CfeComponentTransfer%3E%3CfeFuncA type="discrete" tableValues="0 1"%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect filter="url(%23a)" width="20" height="20" fill="%23fff" /%3E%3C/svg%3E'

interface ImageProps {
  src: string
  alt: string
  sizes?: string
  width?: number
  height?: number
}

const ResponsiveImage = ({ src, alt, sizes, width, height }: ImageProps) => {
  const [fullSrc, setFullSrc] = useState('')
  const ref = useRef<HTMLImageElement>(null)
  const isIntersecting = useIntersectionObserver({ ref })

  useEffect(() => {
    if (isIntersecting) {
      setFullSrc(src)
    }
  }, [isIntersecting, src])

  return (
    <img
      ref={ref}
      src={fullSrc || lqip}
      srcSet={
        fullSrc
          ? `${src}?w=768 768w, ${src}?w=1024 1024w, ${src}?w=1200 1200w`
          : undefined
      }
      sizes={sizes || undefined}
      width={width}
      height={height}
      alt={alt}
    />
  )
}

export { ResponsiveImage }
