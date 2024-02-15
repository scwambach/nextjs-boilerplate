import { Accordion, Banner } from '@components/blocks'
import { Button, Table } from '@components/modules'
import { Flex } from '@components/utility'

export default function Home() {
  return (
    <main>
      <Banner
        heading="Welcome to the Next.js Starter"
        message="This is a simple starter for Next.js with TypeScript, ESLint, Prettier, and Tailwind CSS."
        headingLevel={1}
        bgColor="orange"
        crumbs={{
          current: 'Nam felis',
          items: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ],
        }}
        links={[
          {
            href: 'https://github.com/scwambach/nextjs-boilerplate',
            label: 'Check out the GitHub Repo',
          },
        ]}
      />
      <div className="container">
        <Accordion heading="This is a question?" theme="secondary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            sapien, tincidunt quis nunc ac, lacinia tincidunt eros. Sed
            condimentum, libero non placerat lacinia, elit nunc faucibus elit,
            nec fermentum nunc nisl id eros. In hac habitasse platea dictumst
            eget.
          </p>
        </Accordion>
        <Accordion heading="Accordion Heading">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            sapien, tincidunt quis nunc ac, lacinia tincidunt eros. Sed
            condimentum, libero non placerat lacinia, elit nunc faucibus elit,
            nec fermentum nunc nisl id eros. In hac habitasse platea dictumst
            eget.
          </p>
        </Accordion>
        <Table
          headingRow={['First Name', 'Last Name', 'Age', 'Actions']}
          rows={[
            { cells: ['John', 'Doe', '25'] },
            { cells: ['Jane', 'Doe', '23'] },
            { cells: ['Mike', 'Smith', '32'] },
            { cells: ['Emily', 'Johnson', '29'] },
          ]}
          controlCell={
            <Flex gap="micro">
              <Button theme="secondary" className="btn btn-primary">
                Edit
              </Button>
              <Button theme="tertiary" className="btn btn-danger">
                Delete
              </Button>
            </Flex>
          }
        />
      </div>
    </main>
  )
}
