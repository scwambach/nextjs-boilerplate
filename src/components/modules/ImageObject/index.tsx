import Image from 'next/image'
import { ImageObjectProps } from '../../../utils/types'
import { getImageSrc } from './logic'
import './styles.scss'

export const ImageObject = ({
  alt,
  blurDataURL,
  className,
  componentId,
  height,
  isBackground,
  sizes,
  src,
  testId,
  width,
}: ImageObjectProps) => {
  const imageSrc = getImageSrc(src, width, height)
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`imageObject${className ? ` ${className}` : ''}`}
      data-label={`${isBackground ? 'background' : 'image'}-container`}
    >
      {imageSrc && (
        <Image
          src={`${imageSrc}`}
          alt={`${alt}`}
          fill={isBackground}
          sizes={sizes}
          width={!isBackground ? width : undefined}
          height={!isBackground ? height : undefined}
          placeholder={blurDataURL ? 'blur' : undefined}
          blurDataURL={blurDataURL}
        />
      )}
    </div>
  )
}
