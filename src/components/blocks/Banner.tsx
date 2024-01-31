import { ImageObject } from '@components/modules'
import { Heading } from '@components/utility/Heading'
import {
  ButtonProps,
  ComponentProps,
  HeadingLevel,
  ImageProps,
} from '@utils/types'

interface BannerProps extends ComponentProps {
  img?: ImageProps
  headingLevel?: HeadingLevel
  heading: string
  subheading?: string
  message?: string
  bgColor?: 'red' | 'blue' | 'green' | 'orange'
  links?: ButtonProps[]
}

export const Banner = ({
  img,
  className,
  heading,
  subheading,
  bgColor = 'blue',
  message,
  headingLevel = 2,
}: BannerProps) => {
  return (
    <div
      className={`banner ${bgColor}${className ? ` ${className}` : ''}${
        img ? ' has-image' : ''
      }`}
    >
      {img && (
        <ImageObject
          {...img}
          isBackground
          className="banner__image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <div className="inner">
        <Heading level={headingLevel}>{heading}</Heading>
        {subheading && (
          <p>
            <strong>{subheading}</strong>
          </p>
        )}
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}
