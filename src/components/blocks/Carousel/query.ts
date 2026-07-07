import { imageQuery, richTextProps } from 'queries/common'

export const carousel = `_type == "carousel" => {
  ...,
  items[] {
    ...,
    subheading[] {
      ${richTextProps}
    },
    ${imageQuery('backgroundImage', true)},
    ${imageQuery('foregroundMedia')},
  }
}`
