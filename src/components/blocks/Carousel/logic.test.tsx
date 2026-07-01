import { renderHook, act } from '@testing-library/react'
import { useCarouselAutoAdvance } from './logic'

describe('useCarouselAutoAdvance', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('advances the active index after the interval elapses', () => {
    const { result } = renderHook(() =>
      useCarouselAutoAdvance(3, '.never-hovered', 1000)
    )
    expect(result.current.activeIndex).toBe(0)

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.activeIndex).toBe(1)
  })

  it('does not advance when the pause selector matches an element (edge case)', () => {
    const pauseEl = document.createElement('div')
    pauseEl.className = 'paused'
    document.body.appendChild(pauseEl)

    const { result } = renderHook(() =>
      useCarouselAutoAdvance(3, '.paused', 1000)
    )

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.activeIndex).toBe(0)
    document.body.removeChild(pauseEl)
  })
})
