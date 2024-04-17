import { banner } from './blocks/banner'
import { imageQuery } from './common'

export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  description,
  keywords,
  ${imageQuery('ogImage')},
  pageComponents[] {
    _type,
    _key,
    ${banner}
  }
}`
