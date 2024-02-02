import { Breadcrumbs, Button, ImageObject } from '@components/modules'
import { Heading } from '@components/utility/Heading'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import {
  BreadcrumbsProps,
  ButtonProps,
  ComponentProps,
  HeadingLevel,
  ImageObjectProps,
} from '@utils/types'

interface BannerProps extends ComponentProps {
  img?: ImageObjectProps
  headingLevel?: HeadingLevel
  heading: string
  subheading?: string
  message?: string
  bgColor?: 'red' | 'blue' | 'green' | 'orange'
  links?: ButtonProps[]
  crumbs?: {
    current: string
    items: BreadcrumbsProps['crumbs']
  }
}

export const Banner = ({
  img,
  className,
  heading,
  subheading,
  crumbs,
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
          testId="banner-image"
          className="banner__image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <div className="container">
        {crumbs && crumbs.items && (
          <Breadcrumbs current={crumbs.current} crumbs={crumbs.items} />
        )}
        <Heading testId="banner-heading" level={headingLevel}>
          {heading}
        </Heading>
        {subheading && (
          <p>
            <strong>{subheading}</strong>
          </p>
        )}
        {message && (
          <div
            data-testid="banner-message"
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
