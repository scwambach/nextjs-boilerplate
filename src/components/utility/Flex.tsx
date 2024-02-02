'use client'
import { BreakNames, FlexGridProps } from '@utils/types'

interface FlexProps extends FlexGridProps {
  center?: boolean
  breakpoint?: BreakNames
  columnBreak?: BreakNames
  noBreak?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  customLauout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`
}

export const Flex = ({
  elementTag,
  children,
  className,
  columnBreak = 'sm',
  customLauout,
  noBreak,
  breakpoint,
  testId,
  alignItems,
  justifyContent,
  gap,
}: FlexProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      className={`flex column-${
        columnBreak && !noBreak ? columnBreak : ''
      }${className ? ` ${className}` : ''}${
        customLauout ? ` ${customLauout}` : ''
      }${breakpoint && !noBreak ? ` break-${breakpoint}` : ''}${
        noBreak ? ' no-break' : ''
      }`}
      data-testid={testId}
      style={{
        alignItems: alignItems || 'flex-start',
        justifyContent: justifyContent || 'flex-start',
        gap: gap ? `${gap}rem` : '0',
      }}
    >
      {children}
    </Element>
  )
}
