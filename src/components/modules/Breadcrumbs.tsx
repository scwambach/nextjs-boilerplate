import { ComponentProps } from '@utils/types'

// TODO: Create Breadcrumbs component

interface BreadcrumbsProps extends ComponentProps {}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <div
      className={`breadcrumbs${props.className ? ` ${props.className}` : ''}`}
    >
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
          {JSON.stringify(props, null, '    ')}
        </pre>
      </code>
    </div>
  )
}
