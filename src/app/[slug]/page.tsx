import { PageBuilder } from '@components/global'
import { GlobalProps } from '@utils/types'

async function getData(slug: string) {
  const global = await fetch(`${process.env.SITE_URL}/api/getData`)
  const page = await fetch(`${process.env.SITE_URL}/api/getPageData/${slug}`)
  const globalData = await global.json()
  const pageData = await page.json()
  return {
    globalData,
    pageData,
  }
}

export const revalidate = 0

export async function generateMetadata({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug)

  return {
    title: pageData.title
      ? `${pageData.title} | ${globalData.siteTitle}`
      : globalData.siteTitle,
    description: globalData.siteDescription,
    icons: {
      icon: '/favicon.png',
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
