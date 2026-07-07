import { imageQuery, richTextProps } from 'queries/common'

export const events = `_type == "events" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  "items": *[_type == "event" && date >= now()] | order(date asc) {
    ...,
    ${imageQuery('poster')},
  }
}`
