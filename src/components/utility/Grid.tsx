'use client'
import { ColumnSize, ColumnSizeObject, GridProps } from '@utils/types'
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
  const [columnSize, setColumnSize] = useState<ColumnSize | ColumnSizeObject>(2)
  const [rendering, setRendering] = useState(true)
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  const columnsClass = columnSize ? `cols-${columnSize}` : ''

  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (typeof columns === 'object' && windowWidth) {
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
  }, [windowWidth, columns])

  return (
    <Element
      className={`grid gap-${gap} ${columnsClass}${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      {!rendering && children}
    </Element>
  )
}
