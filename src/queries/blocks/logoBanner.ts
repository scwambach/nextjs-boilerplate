import { imageQuery } from 'queries/common'

export const logoBanner = `_type == "logoBanner" => {
  ...,
  ${imageQuery('backgroundImage', true)},
  ${imageQuery('logo')},
}`
