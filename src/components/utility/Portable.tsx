import { PortableProps } from '@utils/types/utility'
import { PortableText } from 'next-sanity'

export const Portable = ({
  content,
  className,
  componentId,
  elementTag,
  testId,
}: PortableProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      data-testid={testId}
      id={componentId}
      className={`Portable${className ? ` ${className}` : ''}`}
    >
      <PortableText value={content} />
    </Element>
  )
}
