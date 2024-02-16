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
      <div className="container narrow">
        <Timeline
          events={[
            {
              date: '2019-01-01',
              title: 'First Event',
              description: 'This is the first event on the timeline.',
              image: {
                query: 'history 1',
                alt: 'Placeholder Image',
                width: 1400,
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
            },
            {
              date: '2019-01-04',
              title: 'Fourth Event',
              description: 'This is the fourth event on the timeline.',
              image: {
                query: 'history 4',
                alt: 'Placeholder Image',
                width: 500,
                height: 600,
              },
            },
            {
              date: '2019-01-05',
              title: 'Fifth Event',
              description: 'This is the fifth event on the timeline.',
              image: {
                query: 'history 5',
                alt: 'Placeholder Image',
                width: 500,
                height: 700,
              },
            },
            {
              date: '2019-01-06',
              title: 'Sixth Event',
              description: 'This is the sixth event on the timeline.',
              image: {
                query: 'history 6',
                alt: 'Placeholder Image',
                width: 742,
                height: 494,
              },
            },
            {
              date: '2018-01-07',
              title: 'Seventh Event',
              description: 'This is the seventh event on the timeline.',
            },
            {
              date: '2018-01-08',
              title: 'Eighth Event',
              description: 'This is the eighth event on the timeline.',
              image: {
                query: 'history 8',
                alt: 'Placeholder Image',
                width: 900,
                height: 500,
              },
            },
            {
              date: '2017-01-09',
              title: 'Ninth Event',
              description: 'This is the ninth event on the timeline.',
            },
            {
              date: '2016-01-10',
              title: 'Tenth Event',
              description: 'This is the tenth event on the timeline.',
              image: {
                query: 'history 10',
                alt: 'Placeholder Image',
                width: 500,
                height: 900,
              },
            },
          ]}
        />
      </div>
    </main>
  )
}
