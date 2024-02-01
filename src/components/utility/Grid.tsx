'use client'
import { ColumnSize, ColumnSizeObject, FlexGridProps } from '@utils/types'
import { useWindowWidth } from '@hooks/useWindowWidth'
import { useEffect, useState } from 'react'
import { breakpoints } from '@utils/settings'
import { calculateColumnSize } from '@utils/calculateColumnSize'

interface GridProps extends FlexGridProps {
  columns?: ColumnSize | ColumnSizeObject
}

export const Grid = ({
  parentTagName,
  children,
  className,
  testId,
  gap,
  columns = 2,
}: GridProps) => {
  const [columnSize, setColumnSize] = useState<ColumnSize>(2)
  const [rendering, setRendering] = useState(true)
  const elementTag = parentTagName || 'div'
  const Element = elementTag as keyof JSX.IntrinsicElements

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
