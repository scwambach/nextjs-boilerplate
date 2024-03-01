import { Banner, Cards, Quote, River } from '@components/blocks'
import { PageLayout } from '@components/global'
import { GlobalProps, ImageObjectProps } from '@utils/types'
import marketing from '@images/marketing.png'
import { ImageObject } from '@components/modules'

async function getData() {
  const res = await fetch(`${process.env.SITE_URL}/api/getData`)
  const data = await res.json()
  return data
}

export const revalidate = 0

export async function generateMetadata({}) {
  const data = await fetch(`${process.env.SITE_URL}/api/getData`)
  const globalData: GlobalProps = await data.json()

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
        foregroundMedia={<ImageObject {...(marketing as ImageObjectProps)} />}
        bgColor="green"
        crumbs={{
          current: 'Home',
        }}
        links={[
          {
            href: 'https://github.com/scwambach/nextjs-boilerplate',
            label: 'Check out the GitHub Repo',
          },
        ]}
      />
      <River
        items={[
          {
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            title: 'Nam felis',
            image: {
              query: 'corporate 1',
              alt: 'Nam felis',
            },
            links: [
              {
                href: '/about',
                label: 'Learn More',
              },
            ],
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
      <Cards
        heading="Nam felis"
        columns={4}
        subheading="Sed quis nulla molestie, ornare nisl et, venenatis metus."
        items={[
          {
            title: 'Nam felis',
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            image: {
              alt: 'Nam felis',
              query: 'corporate 2',
            },
          },
          {
            title: 'Nam felis',
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            image: {
              alt: 'Nam felis',
              query: 'corporate 3',
            },
          },
          {
            title: 'Nam felis',
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            image: {
              alt: 'Nam felis',
              query: 'corporate 4',
            },
          },
          {
            title: 'Nam felis',
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            image: {
              alt: 'Nam felis',
              query: 'corporate 5',
            },
          },
        ]}
      />
      <River
        reverse
        items={[
          {
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            title: 'Nam felis',
            image: {
              query: 'corporate 6',
              alt: 'Nam felis',
            },
            links: [
              {
                href: '/about',
                label: 'Learn More',
              },
            ],
          },
        ]}
      />
    </PageLayout>
  )
}
