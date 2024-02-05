import { calculateColumnSize } from './calculateColumnSize'
import { Breakpoints, ColumnSizeObject } from './types'

describe('calculateColumnSize function', () => {
  it('calculates column size correctly for different window widths', () => {
    const breakpoints = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    } as Breakpoints

    const columnsObject = {
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    } as ColumnSizeObject

    expect(calculateColumnSize(columnsObject, 500, breakpoints)).toBe(1)
    expect(calculateColumnSize(columnsObject, 700, breakpoints)).toBe(2)
    expect(calculateColumnSize(columnsObject, 900, breakpoints)).toBe(3)
    expect(calculateColumnSize(columnsObject, 1100, breakpoints)).toBe(4)
    expect(calculateColumnSize(columnsObject, 1300, breakpoints)).toBe(5)
  })
})
