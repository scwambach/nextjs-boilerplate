import { handleClose, handleEscapeClose, handleToggle } from './logic'

describe('handleToggle', () => {
  it('flips the open state from false to true (happy path)', () => {
    const setIsOpen = jest.fn()
    handleToggle(setIsOpen, false)()
    expect(setIsOpen).toHaveBeenCalledWith(true)
  })

  it('flips the open state from true to false (edge case)', () => {
    const setIsOpen = jest.fn()
    handleToggle(setIsOpen, true)()
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})

describe('handleClose', () => {
  it('always sets open state to false', () => {
    const setIsOpen = jest.fn()
    handleClose(setIsOpen)()
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})

describe('handleEscapeClose', () => {
  it('closes the drawer when Escape is pressed (happy path)', () => {
    const setIsOpen = jest.fn()
    const handler = handleEscapeClose(setIsOpen)
    handler({ key: 'Escape' } as KeyboardEvent)
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })

  it('does not close the drawer for other keys (edge case)', () => {
    const setIsOpen = jest.fn()
    const handler = handleEscapeClose(setIsOpen)
    handler({ key: 'Enter' } as KeyboardEvent)
    expect(setIsOpen).not.toHaveBeenCalled()
  })
})
