import { richTextProps } from 'queries/common'

export const gallery = `_type == "gallery" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  items[] {
    "blurDataURL": asset->metadata.lqip,
    "alt": asset->metadata.alt,
    "src": asset->url,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
  }
}`
