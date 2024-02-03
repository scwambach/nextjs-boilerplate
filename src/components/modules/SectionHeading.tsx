import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'
import { ComponentProps, HeadingLevel } from '@utils/types'

interface SectionHeadingProps extends ComponentProps {
  heading?: string
  level?: HeadingLevel
  subheading?: string
}

export const SectionHeading = ({
  className,
  heading,
  level = 3,
  subheading,
}: SectionHeadingProps) => {
  return (
    <div className={`sectionHeading${className ? ` ${className}` : ''}`}>
      {heading && <Heading level={level}>{heading}</Heading>}
      {subheading && <Markdown>{subheading}</Markdown>}
    </div>
  )
}
