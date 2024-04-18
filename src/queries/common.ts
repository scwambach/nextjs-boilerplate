export const imageQuery = (name: string, isBackground?: boolean) => {
  return `${name} {
  "blurDataURL": asset->metadata.lqip,
  "alt": asset->metadata.alt,
  "src": asset->url,
  ${!isBackground ? `"height": asset->metadata.dimensions.height,` : ''}
  ${!isBackground ? `"width": asset->metadata.dimensions.width,` : ''}
}`
}

export const heading = `heading,
headingLevel,
subheading`

export const richTextProps = `...,
_type == 'image' => {
  "blurDataURL": asset->metadata.lqip,
  "alt": asset->metadata.alt,
  "src": asset->url,
  "height": asset->metadata.dimensions.height,
  "width": asset->metadata.dimensions.width,
}`
