import { People, Quote, River } from '@components/blocks'
import { PageLayout } from '@components/global'
import { GlobalProps } from '@utils/types'

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
      <People
        heading="Our Team"
        level={1}
        columns={4}
        subheading="Sed quis nulla molestie, ornare nisl et, venenatis metus."
        items={[
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 1',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 2',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 3',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 4',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 5',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 6',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 7',
              alt: 'Scott Wambach',
            },
          },
          {
            firstName: 'Scott',
            lastName: 'Wambach',
            title: 'Founder',
            company: 'Wambach Media',
            image: {
              query: 'human face 8',
              alt: 'Scott Wambach',
            },
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
      <River
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
          {
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            title: 'Nam felis',
            image: {
              query: 'corporate 7',
              alt: 'Nam felis',
            },
            links: [
              {
                href: '/about',
                label: 'Learn More',
              },
            ],
          },
          {
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            title: 'Nam felis',
            image: {
              query: 'corporate 8',
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
