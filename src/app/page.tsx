import { Banner } from '@components/blocks'
import { PageLayout } from '@components/global'
import { VideoBlock } from '@components/modules/VideoBlock'
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
      <div className="container narrower">
        <VideoBlock
          url="https://www.youtube.com/embed/7e90gBu4pas"
          title="Official Music Video on YouTube"
          copy="Watch the official music video for 'Nam felis' on YouTube."
          poster={{
            alt: 'Nam felis',
            query: 'corporate',
            src: 'https://source.unsplash.com/random/800x400?corporate',
          }}
        />
      </div>
    </PageLayout>
  )
}
