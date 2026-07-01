import { renderHook, act } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { useGalleryModal } from './logic'

describe('useGalleryModal', () => {
  it('opens the modal at the clicked item index', () => {
    const items = [{ src: 'a' }, { src: 'b' }, { src: 'c' }] as any
    const { result } = renderHook(() => useGalleryModal())

    act(() => {
      result.current.openItem(items, items[1])
    })

    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.activeIndex).toBe(1)
  })

  it('closes the modal when Escape is pressed (edge case)', () => {
    const items = [{ src: 'a' }] as any
    const { result } = renderHook(() => useGalleryModal())

    act(() => {
      result.current.openItem(items, items[0])
    })
    expect(result.current.isModalOpen).toBe(true)

    act(() => {
      fireEvent.keyDown(document, { key: 'Escape' })
    })

    expect(result.current.isModalOpen).toBe(false)
  })
})
