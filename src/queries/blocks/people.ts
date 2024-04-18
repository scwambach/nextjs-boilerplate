import { imageQuery } from 'queries/common'

export const people = `_type == "people" => {
  ...,
  items[]-> {
    ...,
    ${imageQuery('image')},
  }
}`
