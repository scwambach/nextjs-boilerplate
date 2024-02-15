import { Banner, Timeline } from '@components/blocks'

export default function Home() {
  return (
    <main>
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
        <Timeline
          events={[
            {
              date: '2019-01-01',
              title: 'First Event',
              description: 'This is the first event on the timeline.',
              image: {
                query: 'history 1',
                alt: 'Placeholder Image',
                width: 500,
                height: 500,
              },
            },
            {
              date: '2019-01-02',
              title: 'Second Event',
              description: 'This is the second event on the timeline.',
            },
            {
              date: '2019-01-03',
              title: 'Third Event',
              description: 'This is the third event on the timeline.',
              image: {
                query: 'history 3',
                alt: 'Placeholder Image',
                width: 500,
                height: 500,
              },
            },
          ]}
        />
      </div>
    </main>
  )
}
