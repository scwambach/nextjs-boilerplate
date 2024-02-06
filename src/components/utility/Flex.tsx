'use client'
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
  alignItems,
  breakpoint,
  children,
  direction,
  className,
  columnBreak = 'sm',
  customLayout,
  elementTag,
  fill,
  gap,
  justifyContent,
  noBreak,
  testId,
}: FlexProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      className={`flex column-${
        columnBreak && !noBreak ? columnBreak : ''
      }${className ? ` ${className}` : ''}${
        customLayout ? ` ${customLayout}` : ''
      }${breakpoint && !noBreak ? ` break-${breakpoint}` : ''}${
        fill ? ' fill' : ''
      }${noBreak ? ' no-break' : ''}`}
      data-testid={testId}
      style={{
        flexDirection: direction || 'row',
        alignItems: alignItems || 'flex-start',
        justifyContent: justifyContent || 'flex-start',
        gap: gap ? `${gap}rem` : '0',
      }}
    >
      {children}
    </Element>
  )
}
