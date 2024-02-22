import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'
import { SectionHeadingProps } from '@utils/types'

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
