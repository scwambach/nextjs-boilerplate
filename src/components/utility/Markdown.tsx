import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { Elements } from '@utils/types'

export const Markdown = ({
  children,
  className,
  elementTag,
}: {
  elementTag?: Elements
  children: string
  className?: string
}) => {
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
