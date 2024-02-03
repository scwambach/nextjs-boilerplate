import { ComponentProps } from '@utils/types'

// TODO: Create Stats component

interface StatsProps extends ComponentProps {}

export const Stats = (props: StatsProps) => {
  return (
    <div className={`stats${props.className ? ` ${props.className}` : ''}`}>
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
