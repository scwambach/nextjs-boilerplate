import { richTextProps } from 'queries/common'

export const compareTables = `_type == "compareTables" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
}`
