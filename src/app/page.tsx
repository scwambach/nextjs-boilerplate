import { Alert, Banner } from '@components/blocks'
import { ImageObject } from '@components/modules'

export default function Home() {
  return (
    <main>
      <Banner
        heading="Phasellus dapibus neque at"
        headingLevel={1}
        bgColor="red"
        subheading="In tempus diam leo"
        message="Donec finibus lorem a elit efficitur, eget aliquet dolor faucibus. Aenean sed nisl ac purus consequat accumsan. Nam nec neque at est."
        img={{
          alt: 'Banner Image',
          width: 900,
          height: 500,
          query: 'nature',
        }}
      />
      <div className="container">
        <Alert
          type="success"
          alertId="test"
          message="Cras et scelerisque mauris. Pellentesque tincidunt condimentum lectus,
        eget commodo leo dictum sit amet. Pellentesque nibh mi, lobortis a
        tincidunt."
        />
        <ImageObject alt="" width={900} height={500} query="nature" />
      </div>
    </main>
  )
}
