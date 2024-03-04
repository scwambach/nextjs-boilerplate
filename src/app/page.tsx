import { PageBuilder } from '@components/global'
import { GlobalProps } from '@utils/types'

async function getData() {
  const global = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const page = await fetch(`${process.env.SITE_URL}/api/getPageData/home`)
  const globalData = await global.json()
  const pageData = await page.json()
  return {
    globalData,
    pageData,
  }
}

export const revalidate = 0

export async function generateMetadata() {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData()

  return {
    title: pageData.title
      ? `${pageData.title} | ${globalData.siteTitle}`
      : globalData.siteTitle,
    description: globalData.siteDescription,
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Home() {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData()

  return <PageBuilder pageData={pageData} globalData={globalData} />
}
