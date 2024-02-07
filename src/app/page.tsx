import { Banner } from '@components/blocks'
import { Person } from '@components/modules'
import { Grid } from '@components/utility'
import { repeater } from '@utils/repeater'

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
        <Grid columns={3} gap="sm">
          {repeater(
            3,
            <Person
              firstName="Scott"
              lastName="Wambach"
              title="Frontend Developer"
              image={{
                query: 'human male face',
                alt: 'Scott Wambach',
              }}
              socials={[
                {
                  icon: 'GithubLogo',
                  screenReader: 'GitHub',
                  href: 'https://github.com/scwambach',
                },
                {
                  icon: 'TwitterLogo',
                  screenReader: 'Twitter',
                  href: 'https://twitter.com/scwambach',
                },
                {
                  icon: 'LinkedinLogo',
                  screenReader: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/scwambach',
                },
              ]}
            />
          )}
        </Grid>
      </div>
    </main>
  )
}
