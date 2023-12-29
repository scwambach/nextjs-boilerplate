import { Form } from '@components/modules/Form'
import { MediaCard } from '@components/modules/MediaCard'
import { Layout } from '@components/wrappers/Layout'

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
            image={{
              url: 'https://cdn.sanity.io/images/ohidjqnu/production/4045fe8a31a3dae83730bb070dda2a66e0909c7a-6000x4000.jpg',
              lqip: 'https://cdn.sanity.io/images/ohidjqnu/production/4045fe8a31a3dae83730bb070dda2a66e0909c7a-6000x4000.jpg?w=10&blur=10',
            }}
          />
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
      </div>
    </Layout>
  )
}
