import { ComponentProps } from '@utils/types'
import { CSSProperties, ReactNode } from 'react'

// TODO: Create Box component

interface BoxProps extends ComponentProps {
  children: ReactNode
  elementTag?: keyof JSX.IntrinsicElements
  radius?: 4 | 8 | 12
  overflow?: boolean
  shadow?: 1 | 2 | 3 | 4
  style?: CSSProperties
}

export const Box = ({
  className,
  testId,
  children,
  shadow,
  overflow,
  radius = 8,
  style,
  elementTag = 'div',
}: BoxProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
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
