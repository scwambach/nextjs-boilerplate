import { imageQuery, richTextProps } from 'queries/common'

export const timeline = `_type == "timeline" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  events[] {
    ...,
    ${imageQuery('image')},
  }
}`
