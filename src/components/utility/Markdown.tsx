import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { Elements } from '@utils/types'

export const Markdown = ({
  children,
  className,
  parentTagName,
}: {
  parentTagName?: Elements
  children: string
  className?: string
}) => {
  const elementTag = parentTagName || 'div'
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(children),
      }}
    />
  )
}
