import { ComponentProps } from '@utils/types'

// TODO: Create Table component

interface TableProps extends ComponentProps {}

export const Table = (props: TableProps) => {
  return (
    <div className={`table${props.className ? ` ${props.className}` : ''}`}>
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
