import { renderHook, act } from '@testing-library/react'
import { useCardsPagination } from './logic'

const items = Array.from({ length: 8 }, (_, i) => ({
  title: `Card ${i + 1}`,
  description: `Description ${i + 1}`,
}))

describe('useCardsPagination', () => {
  it('returns all items on the first page when paginated', () => {
    const { result } = renderHook(() => useCardsPagination(items, 6, true))
    expect(result.current.currentItems).toHaveLength(6)
    expect(result.current.pageCount).toBe(2)
  })

  it('advances to the next page offset when a page is clicked', () => {
    const { result } = renderHook(() => useCardsPagination(items, 6, true))

    act(() => {
      result.current.handlePageClick({ selected: 1 })
    })

    expect(result.current.currentItems).toHaveLength(2)
  })

  it('returns an empty currentItems slice for an empty item list (edge case)', () => {
    const { result } = renderHook(() => useCardsPagination([], 6, true))
    expect(result.current.currentItems).toHaveLength(0)
    expect(result.current.pageCount).toBe(0)
  })
})
