import { Breakpoints, ColumnSizeObject } from './types'

export function calculateColumnSize(
  columnsObject: ColumnSizeObject,
  windowWidth: number,
  breakpoints: Breakpoints
): number | null {
  let columnSize: number | null = null

  const existingKeys = Object.keys(columnsObject).filter(
    (key) => breakpoints[key]
  )

  const lowestBreakpointKey = existingKeys.reduce(
    (lowest, current) => {
      if (
        breakpoints[current] &&
        breakpoints[current]! < breakpoints[lowest]!
      ) {
        return current
      }
      return lowest
    },
    existingKeys[0] as keyof ColumnSizeObject
  )

  if (
    breakpoints[lowestBreakpointKey] &&
    windowWidth < breakpoints[lowestBreakpointKey]!
  ) {
    columnSize = 1
  } else {
    for (let i = existingKeys.length - 1; i >= 0; i--) {
      const key = existingKeys[i] as keyof ColumnSizeObject
      const size = columnsObject[key]
      if (
        size !== undefined &&
        breakpoints[key] &&
        windowWidth >= breakpoints[key]!
      ) {
        columnSize = size
        break
      }
    }
  }

  return columnSize
}
