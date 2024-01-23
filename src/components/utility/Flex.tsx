import { ComponentProps } from '@utils/types'

// TODO: Create Flex component

interface FlexProps extends ComponentProps {}

export const Flex = (props: FlexProps) => {
  return (
    <div className={`flex${props.className ? ` ${props.className}` : ''}`}>
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
