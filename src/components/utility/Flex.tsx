import { FlexProps } from '@utils/types'

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
