import type { JSX } from 'react'
import { PortableProps } from '../../../utils/types/utility'
import { PortableText } from 'next-sanity'
import { getPortableTextComponents } from './logic'
import './styles.scss'

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
      className={`portable${className ? ` ${className}` : ''}`}
    >
      <PortableText value={content} components={getPortableTextComponents()} />
    </Element>
  )
}
