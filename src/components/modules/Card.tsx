import {
  ButtonProps,
  ComponentProps,
  HeadingLevel,
  ImageObjectProps,
  Themes,
} from '@utils/types'
import { Button } from './Button'
import { ImageObject } from './ImageObject'
import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'

export interface CardProps extends ComponentProps {
  image?: ImageObjectProps
  title: string
  description?: string
  theme?: Themes
  href?: string
  headingLevel?: HeadingLevel
  links?: ButtonProps[]
}

const Content = ({
  className,
  title,
  description,
  links,
  href,
  headingLevel = 3,
  image,
}: CardProps) => {
  return (
    <div className={className}>
      {image && (
        <div className="image">
          <ImageObject
            src={image.src}
            alt={image.alt}
            blurDataURL={image.blurDataURL}
            isBackground
          />
        </div>
      )}
      <div className="inner">
        <Heading level={headingLevel}>{title}</Heading>
        {description && <Markdown>{description}</Markdown>}
        {links && !href && (
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

export const Card = (props: CardProps) => {
  return (
    <>
      {props.href ? (
        <Button
          href={props.href}
          unstyled
          className={`card link${props.theme ? ` ${props.theme}` : ''}${props.className ? ` ${props.className}` : ''}`}
        >
          <Content {...props} />
        </Button>
      ) : (
        <Content
          {...props}
          className={`card${props.theme ? ` ${props.theme}` : ''}${props.className ? ` ${props.className}` : ''}`}
        />
      )}
    </>
  )
}
