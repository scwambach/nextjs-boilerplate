import { Banner, Cards } from '@components/blocks'
import { PageLayout } from '@components/global'
import { BlogRollProps, GlobalProps } from '@utils/types'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getData`)
  const globalData = await globalRes.json()

  const blogRes = await fetch(`${process.env.SITE_URL}/api/getBlogRoll`)
  const blogData: BlogRollProps = await blogRes.json()

  return { globalData, blogData }
}

export const revalidate = 0

export async function generateMetadata({}) {
  const globalData = await fetch(`${process.env.SITE_URL}/api/getData`)
  const globalJson: GlobalProps = await globalData.json()

  return {
    title: `Blog | ${globalJson.siteTitle}`,
    description: globalJson.siteDescription,
    icons: {
      icon: '/favicon.png',
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

  return (
    <PageLayout global={globalData}>
      <Banner
        backgroundImage={{
          alt: 'A person typing on a laptop',
          query: 'person typing',
        }}
        heading="This is the title of a blog post about something"
        message="This is a short description of the blog post. We will use this to entice the reader to click on the post and read more."
        headingLevel={1}
        date="2022-01-01"
        authors={[
          {
            firstName: 'John',
            lastName: 'Doe',

            image: {
              alt: 'John Doe',
              query: 'John Doe',
            },
          },
          {
            firstName: 'Jane',
            lastName: 'Doe',

            image: {
              alt: 'Jane Doe',
              query: 'Jane Doe',
            },
          },
        ]}
        tags={[
          {
            label: 'Tag 1',
            href: '/blog/tag1',
          },
          {
            label: 'Tag 2',
            href: '/blog/tag2',
          },
        ]}
        links={[
          {
            href: '/blog/post',
            label: 'Read More',
          },
        ]}
      />
      <Cards
        heading="Blog Posts"
        items={blogData.posts}
        paginated
        itemsPerPage={12}
      />
    </PageLayout>
  )
}
