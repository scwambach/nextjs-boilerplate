import groq from 'groq';

export const siteQuery = `"site": {
  "events": *[_type == "event"],
  "menus": *[_type == "menu"],
  "socials": *[_type == "socials"],
  "placeholders": *[_type == "sanity.imageAsset"] {
    "_id": _id,
    "lqip": metadata.lqip,
    "palette": metadata.palette,
    "dimensions": metadata.dimensions
  }
}`;

export const homeQuery = `*[_type == "homePage"][0]{
  "content": *[_type == "homePage"][0],
  ${siteQuery}
}`;

export const homePreviewQuery = groq`*[_type == "homePage"][0]{
  "content": *[_type == "homePage"][0],
}`;

export const singlePageQuery = `*[slug.current == $slug][0]{
  "content": *[slug.current == $slug][0],
  "references": *[references(^._id)],
  ${siteQuery}
}`;

export const singlePagePreviewQuery = groq`*[slug.current == $slug][0]{
  "content": *[slug.current == $slug][0],
}`;

export const blogQuery = `*[_type == "posts"][0]{
  "content": *[_type == "post"] | order(publishedAt desc),
  ${siteQuery}
}`;

export const sitemapQuery = `*[_type in ["post", "page", "homePage"]] {
  "slug": slug.current,
  _type,
  _updatedAt
}`;
