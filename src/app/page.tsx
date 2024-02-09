import { Banner, People } from '@components/blocks'

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
        <People
          heading="Meet the Team"
          subheading="We are a team of developers, designers, and creators."
          columns={4}
          items={[
            {
              firstName: 'Scott',
              lastName: 'Wambach',
              title: 'Frontend Developer',
              image: {
                query: 'male face',
                alt: 'Scott Wambach',
              },
              socials: [
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
              ],
            },
            {
              firstName: 'Scott',
              lastName: 'Wambach',
              title: 'Frontend Developer',
              image: {
                query: 'male face',
                alt: 'Scott Wambach',
              },
              socials: [
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
              ],
            },
            {
              firstName: 'Scott',
              lastName: 'Wambach',
              title: 'Frontend Developer',
              image: {
                query: 'male face',
                alt: 'Scott Wambach',
              },
              socials: [
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
              ],
            },
            {
              firstName: 'Scott',
              lastName: 'Wambach',
              title: 'Frontend Developer',
              image: {
                query: 'male face',
                alt: 'Scott Wambach',
              },
              socials: [
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
              ],
            },
          ]}
        />
      </div>
    </main>
  )
}
