import { PageLayout } from '@components/global/PageLayout'
import { globalData } from '@data/global'

export async function generateMetadata() {
  return {
    title: globalData.siteTitle,
    description: globalData.siteDescription,
    openGraph: globalData.siteImage
      ? {
          images: [globalData.siteImage.src],
        }
      : undefined,
    icons: {
      icon: globalData.favicon,
    },
  }
}

export const revalidate = 0

export default async function Home() {
  return <PageLayout global={globalData}>HOME PAGE</PageLayout>
}
