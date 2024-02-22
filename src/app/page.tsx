import { Banner, Cards } from '@components/blocks'
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
      <div className="container">
        <Cards
          heading="Cards"
          subheading="Praesent convallis dui eu pretium porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem ex, pharetra eget scelerisque fringilla, finibus ac mi. Vivamus placerat vestibulum tincidunt. Nam nec venenatis quam, at condimentum justo. Pellentesque eu tempus justo, id."
          items={[
            {
              title: 'Card 1',
              description: 'This is a card',
              date: '2022-01-01',
              authors: [
                {
                  firstName: 'John',
                  lastName: 'Doe',
                  href: '/john-doe',
                  image: {
                    alt: 'John Doe',
                    query: 'face 1',
                  },
                },
                {
                  firstName: 'Jane',
                  lastName: 'Doe',
                  href: '/jane-doe',
                  image: {
                    alt: 'Jane Doe',
                    query: 'face 3',
                  },
                },
                {
                  firstName: 'John',
                  lastName: 'Smith',
                  href: '/john-smith',
                  image: {
                    alt: 'John Smith',
                    query: 'face 5',
                  },
                },
              ],
              tags: [
                {
                  label: 'Tag 1',
                  theme: 'primary',
                },
              ],
              href: '/card1',
              image: {
                alt: 'Card 1',
                query: 'nature 1',
              },
            },
            {
              title: 'Card 2',
              authors: [
                {
                  firstName: 'John',
                  lastName: 'Doe',
                  href: '/john-doe',
                  image: {
                    alt: 'John Doe',
                    query: 'face 2',
                  },
                },
              ],
              description: 'This is a card',
              href: '/card2',
              date: '2022-01-01',
              tags: [
                {
                  label: 'Tag 2',
                  theme: 'secondary',
                },
                {
                  label: 'Tag 3',
                  theme: 'tertiary',
                },
              ],
              image: {
                alt: 'Card 2',
                query: 'nature 2',
              },
            },
            {
              title: 'Card 3',
              description: 'This is a card',
              href: '/card3',
              date: '2022-01-01',
              authors: [
                {
                  firstName: 'John',
                  lastName: 'Doe',
                  href: '/john-doe',
                  image: {
                    alt: 'John Doe',
                    query: 'face 4',
                  },
                },
              ],
              image: {
                alt: 'Card 3',
                query: 'nature 3',
              },
            },
          ]}
        />
      </div>
    </PageLayout>
  )
}
