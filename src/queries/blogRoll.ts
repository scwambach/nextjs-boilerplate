import { postCardProps } from './common'

export const BLOG_ROLL_QUERY = `{
  "posts": *[_type == "post"] | order(publishedAt desc){
    ${postCardProps}
  }
}`
