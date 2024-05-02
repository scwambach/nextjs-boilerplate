import { Markdown, Heading, Portable } from '@components/utility'
import { SectionHeadingProps } from '@utils/types'

export const SectionHeading = ({
  className,
  componentId,
  heading,
  headingLevel = 3,
  subheading,
  markdown,
  testId,
}: SectionHeadingProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`sectionHeading${className ? ` ${className}` : ''}`}
    >
      {heading && <Heading level={headingLevel}>{heading}</Heading>}
      {subheading && (
        <>
          {markdown ? (
            <Markdown>{subheading as string}</Markdown>
          ) : (
            <Portable content={subheading as any[]} />
          )}
        </>
      )}
    </div>
  )
}
