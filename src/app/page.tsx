import { Card } from '@components/modules'
import nature from '@images/nature2.webp'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="cards">
          <Card
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
        </div>
      </div>
    </main>
  )
}
