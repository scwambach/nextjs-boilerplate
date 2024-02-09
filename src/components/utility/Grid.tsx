import { GridProps } from '@utils/types'

export const Grid = ({
  elementTag,
  children,
  className,
  testId,
  gap,
  columns = 3,
}: GridProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      className={`grid gap-${gap} columns-${columns}${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      {children}
    </Element>
  )
}
