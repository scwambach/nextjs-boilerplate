import { BlockFactory } from '@components/utility/BlockFactory'
import { PageLayout } from './PageLayout'
import { GlobalProps } from '@wambach-dev/react-library/src/utils/types'

export const PageBuilder = ({
  pageData,
  globalData,
}: {
  pageData: any
  globalData: GlobalProps
}) => {
  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}
