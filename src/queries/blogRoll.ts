import { imageQuery } from './common'

export const BLOG_ROLL_QUERY = `{
  "posts": *[_type == "post"] | order(publishedAt desc){
    title,
    "description": summary,
    "date": publishedAt,
    tags[]->{
      _id,
      theme,
      label,
      "href": "/blog/category/" + slug.current,
    },
    authors[]->{
      ...,
      ${imageQuery('image ')},
    },
    ${imageQuery('image ')},
    "href": "/blog/" + slug.current,
  }
}`
