import { Banner, Cards } from '@components/blocks'
import { PageLayout } from '@components/global/PageLayout'
import { client } from '@utils/client'
import { BlogRollProps, GlobalProps } from '@utils/types'
import { BLOG_ROLL_QUERY } from 'queries/blogRoll'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalData = await globalRes.json()
  const blogData = await client.fetch(BLOG_ROLL_QUERY)

  return { globalData, blogData }
}

export async function generateMetadata({}) {
  const globalData = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalJson: GlobalProps = await globalData.json()

  return {
    title: `Blog | ${globalJson.siteTitle}`,
    description: globalJson.siteDescription,
    openGraph: globalJson.siteImage
      ? {
          images: [globalJson.siteImage?.src || ''],
        }
      : undefined,
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Home() {
  const {
    blogData,
    globalData,
  }: {
    globalData: GlobalProps
    blogData: BlogRollProps
  } = await getData()

  const firstPost = blogData.posts[0]
  const allOtherPosts = blogData.posts.slice(1)

  return (
    <PageLayout global={globalData}>
      <Banner
        {...firstPost}
        backgroundImage={firstPost.image}
        heading={firstPost.title}
        message={firstPost.description}
        headingLevel={1}
      />
      <Cards
        heading="Blog Posts"
        items={allOtherPosts}
        level={2}
        paginated
        itemsPerPage={12}
      />
    </PageLayout>
  )
}
