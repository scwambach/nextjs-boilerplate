import { BlockFactory } from '@/components/utility/BlockFactory'
import { PageLayout } from '../PageLayout'
import { GlobalProps } from '@/utils/types'

export interface PageBuilderProps {
  pageData: any
  globalData: GlobalProps
}

export const PageBuilder = ({ pageData, globalData }: PageBuilderProps) => {
  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}
