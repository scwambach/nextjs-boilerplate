import { Banner, Cards, Map, Quote, River } from '@components/blocks'
import { PageLayout } from '@components/global'
import { ImageObject } from '@components/modules'
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
      <Banner
        heading="About Us"
        message="Proin vel molestie purus, vel tempus nibh. Vestibulum dolor sapien, semper ut sapien ac, facilisis dapibus urna. In imperdiet nisi a pharetra ultricies. Pellentesque quis."
        headingLevel={1}
        foregroundMedia={
          <ImageObject
            query="group of people"
            alt="About Us"
            width={500}
            height={300}
          />
        }
        bgColor="orange"
        crumbs={{
          current: 'About',
          items: [
            {
              label: 'Home',
              href: '/',
            },
          ],
        }}
      />
      <Map
        markers={[
          {
            lat: 40.7128,
            lng: -74.006,
          },
          {
            lat: 34.0522,
            lng: -118.2437,
          },
          {
            lat: 41.8781,
            lng: -87.6298,
          },
        ]}
      />
      <River
        container="wide"
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
          {
            description:
              'Sed quis nulla molestie, ornare nisl et, venenatis metus. Maecenas finibus porta neque, vitae porta leo iaculis eu. Praesent convallis lobortis libero in pharetra.',
            title: 'Nam felis',
            image: {
              query: 'corporate 2',
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
              query: 'corporate 3',
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
