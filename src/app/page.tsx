import { PageBuilder } from '@components/global'
import { GlobalProps, PageProps } from '@utils/types'

async function getData() {
  const global = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const page = await fetch(
    `${process.env.SITE_URL}/api/getClientPage?slug=home`
  )
  const globalData = await global.json()
  const pageData = await page.json()
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
