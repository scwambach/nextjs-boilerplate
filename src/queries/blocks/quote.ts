import { imageQuery } from 'queries/common'

export const quote = `_type == "quote" => {
  ...,
  person-> {
    ...,
    ${imageQuery('image')},
  }
}`
