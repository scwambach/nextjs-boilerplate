import { Banner } from '@components/blocks'
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
