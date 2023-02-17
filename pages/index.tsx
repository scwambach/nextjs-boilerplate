import { Button } from '@components/modules/Button'
import { Layout } from '@components/wrappers/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        Etiam massa nisi, elementum vel consectetur volutpat, dignissim non
        urna. Integer porta commodo luctus. Cras scelerisque dignissim erat,
        tristique ornare lorem <a href="#">ultrices ultrices</a>. Maecenas
        porttitor malesuada quam ut eleifend. Sed feugiat diam nec mauris
        iaculis placerat. <em>Nullam eu sagittis lectus</em>. Aliquam vel ex ac
        erat condimentum bibendum. Donec ex nibh, pellentesque commodo tortor
        sed, placerat molestie urna. Nulla molestie sodales justo nec convallis.
        Vivamus mi lacus, faucibus a ipsum id, porta tristique tortor. Quisque
        facilisis volutpat lacus non malesuada. Phasellus magna lorem, rutrum
        sed euismod et, condimentum volutpat metus.{' '}
        <strong>Morbi posuere mi nec metus bibendum, at laoreet nulla</strong>
        blandit. Proin maximus libero vel neque ultricies maximus. Vestibulum
        scelerisque in tellus nec dignissim. Sed vel neque accumsan, consectetur
        justo at, gravida ipsum.
      </p>
      <p>
        Phasellus lorem justo, suscipit vel purus nec, consectetur varius nisi.
        Praesent sodales blandit gravida. In hac habitasse platea dictumst.
        Proin vel consequat nunc, quis tempor sem. Proin finibus ornare nulla.
        In hac habitasse platea dictumst. Etiam vitae hendrerit lorem.
        Suspendisse blandit mattis mauris sit amet pharetra. Duis non ultrices
        ante, sed sagittis dolor. <a href="#">Nunc convallis</a> efficitur
        pretium. Donec rhoncus, ante ac posuere aliquet, quam neque volutpat
        dui, in imperdiet neque felis quis lacus. Sed quis bibendum sapien, non
        viverra odio. Nam et enim sed ex blandit pharetra. Sed venenatis lacus
        at turpis tempor, id accumsan leo semper.
      </p>
      <ul>
        <li>Interdum et</li>
        <li>Nulla eget</li>
        <li>Proin pretium</li>
      </ul>
      <ol>
        <li>Phasellus auctor</li>
        <li>Duis cursus</li>
        <li>Vivamus id</li>
        <li>Vestibulum luctus</li>
      </ol>
      <Button>
        <a href="#">In non</a>
      </Button>
      <Button>
        <button tabIndex={0} type="button">
          Aliquam luctus
        </button>
      </Button>
      <Button className="secondary">
        <button tabIndex={0} type="button">
          Ut vestibulum
        </button>
      </Button>
    </Layout>
  )
}
