import Image from 'next/image'

interface ImageProps {
  alt: string
  className?: string
  height?: number
  isBackground?: boolean
  lqip?: string
  query?: string
  sizes?: string
  src?: string
  width?: number
}

export const ImageObject = ({
  alt,
  className,
  height,
  isBackground,
  lqip,
  query,
  sizes,
  src,
  width,
}: ImageProps) => {
  const imageSrc = query
    ? `https://source.unsplash.com/random/${width}x${height}?${query}`
    : src
  return (
    <div
      className={`imageObject${className ? ` ${className}` : ''}`}
      data-label={`${isBackground ? 'background' : 'image'}-container`}
    >
      <Image
        src={`${imageSrc}`}
        alt={alt}
        fill={isBackground}
        sizes={sizes}
        width={!isBackground ? width : undefined}
        height={!isBackground ? height : undefined}
        placeholder={lqip || query ? 'blur' : undefined}
        blurDataURL={
          query
            ? `https://source.unsplash.com/random/${width}x${height}?${query}`
            : lqip
        }
      />
    </div>
  )
}
