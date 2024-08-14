import { Markdown, Heading } from '../utility'
import { SectionHeadingProps } from '../../utils/types'

export const SectionHeading = ({
  className,
  componentId,
  heading,
  headingLevel = 3,
  subheading,
  testId,
}: SectionHeadingProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`sectionHeading${className ? ` ${className}` : ''}`}
    >
      {heading && <Heading level={headingLevel}>{heading}</Heading>}
      {subheading && <Markdown>{subheading as string}</Markdown>}
    </div>
  )
}
