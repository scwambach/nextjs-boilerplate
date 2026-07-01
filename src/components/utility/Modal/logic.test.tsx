import { handleEscapeClose, handleToggle } from './logic'

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

describe('handleEscapeClose', () => {
  it('closes the modal when Escape is pressed (happy path)', () => {
    const setIsOpen = jest.fn()
    const handler = handleEscapeClose(setIsOpen)
    handler({ key: 'Escape' } as KeyboardEvent)
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })

  it('does not close the modal for other keys (edge case)', () => {
    const setIsOpen = jest.fn()
    const handler = handleEscapeClose(setIsOpen)
    handler({ key: 'Tab' } as KeyboardEvent)
    expect(setIsOpen).not.toHaveBeenCalled()
  })
})
