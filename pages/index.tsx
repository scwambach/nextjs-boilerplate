import { Form } from '@components/modules/Form'
import { ResponsiveImage } from '@components/modules/ResponsiveImage'
import { Layout } from '@components/wrappers/Layout'

export default function Home() {
  return (
    <Layout>
      <ResponsiveImage
        src="https://cdn.sanity.io/images/l977smc4/production/b4dac4aef757e8ccb4c00d1184ece230f21d1ca7-3675x2558.jpg"
        alt="A picture of Rachel"
        width={3675 / 5}
        height={2558 / 5}
      />
      <Form />
    </Layout>
  )
}
