import { ComponentProps } from '@utils/types'

// TODO: Create Spacer component

interface SpacerProps extends ComponentProps {}

export const Spacer = (props: SpacerProps) => {
  return (
    <div className={`spacer${props.className ? ` ${props.className}` : ''}`}>
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
