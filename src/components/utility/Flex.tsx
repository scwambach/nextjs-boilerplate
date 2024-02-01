'use client'
import { BreakNames, FlexGridProps } from '@utils/types'

interface FlexProps extends FlexGridProps {
  center?: boolean
  breakpoint?: BreakNames
  columnBreak?: BreakNames
  customLauout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`
}

export const Flex = ({
  parentTagName,
  children,
  className,
  columnBreak = 'sm',
  customLauout,
  breakpoint,
  testId,
  gap,
}: FlexProps) => {
  const elementTag = parentTagName || 'div'
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
      className={`flex column-${columnBreak}${className ? ` ${className}` : ''}${
        customLauout ? ` ${customLauout}` : ''
      }${breakpoint ? ` break-${breakpoint}` : ''}`}
      data-testid={testId}
      style={{
        gap: gap ? `${gap}rem` : '0',
      }}
    >
      {children}
    </Element>
  )
}
