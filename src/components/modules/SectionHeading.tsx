import { Markdown, Heading } from '@components/utility'
import { SectionHeadingProps } from '@utils/types'

export const SectionHeading = ({
  className,
  heading,
  level = 3,
  subheading,
  testId,
}: SectionHeadingProps) => {
  return (
    <div
      data-testid={testId}
      className={`sectionHeading${className ? ` ${className}` : ''}`}
    >
      {heading && <Heading level={level}>{heading}</Heading>}
      {subheading && <Markdown>{subheading}</Markdown>}
    </div>
  )
}
