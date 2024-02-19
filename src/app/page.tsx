import { Banner, Gallery } from '@components/blocks'
import { PageLayout } from '@components/global'
import { GlobalProps } from '@utils/types'

async function getData() {
  const res = await fetch(`${process.env.SITE_URL}/api/getData`)
  const data = await res.json()
  return data
}

export const revalidate = 0

export async function generateMetadata({}) {
  const data: any = await fetch(`${process.env.SITE_URL}/api/getData`)

  return {
    title: 'Next.js Starter',
    description: data.siteDescription,
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const globalData: {
    body: GlobalProps
  } = await getData()

  const items = [
    { query: 'technology 1', alt: 'Image 1', width: 100, height: 100 },
    { query: 'technology 2', alt: 'Image 2', width: 100, height: 100 },
    { query: 'technology 3', alt: 'Image 3', width: 100, height: 100 },
  ]
  return (
    <PageLayout global={globalData.body}>
      <Banner
        heading="Welcome to the Next.js Starter"
        message="This is a simple starter for Next.js with TypeScript, ESLint, Prettier, and Tailwind CSS."
        headingLevel={1}
        bgColor="blue"
        crumbs={{
          current: 'Nam felis',
          items: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ],
        }}
        links={[
          {
            href: 'https://github.com/scwambach/nextjs-boilerplate',
            label: 'Check out the GitHub Repo',
          },
        ]}
      />
      <div className="container narrow">
        <Gallery
          items={items}
          className={'custom-class'}
          heading={'Gallery Heading'}
          level={3}
          subheading={'Gallery Subheading'}
          columns={4}
          gap={'md'}
        />
      </div>
    </PageLayout>
  )
}
