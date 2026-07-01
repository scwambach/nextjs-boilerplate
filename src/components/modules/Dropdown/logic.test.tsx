import { createRef } from 'react'
import {
  createKeyDownHandler,
  createOutsideClickHandler,
  doAnyListItemsHaveFocus,
} from './logic'

describe('doAnyListItemsHaveFocus', () => {
  it('returns false when the ref has no current element', () => {
    const ref = createRef<HTMLDivElement>()
    expect(doAnyListItemsHaveFocus(ref)).toBe(false)
  })

  it('returns true when a menu link is the active element', () => {
    document.body.innerHTML = `
      <div id="wrapper">
        <div class="menu"><a class="linkObject" href="/a">A</a></div>
      </div>
    `
    const wrapper = document.getElementById('wrapper') as HTMLDivElement
    const link = wrapper.querySelector('.linkObject') as HTMLElement
    link.focus()
    const ref = { current: wrapper }
    expect(doAnyListItemsHaveFocus(ref)).toBe(true)
  })
})

describe('createOutsideClickHandler', () => {
  it('closes the dropdown when the click target is outside the ref', () => {
    const setOpen = jest.fn()
    const outside = document.createElement('div')
    document.body.appendChild(outside)
    const ref = { current: document.createElement('div') }
    document.body.appendChild(ref.current)

    const handler = createOutsideClickHandler(ref, setOpen)
    handler({ target: outside } as unknown as MouseEvent)

    expect(setOpen).toHaveBeenCalledWith(false)
  })

  it('does nothing when the click target is inside the ref', () => {
    const setOpen = jest.fn()
    const inside = document.createElement('span')
    const container = document.createElement('div')
    container.appendChild(inside)
    const ref = { current: container }

    const handler = createOutsideClickHandler(ref, setOpen)
    handler({ target: inside } as unknown as MouseEvent)

    expect(setOpen).not.toHaveBeenCalled()
  })
})

describe('createKeyDownHandler', () => {
  it('closes the dropdown on Escape', () => {
    const setOpen = jest.fn()
    const handler = createKeyDownHandler(setOpen)
    handler({ key: 'Escape' } as React.KeyboardEvent)
    expect(setOpen).toHaveBeenCalledWith(false)
  })

  it('ignores other keys', () => {
    const setOpen = jest.fn()
    const handler = createKeyDownHandler(setOpen)
    handler({ key: 'Enter' } as React.KeyboardEvent)
    expect(setOpen).not.toHaveBeenCalled()
  })
})
