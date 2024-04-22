import { imageQuery, postCardProps, richTextProps, tagProps } from './common'

export const POST_QUERY = `*[ _type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  tags[]->{
    ${tagProps}
  },
  authors[]->{
    ...,
    ${imageQuery('image')},
  },
  content[] {
    ${richTextProps},
  },
  ${imageQuery('ogImage')},
  ${imageQuery('image')},
  "related": *[_type == 'post' && references(^.tags[] -> _id) && slug.current != $slug] | order(publishedAt desc)[0...3] {
    ${postCardProps}
  }
}`
