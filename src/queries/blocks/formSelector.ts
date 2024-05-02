import { richTextProps } from 'queries/common'

export const formSelector = `_type == "formSelector" => {
  ...,
  subheading[] {
    ${richTextProps}
  }
}`
