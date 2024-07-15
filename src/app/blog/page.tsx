import { PageLayout } from '@components/global/PageLayout'
import { client } from '@utils/client'
import { BLOG_ROLL_QUERY } from 'queries/blogRoll'
import { GLOBAL_QUERY } from 'queries/global'
import { BlogRollProps, GlobalProps } from '@utils/types'
import { Banner, Cards } from '@components/blocks'

async function getData() {
  const globalData = await client.fetch(GLOBAL_QUERY)
  const blogData = await client.fetch(BLOG_ROLL_QUERY)

  return { globalData, blogData }
}

export async function generateMetadata({}) {
  const globalData = await client.fetch(GLOBAL_QUERY)

  return {
    title: `Blog | ${globalData.siteTitle}`,
    description: globalData.siteDescription,
    openGraph: globalData.siteImage
      ? {
          images: [globalData.siteImage?.src || ''],
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
        links={[
          {
            label: 'Read More',
            href: firstPost.href,
          },
        ]}
      />
      <Cards
        heading="Blog Posts"
        items={allOtherPosts}
        headingLevel={2}
        paginated
        itemsPerPage={12}
      />
    </PageLayout>
  )
}
