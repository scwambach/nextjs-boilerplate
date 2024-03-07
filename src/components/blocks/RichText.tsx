import { Markdown } from '@components/utility'
import { ComponentProps } from '@utils/types'

// TODO: Create RichText tests and stories

interface RichTextProps extends ComponentProps {
  copy: string
  componentId?: string
}

export const RichText = ({
  className,
  testId,
  copy,
  componentId,
}: RichTextProps) => {
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`richText${className ? ` ${className}` : ''}`}
    >
      <Markdown>{copy}</Markdown>
    </section>
  )
}
