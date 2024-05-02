import { imageQuery } from 'queries/common'

export const logoRow = `_type == "logoRow" => {
  ...,
  items[] {
    title,
    ${imageQuery('image')}
  }
}`
