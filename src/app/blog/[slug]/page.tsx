import { PageLayout } from '@components/global/PageLayout'
import { client, previewClient } from '@utils/client'
import { notFound } from 'next/navigation'
import { GLOBAL_QUERY } from 'queries/global'
import { POST_QUERY } from 'queries/post'
import { GlobalProps, PostDetailsProps } from '@utils/types'
import { Banner, Cards } from '@components/blocks'
import { TableOfContents, ShareButtons } from '@components/modules'
import { Container, Spacer, Flex, Portable } from '@components/utility'

async function getData(slug: string, preview?: boolean) {
  const sanityClient = preview ? previewClient : client

  const globalData = await sanityClient.fetch(GLOBAL_QUERY)
  const postData = await sanityClient.fetch(POST_QUERY, { slug })

  if (!postData) {
    return notFound()
  }

  return { globalData, postData }
}

export const revalidate = 0

export async function generateMetadata({
  params: { slug },
  searchParams: { preview },
}: {
  searchParams: {
    preview: string
  }
  params: {
    slug: string
  }
}) {
  const { globalData, postData } = await getData(
    slug,
    preview === process.env.PREVIEW_TOKEN
  )

  const ogImage = postData.ogImage ? postData.ogImage : globalData.siteImage
  const description = postData.description || globalData.siteDescription

  return {
    title: `${postData.title} | Blog | ${globalData.siteTitle}`,
    description,
    openGraph: ogImage?.src
      ? {
          images: [ogImage.src],
        }
      : undefined,
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Post({
  params: { slug },
  searchParams: { preview },
}: {
  searchParams: {
    preview: string
  }
  params: {
    slug: string
  }
}) {
  const {
    postData,
    globalData,
  }: {
    globalData: GlobalProps
    postData: PostDetailsProps
  } = await getData(slug, preview === process.env.PREVIEW_TOKEN)

  return (
    <PageLayout global={globalData} pageClasses="post">
      <Banner
        backgroundImage={postData.image}
        heading={postData.title}
        message={postData.summary}
        headingLevel={1}
        date={postData.publishedAt}
        authors={postData.authors}
        tags={postData.tags}
      />

      <Container padded className="bodyContainer">
        <ShareButtons title={postData.title} slug={postData.slug} />
        <Spacer size={2} />
        <Flex
          gap="lg"
          breakpoint="lg"
          columnBreak="lg"
          customLayout="one-quarter-three-quarters"
        >
          <TableOfContents targetId="postContent" />
          <Portable content={postData.content} componentId="postContent" />
        </Flex>
      </Container>

      {postData.related && postData.related.length > 0 && (
        <Cards heading="Related Posts" items={postData.related} />
      )}
    </PageLayout>
  )
}
