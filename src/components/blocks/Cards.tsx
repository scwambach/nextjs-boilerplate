import { ComponentProps } from '@utils/types'

// TODO: Create Cards component

interface CardsProps extends ComponentProps {}

export const Cards = (props: CardsProps) => {
  return (
    <div className={`cards${props.className ? ` ${props.className}` : ''}`}>
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
