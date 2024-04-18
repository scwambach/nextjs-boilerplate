import { richTextProps } from 'queries/common'

export const richText = `_type == "richText" => {
  ...,
  copy[] {
    ${richTextProps}
  },
  column2Copy[] {
    ${richTextProps}
  },
  column3Copy[] {
    ${richTextProps}
  },
  column4Copy[] {
    ${richTextProps}
  }
}`
