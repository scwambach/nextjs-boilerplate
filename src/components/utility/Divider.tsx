import { ComponentProps } from '@utils/types'

// TODO: Create Divider component

interface DividerProps extends ComponentProps {}

export const Divider = (props: DividerProps) => {
  return (
    <div className={`divider${props.className ? ` ${props.className}` : ''}`}>
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
