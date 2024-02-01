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
