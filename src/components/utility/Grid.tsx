import { GridProps } from '@utils/types'

export const Grid = ({
  children,
  className,
  columns = 3,
  componentId,
  elementTag,
  gap,
  style,
  testId,
}: GridProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      id={componentId}
      style={style}
      className={`grid gap-${gap} columns-${columns}${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      {children}
    </Element>
  )
}
