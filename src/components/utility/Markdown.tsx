import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'

export const Markdown = ({
  children,
  className,
  parentTagName,
}: {
  parentTagName?: string
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
