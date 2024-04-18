import { imageQuery, richTextProps } from 'queries/common'

export const cards = `_type == "cards" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  items[] {
    ...,
    ${imageQuery('image')},
  }
}`
