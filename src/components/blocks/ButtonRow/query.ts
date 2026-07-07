import { richTextProps } from 'queries/common'

export const buttonRow = `_type == "buttonRow" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  className,
  buttons
}`
