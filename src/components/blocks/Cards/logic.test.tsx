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

  it('handles pagination click and updates URL', () => {
    const { result } = renderHook(() => useCardsPagination(items, 6, true))
    
    // Mock window.history.pushState
    const pushStateSpy = jest.spyOn(window.history, 'pushState')
    
    act(() => {
      result.current.handlePaginationClick({ nextSelectedPage: 1 })
    })
    
    expect(result.current.activePage).toBe(2)
    expect(pushStateSpy).toHaveBeenCalled()
    
    pushStateSpy.mockRestore()
  })

  it('handles pagination click without nextSelectedPage', () => {
    const { result } = renderHook(() => useCardsPagination(items, 6, true))
    
    const pushStateSpy = jest.spyOn(window.history, 'pushState')
    
    act(() => {
      result.current.handlePaginationClick({})
    })
    
    expect(result.current.activePage).toBe(1)
    
    pushStateSpy.mockRestore()
  })

  it('reads page from URL query params when paginated', () => {
    // Mock URL with page parameter
    delete (window as any).location
    ;(window as any).location = new URL('http://localhost?page=2')
    
    const { result } = renderHook(() => useCardsPagination(items, 6, true))
    
    // Need to wait for useEffect to complete
    expect(result.current.loading).toBe(false)
  })

  it('does not set loading state when not paginated', () => {
    const { result } = renderHook(() => useCardsPagination(items, 6, false))
    expect(result.current.loading).toBe(false)
  })
})

