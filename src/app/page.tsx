import { Banner, Carousel } from '@components/blocks'

export default function Home() {
  return (
    <main>
      <Banner
        heading="Welcome to the Next.js Starter"
        message="This is a simple starter for Next.js with TypeScript, ESLint, Prettier, and Tailwind CSS."
        headingLevel={1}
        bgColor="orange"
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
      <Carousel
        items={[
          {
            heading: 'First Slide',
            message: 'This is the first slide in the carousel.',
            bgColor: 'blue',
          },
          {
            heading: 'Second Slide',
            message: 'This is the second slide in the carousel.',
            bgColor: 'green',
          },
          {
            heading: 'Third Slide',
            message: 'This is the third slide in the carousel.',
            bgColor: 'red',
          },
        ]}
      />
    </main>
  )
}
