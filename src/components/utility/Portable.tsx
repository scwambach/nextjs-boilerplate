import { ImageObject } from '../modules'
import { PortableProps } from '../../utils/types/utility'
import { PortableText } from 'next-sanity'
import { Heading } from './Heading'
import { slugify } from '../../utils/slugify'

export const Portable = ({
  content,
  className,
  componentId,
  elementTag,
  testId,
}: PortableProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  const customBlockComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <div className="articleImage">
            <ImageObject {...value} />
          </div>
        )
      },
    },
    block: {
      h1: ({ children }: { children: string }) => (
        <Heading level={1} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
      h2: ({ children }: { children: string }) => (
        <Heading level={2} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
      h3: ({ children }: { children: string }) => (
        <Heading level={3} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
      h4: ({ children }: { children: string }) => (
        <Heading level={4} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
      h5: ({ children }: { children: string }) => (
        <Heading level={5} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
      h6: ({ children }: { children: string }) => (
        <Heading level={6} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      ),
    },
  } as any

  return (
    <Element
      data-testid={testId}
      id={componentId}
      className={`portable${className ? ` ${className}` : ''}`}
    >
      <PortableText value={content} components={customBlockComponents} />
    </Element>
  )
}
