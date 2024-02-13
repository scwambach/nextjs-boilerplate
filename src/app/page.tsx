import { Banner, Gallery } from '@components/blocks'
import image1 from '@images/placeholder1.webp'
import image2 from '@images/placeholder2.webp'
import image3 from '@images/placeholder3.webp'
import image4 from '@images/placeholder4.webp'
import image5 from '@images/placeholder5.webp'
import image6 from '@images/placeholder6.webp'
import image7 from '@images/placeholder7.webp'

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
          heading="Gallery"
          level={2}
          subheading="A collection of placeholder images. Click an image to view it in a modal."
          gap="xxs"
          items={[
            {
              ...image1,
              alt: 'Placeholder Image',
            },
            {
              ...image2,
              alt: 'Placeholder Image',
            },
            {
              ...image3,
              alt: 'Placeholder Image',
            },
            {
              ...image4,
              alt: 'Placeholder Image',
            },
            {
              ...image5,
              alt: 'Placeholder Image',
            },
            {
              ...image6,
              alt: 'Placeholder Image',
            },
            {
              ...image7,
              alt: 'Placeholder Image',
            },
          ]}
        />
      </div>
    </main>
  )
}
