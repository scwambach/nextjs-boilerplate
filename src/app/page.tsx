import { PageBuilder } from '@components/global'
import { client } from '@utils/client'
import { GlobalProps, PageProps } from '@utils/types'
import { GLOBAL_QUERY } from 'queries/global'
import { PAGE_QUERY } from 'queries/page'

async function getData() {
  const globalData = await client.fetch(GLOBAL_QUERY)
  const pageData = await client.fetch(PAGE_QUERY, { slug: 'home' })

  return {
    globalData,
    pageData,
  }
}

export async function generateMetadata() {
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData()

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
      icon: globalData.favicon,
    },
  }
}

export const revalidate = 0

export default async function Home() {
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData()

  return <PageBuilder pageData={pageData} globalData={globalData} />
}
