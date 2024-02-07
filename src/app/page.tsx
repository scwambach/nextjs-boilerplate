import { ContactForm } from '@components/ContactForm'
import { Banner, Cards } from '@components/blocks'

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
        <Cards
          heading="Recent Posts"
          subheading="The latest and greatest from our blog."
          gap={1}
          columns={{
            md: 2,
            lg: 4,
          }}
          items={[
            {
              title: 'Ut facilisis dictum urna',
              description:
                'Aenean at venenatis dolor. Integer pretium nulla id magna dictum malesuada. Praesent quis porttitor mauris. Mauris vitae mollis enim, aliquet convallis elit. Sed ornare vel augue vitae efficitur. Duis ut...',
              image: {
                query: 'tech minimal 5',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
            {
              title: 'Nullam euismod suscipit enim',
              description:
                'Maecenas vitae risus at massa fringilla mattis. Proin a turpis in libero convallis maximus. Mauris eu mauris ut nunc porttitor tristique non eget arcu...',
              image: {
                query: 'tech minimal 2',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
            {
              title: 'Mauris eu pretium nunc',
              description:
                'Vivamus quis lacinia ligula, vitae pharetra turpis. Sed vestibulum porta eros, quis bibendum tellus euismod quis. Sed diam diam, ullamcorper sed mauris nec, consectetur...',
              image: {
                query: 'tech minimal 3',
                alt: 'Placeholder Image',
              },
              links: [
                { label: 'Read More', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ],
            },
            {
              title: 'Pellentesque habitant morbi tristique sen',
              description:
                'Vivamus quis lacinia ligula, vitae pharetra turpis. Sed vestibulum porta eros, quis bibendum tellus euismod quis. Sed diam diam, ullamcorper sed mauris nec, consectetur...',
              image: {
                query: 'tech minimal 4',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
          ]}
        />
        <div className="container narrow">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
