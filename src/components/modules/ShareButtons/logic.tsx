export type ShareNetwork = 'twitter' | 'linkedin' | 'facebook'

const BASE_URL = 'https://sproutyourdesign.com/blog'

/**
 * Builds the network-specific share intent URL for a blog post.
 */
export const getShareUrl = (
  network: ShareNetwork,
  title: string,
  slug: string
): string => {
  const postUrl = `${BASE_URL}/${slug}`

  switch (network) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${title}&url=${postUrl}`
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`
  }
}
