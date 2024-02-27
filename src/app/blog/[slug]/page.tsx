import { Banner, Cards } from '@components/blocks'
import { PageLayout } from '@components/global'
import { Container, Markdown } from '@components/utility'
import { GlobalProps } from '@utils/types'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getData`)
  const globalData = await globalRes.json()

  const blogRes = await fetch(`${process.env.SITE_URL}/api/getBlogPost`)
  const postData = await blogRes.json()

  return { globalData, postData }
}

export const revalidate = 0

export async function generateMetadata({}) {
  const globalData: any = await fetch(`${process.env.SITE_URL}/api/getData`)
  const postData: any = await fetch(`${process.env.SITE_URL}/api/getBlogPost`)

  return {
    title: `${postData.title} | Blog | Next.js Starter`,
    description: globalData.summary,
    icons: {
      icon: '/favicon.png',
    },
  }
}

// TODO: create Types for pages like this one

export default async function Home() {
  const {
    postData,
    globalData,
  }: {
    globalData: { body: GlobalProps }
    postData: {
      body: any
    }
  } = await getData()

  return (
    <PageLayout global={globalData.body}>
      <Banner
        img={postData.body.image}
        heading={postData.body.title}
        message={postData.body.summary}
        headingLevel={1}
        date={postData.body.publishedAt}
        authors={postData.body.authors}
        tags={postData.body.tags}
      />
      <Container padded containerClass="narrower">
        <Markdown>{postData.body.content}</Markdown>
      </Container>

      {postData.body.related && postData.body.related.length > 0 && (
        <Cards heading="Related Posts" items={postData.body.related} />
      )}
    </PageLayout>
  )
}
