import { PageLayout } from '@components/global'
import { BlockFactory } from '@components/utility/BlockFactory'
import { GlobalProps } from '@utils/types'

async function getData() {
  const global = await fetch(`${process.env.SITE_URL}/api/getData`)
  const page = await fetch(`${process.env.SITE_URL}/api/getPageData/team`)
  const globalData = await global.json()
  const pageData = await page.json()
  return {
    globalData,
    pageData,
  }
}

export const revalidate = 0

export async function generateMetadata({}) {
  const data = await fetch(`${process.env.SITE_URL}/api/getData`)
  const globalData: GlobalProps = await data.json()

  return {
    title: `About | ${globalData.siteTitle}`,
    description: globalData.siteDescription,
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function Home() {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData()

  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} />
    </PageLayout>
  )
}
