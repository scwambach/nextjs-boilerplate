import { getEventTimeCopy, isDateThisYear } from './logic'

describe('isDateThisYear', () => {
  it('returns true for a date in the current year', () => {
    const thisYear = new Date().getFullYear()
    expect(isDateThisYear(`${thisYear}-05-01`)).toBe(true)
  })

  it('returns false for a date in a different year', () => {
    expect(isDateThisYear('2000-05-01')).toBe(false)
  })
})

describe('getEventTimeCopy', () => {
  it('builds a range label when both start and end times are provided', () => {
    const result = getEventTimeCopy('10:00', '12:00')
    expect(result.label).toBe('Event time:')
    expect(result.time).toContain('-')
  })

  it('builds a start-only label when no end time is provided', () => {
    const result = getEventTimeCopy('10:00')
    expect(result.label).toBe('Event Starts at')
    expect(result.time).not.toContain('-')
  })
})

import { createEscapeHandler, handlePosterToggle } from './logic'

describe('createEscapeHandler', () => {
  it('calls close function when Escape key is pressed', () => {
    const close = jest.fn()
    const handler = createEscapeHandler(close)
    handler({ key: 'Escape' } as KeyboardEvent)
    expect(close).toHaveBeenCalled()
  })

  it('does not call close for other keys', () => {
    const close = jest.fn()
    const handler = createEscapeHandler(close)
    handler({ key: 'Enter' } as KeyboardEvent)
    expect(close).not.toHaveBeenCalled()
  })
})

describe('handlePosterToggle', () => {
  it('toggles poster state from false to true', () => {
    const setPosterOpen = jest.fn()
    const toggle = handlePosterToggle(false, setPosterOpen)
    toggle()
    expect(setPosterOpen).toHaveBeenCalledWith(true)
  })

  it('toggles poster state from true to false', () => {
    const setPosterOpen = jest.fn()
    const toggle = handlePosterToggle(true, setPosterOpen)
    toggle()
    expect(setPosterOpen).toHaveBeenCalledWith(false)
  })
})
