'use client'
import { ColumnSize, GridProps } from '@utils/types'
import { useWindowWidth } from '@hooks/useWindowWidth'
import { useEffect, useState } from 'react'
import { breakpoints } from '@utils/settings'
import { calculateColumnSize } from '@utils/calculateColumnSize'

export const Grid = ({
  elementTag,
  children,
  className,
  testId,
  gap,
  columns = 3,
}: GridProps) => {
  const [columnSize, setColumnSize] = useState<ColumnSize>(2)
  const [rendering, setRendering] = useState(true)
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  const columnsClass = columnSize ? `cols-${columnSize}` : ''

  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (typeof columns === 'object') {
      const newColumnSize = calculateColumnSize(
        columns,
        windowWidth,
        breakpoints
      ) as ColumnSize
      if (newColumnSize !== null) {
        setColumnSize(newColumnSize)
      }
    } else {
      setColumnSize(columns)
    }
    setRendering(false)
  }, [windowWidth])

  return (
    <Element
      className={`grid ${columnsClass}${className ? ` ${className}` : ''}`}
      data-testid={testId}
      style={{
        gap: gap ? `${gap}rem` : '0',
      }}
    >
      {!rendering && children}
    </Element>
  )
}
