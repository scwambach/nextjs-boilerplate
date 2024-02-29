import { Banner, Map, Quote, Videos } from '@components/blocks'
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
  const globalData = await data.json()

  return {
    title: globalData.siteTitle,
    description: globalData.siteDescription,
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const globalData: GlobalProps = await getData()

  return (
    <PageLayout global={globalData}>
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
      <Map
        markers={[
          {
            lat: 37.963211,
            lng: -87.56678,
          },
          {
            lat: 37.961391,
            lng: -87.565758,
          },
        ]}
      />
      <Quote
        quote="Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra."
        cite="Scott Wambach"
        person={{
          firstName: 'Scott',
          lastName: 'Wambach',
          title: 'Founder',
          company: 'Wambach Media',
          image: {
            src: 'https://source.unsplash.com/random/400x400?person',
            alt: 'Scott Wambach',
          },
          socials: [
            {
              href: 'https://twitter.com/scwambach',
              icon: 'TwitterLogo',
              screenReader: 'Twitter',
            },
            {
              href: 'https://www.linkedin.com/in/scwambach/',
              icon: 'LinkedinLogo',
              screenReader: 'LinkedIn',
            },
          ],
        }}
      />
      <Videos
        heading="Nam felis"
        level={2}
        subheading="Nam felis"
        items={[
          {
            url: 'https://www.youtube.com/embed/7e90gBu4pas',
            title: 'Official Music Video on YouTube',
            copy: 'Watch the official music video for "Nam felis" on YouTube.',
            poster: {
              alt: 'Nam felis',
              query: 'corporate',
              src: 'https://source.unsplash.com/random/800x400?corporate%201',
            },
          },
          {
            url: 'https://www.youtube.com/embed/7e90gBu4pas',
            title: 'Official Music Video on YouTube',
            copy: 'Watch the official music video for "Nam felis" on YouTube.',
            poster: {
              alt: 'Nam felis',
              query: 'corporate',
              src: 'https://source.unsplash.com/random/800x400?corporate%202',
            },
          },
          {
            url: 'https://www.youtube.com/embed/7e90gBu4pas',
            title: 'Official Music Video on YouTube',
            copy: 'Watch the official music video for "Nam felis" on YouTube.',
            poster: {
              alt: 'Nam felis',
              query: 'corporate',
              src: 'https://source.unsplash.com/random/800x400?corporate%203',
            },
          },
        ]}
      />
    </PageLayout>
  )
}
