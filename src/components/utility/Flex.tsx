import { BreakNames, FlexGridProps } from '@utils/types'

interface FlexProps extends FlexGridProps {
  center?: boolean
  breakpoint?: BreakNames
  columnBreak?: BreakNames
  noBreak?: boolean
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  fill?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  customLayout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`
}

export const Flex = ({
  alignItems = 'flex-start',
  breakpoint,
  children,
  direction = 'row',
  className,
  columnBreak = 'sm',
  customLayout,
  elementTag,
  fill,
  style,
  gap = 'md',
  justifyContent = 'flex-start',
  noBreak,
  testId,
}: FlexProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      style={style}
      className={`flex direction-${direction} align-${alignItems} justify-${justifyContent} gap-${gap} column-${
        columnBreak && !noBreak ? columnBreak : ''
      }${className ? ` ${className}` : ''}${
        customLayout ? ` ${customLayout}` : ''
      }${breakpoint && !noBreak ? ` break-${breakpoint}` : ''}${
        fill ? ' fill' : ''
      }${noBreak ? ' no-break' : ''}`}
      data-testid={testId}
    >
      {children}
    </Element>
  )
}
