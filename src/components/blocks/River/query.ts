import { imageQuery, richTextProps } from 'queries/common'

export const river = `_type == "river" => {
  ...,
  items[] {
    ...,
    ${imageQuery('image')},
    description[] {
      ${richTextProps}
    }
  }
}`
