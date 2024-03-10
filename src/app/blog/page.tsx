import { Banner, Cards } from '@components/blocks'
import { CompareTables } from '@components/blocks/CompareTables'
import { PageLayout } from '@components/global'
import { BlogRollProps, GlobalProps } from '@utils/types'

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
      <Banner
        {...firstPost}
        backgroundImage={firstPost.image}
        heading={firstPost.title}
        message={firstPost.description}
        headingLevel={1}
      />
      <CompareTables
        overallTheme="primary"
        heading="Pricing Plans"
        subheading="Choose the best plan for your business."
        items={[
          {
            heading: '$99',
            eyebrow: 'Starter',
            theme: 'secondary',
            subheading: '1 User / Month',
            items: [
              'Aenean et pulvinar neque.',
              'Sed et purus nec odio.',
              'Vivamus sed mi nec odio.',
              'Nulla pellentesque velit eu.',
              'Praesent lacinia nisi eget.',
              'In sit amet vulputate.',
            ],
            link: {
              label: 'Buy Now',
              href: '/buy-now',
            },
          },
          {
            heading: '$199',
            eyebrow: 'Pro',
            theme: 'tertiary',
            subheading: '3 Users / Month',
            highlight: true,
            tag: 'Most Popular',
            items: [
              'Aenean et pulvinar neque.',
              'Sed et purus nec odio.',
              'Vivamus sed mi nec odio.',
              'Nulla pellentesque velit eu.',
              'Praesent lacinia nisi eget.',
              'In sit amet vulputate.',
            ],
            link: {
              label: 'Buy Now',
              href: '/buy-now',
            },
          },
          {
            heading: '$299',
            eyebrow: 'Enterprise',
            theme: 'primary',
            subheading: 'Unlimited Users / Month',
            items: [
              'Aenean et pulvinar neque.',
              'Sed et purus nec odio.',
              'Vivamus sed mi nec odio.',
              'Nulla pellentesque velit eu.',
              'Praesent lacinia nisi eget.',
              'In sit amet vulputate.',
            ],
            link: {
              label: 'Buy Now',
              href: '/buy-now',
            },
          },
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
