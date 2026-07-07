import { imageQuery, richTextProps } from 'queries/common'

export const videos = `_type == "videos" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  items[] {
    ...,
    ${imageQuery('poster')},
  }
}`
