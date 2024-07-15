import { ImageObjectProps } from '../../utils/types'
import Image from 'next/image'

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
  const imageSrc =
    src ||
    `https://fakeimg.pl/${height && width ? `${width}x${height}` : '600x400'}?text=url+is+broken&font=bebas`
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
