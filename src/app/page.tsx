import { Banner, Gallery, Stats, Tabs } from '@components/blocks'
import { Drawer } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'

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

      <div className="container narrow">
        <Tabs
          heading="Tabs"
          level={2}
          theme="secondary"
          subheading="Some tabs about something."
          items={[
            {
              label: 'Tab 1',
              content: (
                <div>
                  <Markdown>
                    Nullam vel ligula mauris. Ut vitae efficitur nisl. Integer
                    at justo vitae felis sodales rutrum. Mauris consectetur
                    lacus a enim pharetra, sit amet sagittis mauris elementum.
                    Nam ac magna placerat, eleifend tortor non, tincidunt arcu.
                    Mauris at tempor ex. Nunc pretium efficitur eros, eget
                    egestas ipsum sagittis vitae. Quisque mattis enim vel
                    lobortis consectetur. Suspendisse potenti. Nam sed justo nec
                    ex auctor maximus. Integer sed volutpat justo. Cras
                    tincidunt eleifend lectus eu varius. Vivamus molestie,
                    mauris et interdum auctor, libero lectus volutpat urna, et
                    accumsan ante magna nec nisl. Cras maximus venenatis lectus,
                    efficitur rhoncus urna consequat a. Cras ultrices venenatis
                    leo ac luctus.
                  </Markdown>
                </div>
              ),
            },
            {
              label: 'Tab 2',
              content: <Markdown>Tab 2 content</Markdown>,
            },
            {
              label: 'Tab 3',
              content: <Markdown>Tab 3 content</Markdown>,
            },
            {
              label: 'Tab 4',
              content: <Markdown>Tab 4 content</Markdown>,
            },
          ]}
        />
      </div>
      <div className="container">
        <Stats
          heading="Stats"
          level={2}
          subheading="Some stats about something."
          items={[
            {
              value: 12334876938,
              maxValue: 10000,
              numberPrefix: 'est.',
              title: 'Stat 1',
              tags: ['tag1', 'tag2', 'tag3'],
              icon: 'RocketLaunch',
              theme: 'secondary',
              subtitle:
                'Phasellus viverra, sapien a dfg tincidunt luctus, ipsum.',
            },
            {
              value: 456,
              title: 'Stat 2',
              tags: ['tag1', 'tag2', 'tag3'],
              icon: 'Backpack',
              type: 'percentage',
              theme: 'tertiary',
              subtitle: 'Phasellus viverra, sapien a tincidunt luctus, ipsum.',
            },
            {
              value: 789.542,
              title: 'Stat 3',
              tags: ['tag1', 'tag2', 'tag3'],
              icon: 'Television',
              type: 'currency',
              decimals: true,
              subtitle: 'Phasellus viverra, sapien a tincidunt luctus, ipsum.',
            },
          ]}
        />

        <Gallery
          gap="xxs"
          heading="Gallery"
          level={2}
          subheading="Click on an image to open a modal."
          items={[
            {
              query: 'gallery-item-1',
              width: 1200,
              height: 500,
              alt: 'Gallery Item 1',
            },
            {
              query: 'gallery-item-2',
              width: 1200,
              height: 500,
              alt: 'Gallery Item 2',
            },
            {
              query: 'gallery-item-3',
              width: 1200,
              height: 500,
              alt: 'Gallery Item 3',
            },
            {
              query: 'gallery-item-4',
              width: 1200,
              height: 500,
              alt: 'Gallery Item 4',
            },
          ]}
        />

        <Drawer
          triggerCopy="Open this fancy drawer"
          buttonTheme="secondary"
          direction="right"
          buttons={[
            {
              label: 'Do something',
              theme: 'secondary',
            },
          ]}
          drawerId="drawer-1"
        >
          <Heading level={2}>Drawer</Heading>
          <p>
            Vivamus et nisi turpis. Suspendisse elementum et metus sed accumsan.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla facilisi. In non felis vulputate,
            posuere libero eu, pretium tellus. Vestibulum sollicitudin felis at
            dignissim elementum. Phasellus ac est dignissim, eleifend lectus in,
            ullamcorper enim. Sed ex lacus, consequat sollicitudin felis in,
            venenatis mattis ex. Mauris suscipit mi quis massa iaculis
            dignissim.
          </p>
        </Drawer>
      </div>
    </main>
  )
}
