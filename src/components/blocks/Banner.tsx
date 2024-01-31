import { Button, ImageObject } from '@components/modules'
import { Heading } from '@components/utility/Heading'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
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
  links,
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
      <div className="container">
        <Heading level={headingLevel}>{heading}</Heading>
        {subheading && (
          <p>
            <strong>{subheading}</strong>
          </p>
        )}
        {message && (
          <div
            dangerouslySetInnerHTML={{
              __html: parseMarkdownToHTML(message),
            }}
          />
        )}
        {links && (
          <div className="links">
            {links.map((link, index) => (
              <Button key={index} {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
