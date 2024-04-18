import { richTextProps } from 'queries/common'

export const contactBlock = `_type == "contactBlock" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
}`
