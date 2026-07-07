import { richTextProps } from 'queries/common'

export const stats = `_type == "stats" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
}`
