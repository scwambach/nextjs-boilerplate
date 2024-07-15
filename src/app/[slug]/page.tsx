import { PageLayout } from '@components/global/PageLayout'
import { BlockFactory } from '@components/utility/BlockFactory'
import { client, previewClient } from '@utils/client'
import { GlobalProps, PageProps } from '@utils/types'
import { notFound } from 'next/navigation'
import { GLOBAL_QUERY } from 'queries/global'
import { PAGE_QUERY } from 'queries/page'

async function getData(slug: string, preview?: boolean) {
  const sanityClient = preview ? previewClient : client

  const globalData = await sanityClient.fetch(GLOBAL_QUERY)
  const pageData = await sanityClient.fetch(PAGE_QUERY, { slug })

  if (!pageData || slug === 'home') {
    notFound()
  }

  return {
    globalData,
    pageData,
  }
}

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
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData(
    slug,
    preview === process.env.PREVIEW_TOKEN
  )

  const ogImage = pageData.ogImage ? pageData.ogImage : globalData.siteImage
  const description = pageData.description || globalData.siteDescription

  return {
    title: pageData.title
      ? `${pageData.title} | ${globalData.siteTitle}`
      : globalData.siteTitle,
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

export default async function Home({
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
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug, preview === process.env.PREVIEW_TOKEN)

  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}
