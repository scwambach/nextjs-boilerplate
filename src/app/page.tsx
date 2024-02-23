import { Banner } from '@components/blocks'
import { Events } from '@components/blocks/Events'
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

      <Events
        heading="Events"
        subheading="Upcoming Events"
        items={[
          {
            date: '2024-01-01',
            title: 'New Year',
            startTime: '5:00 PM',
            doorsOpenTime: '4:00 PM',
            endTime: '12:00 AM',
            location: {
              name: 'The Party Place',
              address: '123 Main St, Anytown, USA',
            },
            poster: {
              query: 'new year party 1',
              alt: 'New Year Party',
              width: 1200,
              height: 800,
            },
            links: [
              { href: '/new-year', label: 'More Info' },
              { href: '/tickets', label: 'Get Tickets' },
            ],
          },
          {
            date: '2022-12-25',
            title: 'Christmas',
            startTime: '5:00 PM',
            doorsOpenTime: '4:00 PM',
            endTime: '12:00 AM',
            poster: {
              query: 'christmas party 1',
              alt: 'Christmas Party',
              width: 1200,
              height: 800,
            },
            location: {
              name: 'The Party Place',
              address: '123 Main St, Anytown, USA',
            },
            links: [
              { href: '/christmas', label: 'More Info' },
              { href: '/tickets', label: 'Get Tickets' },
            ],
          },
        ]}
      />
    </PageLayout>
  )
}
