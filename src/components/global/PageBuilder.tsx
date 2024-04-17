import { BlockFactory } from '@components/utility/BlockFactory'
import { PageLayout } from './PageLayout'
import { GlobalProps } from '@utils/types'

export const PageBuilder = ({
  pageData,
  globalData,
}: {
  pageData: any
  globalData: GlobalProps
}) => {
  return (
    <PageLayout global={globalData}>
      <code>
        <pre
          style={{
            fontFamily: 'monospace',
            display: 'block',
            padding: '50px',
            color: '#88ffbf',
            backgroundColor: 'black',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(pageData, null, '    ')}
        </pre>
      </code>

      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}
