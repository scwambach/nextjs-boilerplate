import { Banner, Cards, LogoBanner, LogoRow } from '@components/blocks'
import { PageLayout } from '@components/global'
import { BlogRollProps, GlobalProps } from '@utils/types'
import logo1 from '@images/logoipsum-230.svg'
import logo2 from '@images/logoipsum-231.svg'
import logo3 from '@images/logoipsum-232.svg'
import mainLogo from '@images/logoipsum-300.svg'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalData = await globalRes.json()

  const blogRes = await fetch(`${process.env.SITE_URL}/api/getBlogRoll`)
  const blogData: BlogRollProps = await blogRes.json()

  return { globalData, blogData }
}

export const revalidate = 0

export async function generateMetadata({}) {
  const globalData = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalJson: GlobalProps = await globalData.json()

  return {
    title: `Blog | ${globalJson.siteTitle}`,
    description: globalJson.siteDescription,
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
      <LogoBanner
        copy="Welcome to our blog"
        logo={mainLogo}
        backgroundImage={{
          query: 'nature',
          alt: 'Nature',
        }}
      />
      <Banner
        {...firstPost}
        backgroundImage={firstPost.image}
        heading={firstPost.title}
        message={firstPost.description}
        headingLevel={1}
      />

      <LogoRow
        items={[
          { title: 'Logo 1', image: logo1 },
          { title: 'Logo 2', image: logo2 },
          { title: 'Logo 3', image: logo3 },
        ]}
      />
      <Cards
        heading="Blog Posts"
        items={allOtherPosts}
        paginated
        itemsPerPage={12}
      />
    </PageLayout>
  )
}
