import { Banner, Gallery } from '@components/blocks'

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
      <div className="container">
        <Gallery
          gap="micro"
          items={[
            {
              query: 'nature 1',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 2',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 3',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 4',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 5',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 6',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 7',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 8',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 9',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 10',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 11',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
            {
              query: 'nature 12',
              alt: 'Placeholder Image',
              height: 800,
              width: 1500,
            },
          ]}
        />
      </div>
    </main>
  )
}
