import { AlertBar } from '@components/modules/AlertBar'
import { Divider } from '@components/modules/Divider'
import { Form } from '@components/modules/Form'
import { MediaCard } from '@components/modules/MediaCard'
import { Layout } from '@components/wrappers/Layout'

export default function Home() {
  return (
    <Layout>
      <AlertBar style="info">Look out!!</AlertBar>

      <table>
        <caption>Example Table</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td>30</td>
            <td>john.smith@example.com</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>25</td>
            <td>jane.doe@example.com</td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>30</td>
            <td>john.smith@example.com</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>25</td>
            <td>jane.doe@example.com</td>
          </tr>
        </tbody>
      </table>
      <Form />
      <Divider size="lg" line />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <MediaCard
          title={'Donec [[fringilla]] magna non scelerisque sodales.'}
          description=" Vivamus eu rutrum mi, eget posuere quam. Curabitur sit amet quam
        accumsan, vehicula [[orci]] vel, finibus lacus. Morbi ultricies sit amet
        diam id elementum. Aenean ac velit tempor, dignissim diam id, viverra
        risus. Praesent finibus aliquet neque. [[Pellentesque]] dignissim aliquam."
          url="#"
          image={{
            url: 'https://cdn.sanity.io/images/ohidjqnu/production/4045fe8a31a3dae83730bb070dda2a66e0909c7a-6000x4000.jpg',
            lqip: 'https://cdn.sanity.io/images/ohidjqnu/production/4045fe8a31a3dae83730bb070dda2a66e0909c7a-6000x4000.jpg?w=10&blur=10',
          }}
        />
      </div>
    </Layout>
  )
}