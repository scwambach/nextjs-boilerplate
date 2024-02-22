import { headingFont } from '@utils/fonts'
import { HeadingProps } from '@utils/types'

export const Heading = ({
  level,
  children,
  className,
  nonHeadingElement,
  testId,
}: HeadingProps) => {
  const HeadingTag =
    nonHeadingElement || (`h${level}` as keyof JSX.IntrinsicElements)

  return (
    <HeadingTag
      data-testid={testId}
      className={`heading ${
        headingFont.className
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
