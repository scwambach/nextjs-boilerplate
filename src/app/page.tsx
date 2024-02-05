import { Banner, Cards, Form } from '@components/blocks'
import { FormField } from '@components/modules'
import { Flex, Grid } from '@components/utility'

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
      <div className="container narrow">
        <Form
          submitCopy="GEt it!"
          heading="Ut ultrices finibus aliquet"
          testId="formID"
          subheading="Nunc nunc tortor, viverra id diam non, commodo lobortis elit. In nec finibus justo, in consectetur arcu. Aliquam aliquet egestas."
        >
          <Flex direction="column" gap={1}>
            <Grid
              gap={1}
              columns={{
                md: 2,
              }}
            >
              <FormField id="firstName" label="First Name" type="text" />
              <FormField id="lastName" label="Last Names" type="text" />
              <FormField id="fieldID" label="test2" type="text" />
              <FormField id="fieldID13" label="password" type="password" />
              <FormField
                id="fieldID3"
                label="test3"
                type="checkbox"
                choices={[
                  {
                    copy: 'Choice 1',
                    value: 'choice1',
                    id: 'choice1',
                  },
                  {
                    copy: 'Choice 2',
                    value: 'choice2',
                    id: 'choice2',
                  },
                  {
                    copy: 'Choice 3',
                    value: 'choice3',
                    id: 'choice3',
                  },
                ]}
              />
              <FormField
                id="fieldID4"
                label="test4"
                type="radio"
                choices={[
                  { copy: 'Choice 1', value: 'choice1', id: 'choice1' },
                  { copy: 'Choice 2', value: 'choice2', id: 'choice2' },
                  { copy: 'Choice 3', value: 'choice3', id: 'choice3' },
                ]}
              />
              <FormField
                id="fieldID5"
                label="test5"
                type="select"
                choices={[
                  { copy: 'Choice 1', value: 'choice1', id: 'choice1' },
                  { copy: 'Choice 2', value: 'choice2', id: 'choice2' },
                  { copy: 'Choice 3', value: 'choice3', id: 'choice3' },
                ]}
              />
              <FormField id="fieldID2" label="test" type="textarea" />
              <FormField id="fieldID6" label="test6" type="file" />
              <FormField id="fieldID7" label="date" type="date" />
              <FormField
                id="fieldID8"
                label="datetime-local"
                type="datetime-local"
              />
              <FormField id="fieldID9" label="email" type="email" />
              <FormField id="fieldID10" label="hidden" type="hidden" />
              <FormField id="fieldID11" label="month" type="month" />
              <FormField id="fieldID12" label="number" type="number" />
              <FormField id="fieldID14" label="tel" type="tel" />
              <FormField id="fieldID15" label="time" type="time" />
              <FormField id="fieldID16" label="url" type="url" />
              <FormField id="fieldID17" label="week" type="week" />
            </Grid>
          </Flex>
        </Form>
        <Cards
          heading="Recent Posts"
          subheading="The latest and greatest from our blog."
          gap={1}
          columns={{
            sm: 2,
          }}
          items={[
            {
              title: 'Ut facilisis dictum urna',
              description:
                'Aenean at venenatis dolor. Integer pretium nulla id magna dictum malesuada. Praesent quis porttitor mauris. Mauris vitae mollis enim, aliquet convallis elit. Sed ornare vel augue vitae efficitur. Duis ut...',
              image: {
                query: 'tech minimal 5',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
            {
              title: 'Nullam euismod suscipit enim',
              description:
                'Maecenas vitae risus at massa fringilla mattis. Proin a turpis in libero convallis maximus. Mauris eu mauris ut nunc porttitor tristique non eget arcu...',
              image: {
                query: 'tech minimal 2',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
            {
              title: 'Mauris eu pretium nunc',
              description:
                'Vivamus quis lacinia ligula, vitae pharetra turpis. Sed vestibulum porta eros, quis bibendum tellus euismod quis. Sed diam diam, ullamcorper sed mauris nec, consectetur...',
              image: {
                query: 'tech minimal 3',
                alt: 'Placeholder Image',
              },
              links: [
                { label: 'Read More', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ],
            },
            {
              title: 'Pellentesque habitant morbi tristique sen',
              description:
                'Vivamus quis lacinia ligula, vitae pharetra turpis. Sed vestibulum porta eros, quis bibendum tellus euismod quis. Sed diam diam, ullamcorper sed mauris nec, consectetur...',
              image: {
                query: 'tech minimal 4',
                alt: 'Placeholder Image',
              },
              links: [{ label: 'Read More', href: '/about' }],
            },
          ]}
        />
      </div>
    </main>
  )
}
