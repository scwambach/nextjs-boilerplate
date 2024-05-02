import { imageQuery, richTextProps } from 'queries/common'

export const banner = `_type == "banner" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  ${imageQuery('backgroundImage', true)},
  ${imageQuery('foregroundMedia')},
}`
