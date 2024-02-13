import { Banner } from '@components/blocks'
import { Tooltip } from '@components/utility'
import { Heading } from '@components/utility/Heading'

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
        <Heading level={2}>
          This is a simple{' '}
          <Tooltip copy="Duis suscipit a dui pretium mollis. Integer dignissim.">
            starter for Next.js with
          </Tooltip>{' '}
          TypeScript, ESLint, Prettier, and Tailwind CSS.
        </Heading>
      </div>
    </main>
  )
}
