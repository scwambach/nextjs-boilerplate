import type { JSX } from 'react'
import { BoxProps } from '../../../utils/types'
import './styles.scss'

export const Box = ({
  className,
  testId,
  children,
  shadow,
  overflow,
  componentId,
  radius,
  style,
  elementTag = 'div',
}: BoxProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
      id={componentId}
      style={style}
      data-testid={testId}
      className={`box${shadow ? ` shadow-${shadow}` : ''}${
        radius ? ` radius-${radius}${overflow ? '-overflow' : ''}` : ''
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </Element>
  )
}
