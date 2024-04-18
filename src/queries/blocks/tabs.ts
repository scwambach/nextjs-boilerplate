import { richTextProps } from 'queries/common'

export const tabs = `_type == "tabs" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  tabs[] {
    ...,
    content[] {
      subheading[] {
        ${richTextProps}
      },
    }
  }
}`
