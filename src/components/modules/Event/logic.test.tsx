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
