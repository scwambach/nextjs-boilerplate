import { Accordion, Alert } from '@components/blocks'

export default function Home() {
  return (
    <main className="container">
      <Alert
        type="success"
        alertId="test"
        message="Cras et scelerisque mauris. Pellentesque tincidunt condimentum lectus,
      eget commodo leo dictum sit amet. Pellentesque nibh mi, lobortis a
      tincidunt."
      />
      <Accordion heading="Accordion">
        <p>
          Ut vel diam et eros cursus interdum. Vivamus efficitur dolor id nulla
          aliquam pretium quis at massa. Quisque consectetur luctus neque,
          tincidunt pharetra quam molestie a. Donec vitae sem mauris. Nulla
          interdum eu est at hendrerit. Nunc vitae est malesuada leo maximus
          luctus et nec massa. Nam porta nibh ut mauris efficitur rhoncus.
          Aliquam vehicula eros non enim fringilla, venenatis tristique mauris
          pellentesque. In semper tincidunt elit ac accumsan. Sed nec erat
          congue erat porta interdum. Vestibulum nec erat at risus tincidunt
          mattis.
        </p>
      </Accordion>
      <Accordion heading="Accordion">
        <p>
          Ut vel diam et eros cursus interdum. Vivamus efficitur dolor id nulla
          aliquam pretium quis at massa. Quisque consectetur luctus neque,
          tincidunt pharetra quam molestie a. Donec vitae sem mauris. Nulla
          interdum eu est at hendrerit. Nunc vitae est malesuada leo maximus
          luctus et nec massa. Nam porta nibh ut mauris efficitur rhoncus.
          Aliquam vehicula eros non enim fringilla, venenatis tristique mauris
          pellentesque. In semper tincidunt elit ac accumsan. Sed nec erat
          congue erat porta interdum. Vestibulum nec erat at risus tincidunt
          mattis.
        </p>
      </Accordion>
      <Accordion heading="Accordion">
        <p>
          Ut vel diam et eros cursus interdum. Vivamus efficitur dolor id nulla
          aliquam pretium quis at massa. Quisque consectetur luctus neque,
          tincidunt pharetra quam molestie a. Donec vitae sem mauris. Nulla
          interdum eu est at hendrerit. Nunc vitae est malesuada leo maximus
          luctus et nec massa. Nam porta nibh ut mauris efficitur rhoncus.
          Aliquam vehicula eros non enim fringilla, venenatis tristique mauris
          pellentesque. In semper tincidunt elit ac accumsan. Sed nec erat
          congue erat porta interdum. Vestibulum nec erat at risus tincidunt
          mattis.
        </p>
      </Accordion>
    </main>
  )
}
