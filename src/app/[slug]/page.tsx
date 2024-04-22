import { PageBuilder } from '@components/global'
import { client } from '@utils/client'
import { GlobalProps, PageProps } from '@utils/types'
import { notFound } from 'next/navigation'
import { GLOBAL_QUERY } from 'queries/global'
import { PAGE_QUERY } from 'queries/page'

async function getData(slug: string) {
  const globalData = await client.fetch(GLOBAL_QUERY)
  const pageData = await client.fetch(PAGE_QUERY, { slug })

  if (!pageData) {
    notFound()
  }

  return {
    globalData,
    pageData,
  }
}

export async function generateMetadata({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) {
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData(slug)

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
}: {
  params: {
    slug: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug)

  return <PageBuilder pageData={pageData} globalData={globalData} />
}
