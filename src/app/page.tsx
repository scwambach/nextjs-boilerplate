import { Alert, Banner } from '@components/blocks'
import { ImageObject } from '@components/modules'
import { Heading } from '@components/utility/Heading'

export default function Home() {
  return (
    <main>
      <Banner
        heading="Phasellus dapibus neque at"
        headingLevel={1}
        bgColor="blue"
        subheading="In tempus diam leo"
        message="Donec finibus lorem a elit efficitur, __eget aliquet__ dolor faucibus. Aenean sed nisl ac purus consequat accumsan. Nam nec neque at est."
        img={{
          alt: 'Banner Image',
          width: 900,
          height: 500,
          query: 'tech',
        }}
        links={[
          {
            children: 'Learn More',
            type: 'link',
            href: '/about',
            unstyled: true,
          },
          {
            children: 'Contact Us',
            href: '/contact',
            type: 'link',
            theme: 'primary',
          },
        ]}
      />
      <Alert
        type="success"
        alertId="test"
        message="Cras et scelerisque mauris. Pellentesque tincidunt condimentum lectus,
        eget commodo leo dictum sit amet. Pellentesque nibh mi, lobortis a
        tincidunt."
      />
      <div className="container">
        <Heading level={1}>Phasellus dapibus neque at</Heading>
        <Heading level={2}>Phasellus dapibus neque at</Heading>
        <Heading level={3}>Phasellus dapibus neque at</Heading>
        <Heading level={4}>Phasellus dapibus neque at</Heading>
        <Heading level={5}>Phasellus dapibus neque at</Heading>
        <Heading level={6}>Phasellus dapibus neque at</Heading>
        <ImageObject alt="" width={900} height={500} query="tech 2" />
      </div>
    </main>
  )
}
