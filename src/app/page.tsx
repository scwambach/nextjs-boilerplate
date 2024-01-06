import { Form } from '@components/modules/Form'
import { MediaCard } from '@components/modules/MediaCard'
import { Layout } from '@components/wrappers/Layout'
// import data from '@data/test.yml'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Form />
        <div className="grid row-2">
          <MediaCard
            title={'Donec [[fringilla]] magna non scelerisque sodales.'}
            description=" Vivamus eu rutrum mi, eget posuere quam. Curabitur sit amet quam
        accumsan, vehicula [[orci]] vel, finibus lacus. Morbi ultricies sit amet
        diam id elementum. Aenean ac velit tempor, dignissim diam id, viverra
        risus. Praesent finibus aliquet neque. [[Pellentesque]] dignissim aliquam."
            url="#"
            index={0}
            image={{
              query: 'music concert',
              width: 475,
              height: 200,
            }}
          />
          <MediaCard
            title={'Donec [[fringilla]] magna non scelerisque sodales.'}
            description=" Vivamus eu rutrum mi, eget posuere quam. Curabitur sit amet quam
        accumsan, vehicula [[orci]] vel, finibus lacus. Morbi ultricies sit amet
        diam id elementum. Aenean ac velit tempor, dignissim diam id, viverra
        risus. Praesent finibus aliquet neque. [[Pellentesque]] dignissim aliquam."
            url="#"
            index={1}
            image={{
              query: 'music concert',
              width: 475,
              height: 200,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
