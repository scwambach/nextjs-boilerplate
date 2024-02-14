import { Banner, Gallery } from '@components/blocks'
import { Modal, Tooltip } from '@components/utility'
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
        <Gallery
          items={[
            {
              query: 'gallery-item-1',
              width: 1200,
              height: 500,
              alt: 'Gallery Item 1',
            },
          ]}
        />

        <Modal
          triggerCopy="Open this fancy modal"
          triggerUnstyled={true}
          buttonTheme="secondary"
          buttons={[
            {
              label: 'Do something',
              theme: 'secondary',
            },
          ]}
          modalId="modal-1"
        >
          <Heading level={2}>Modal</Heading>
          <Tooltip copy="This is a tooltip">Hover over me</Tooltip>
          Vivamus et nisi turpis. Suspendisse elementum et metus sed accumsan.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla facilisi. In non felis vulputate,
          posuere libero eu, pretium tellus. Vestibulum sollicitudin felis at
          dignissim elementum. Phasellus ac est dignissim, eleifend lectus in,
          ullamcorper enim. Sed ex lacus, consequat sollicitudin felis in,
          venenatis mattis ex. Mauris suscipit mi quis massa iaculis dignissim.
          Praesent cursus nibh vitae velit suscipit, vitae aliquet orci
          venenatis. Aenean tempus blandit est sit amet porttitor. Sed
          sollicitudin orci tempor, pulvinar ex convallis, bibendum diam.
          Phasellus ipsum quam, elementum ac eleifend non, commodo ut sapien.
          Praesent non mi leo. Integer sodales risus lectus.
        </Modal>
      </div>
    </main>
  )
}
