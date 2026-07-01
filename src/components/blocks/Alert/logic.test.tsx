import { renderHook, act } from '@testing-library/react'
import { getAlertIcon, useAlertVisibility } from './logic'

describe('getAlertIcon', () => {
  it('maps known alert types to their icon name', () => {
    expect(getAlertIcon('success')).toBe('Confetti')
    expect(getAlertIcon('warning')).toBe('Warning')
    expect(getAlertIcon('error')).toBe('XCircle')
    expect(getAlertIcon('info')).toBe('Info')
  })
})

describe('useAlertVisibility', () => {
  afterEach(() => {
    sessionStorage.clear()
  })

  it('is not removed by default when no componentId is provided', () => {
    const { result } = renderHook(() => useAlertVisibility(undefined))
    expect(result.current.loading).toBe(false)
    expect(result.current.remove).toBe(false)
  })

  it('marks the alert removed and persists it in sessionStorage on dismiss', () => {
    const { result } = renderHook(() => useAlertVisibility('edge-case-id'))

    act(() => {
      result.current.dismiss()
    })

    expect(sessionStorage.getItem('alert_edge-case-id')).toBe('true')
  })
})
