import type { JSX } from 'react'
import { ImageObject } from '../../modules'
import { Heading } from '../Heading'
import { slugify } from '../../../utils/slugify'

const headingLevels = [1, 2, 3, 4, 5, 6] as const

/**
 * Builds the PortableText `components` config that maps Sanity block/image
 * types to this app's own components (Heading, ImageObject), so headings get
 * consistent styling and slugified ids for in-page anchor links.
 */
export const getPortableTextComponents = () => {
  const block = headingLevels.reduce(
    (acc, level) => {
      acc[`h${level}`] = ({ children }: { children: string }) => (
        <Heading level={level} componentId={slugify(children[0])}>
          {children[0]}
        </Heading>
      )
      return acc
    },
    {} as Record<string, ({ children }: { children: string }) => JSX.Element>
  )

  return {
    types: {
      image: ({ value }: { value: any }) => {
        // Guard against images without asset references (incomplete CMS data)
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="articleImage">
            <ImageObject {...value} />
          </div>
        )
      },
    },
    block,
  } as any
}
