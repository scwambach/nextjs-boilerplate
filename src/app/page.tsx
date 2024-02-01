import { Card } from '@components/modules'
import { Flex } from '@components/utility'
import nature from '@images/nature2.webp'

export default function Home() {
  const emptyArray = Array.from({ length: 4 }, () => ({}))

  return (
    <main>
      <div className="container wide">
        <Flex gap={1}>
          {emptyArray.map(() => (
            <Card
              key={Math.random()}
              theme="tertiary"
              title="This is a card"
              description="Maecenas in tincidunt nisi. __*Vivamus*__ quis tristique sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ornare accumsan. Duis ut tempor turpis. Vestibulum."
              image={{ ...nature, alt: 'Nature' }}
              links={[
                {
                  href: '#',
                  label: 'Read more',
                },
                {
                  href: '#',
                  label: 'Share',
                },
              ]}
            />
          ))}
        </Flex>
      </div>
    </main>
  )
}
