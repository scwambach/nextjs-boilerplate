'use client'
import { Breakpoints, ComponentProps, Elements } from '@utils/types'
import { useWindowWidth } from '@hooks/useWindowWidth'
import { ReactNode, useEffect, useState } from 'react'
import { breakpoints } from '@utils/settings'

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6

type ColumnSizeObject = {
  xs?: ColumnSize
  sm?: ColumnSize
  md?: ColumnSize
  lg?: ColumnSize
  xl?: ColumnSize
  xxl?: ColumnSize
}

function calculateColumnSize(
  columnsObject: ColumnSizeObject,
  windowWidth: number,
  breakpoints: Breakpoints
): number | null {
  let columnSize: number | null = null

  const existingKeys = Object.keys(columnsObject).filter(
    (key) => breakpoints[key]
  )

  for (let i = existingKeys.length - 1; i >= 0; i--) {
    const key = existingKeys[i] as keyof ColumnSizeObject
    const size = columnsObject[key]
    if (size !== undefined && windowWidth >= (breakpoints as any)[key]) {
      columnSize = size
      break
    }
  }

  return columnSize
}

interface GridProps extends ComponentProps {
  children: ReactNode
  parentTagName?: Elements
  gap?: number
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
  }, [windowWidth])

  return (
    <Element
      className={`grid ${columnsClass}${className ? ` ${className}` : ''}`}
      data-testid={testId}
      style={{
        gap: gap ? `${gap}rem` : '0',
      }}
    >
      {children}
    </Element>
  )
}
