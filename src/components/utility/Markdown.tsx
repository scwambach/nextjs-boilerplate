import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { MarkdownProps } from '@utils/types'

export const Markdown = ({
  children,
  className,
  elementTag,
}: MarkdownProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(children),
      }}
    />
  )
}
