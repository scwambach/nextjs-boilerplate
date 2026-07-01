import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Drawer } from './index'

describe('Drawer Component', () => {
  const triggerCopy = 'Open Drawer'
  const childrenContent = 'Drawer Content'

  const defaultProps = {
    triggerCopy,
    children: <div>{childrenContent}</div>,
  }

  it('renders without crashing', () => {
    const { container } = render(<Drawer {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('reflects the direction prop via the drawerBox class', () => {
    const { container } = render(<Drawer {...defaultProps} direction="left" />)
    expect(container.querySelector('.drawerBox')).toHaveClass('left')
  })

  it('opens the drawer when the trigger is clicked', () => {
    const { getByText, container } = render(<Drawer {...defaultProps} />)
    const trigger = getByText(triggerCopy)
    fireEvent.click(trigger)
    expect(container.querySelector('.drawerBox')).toHaveClass('open')
  })

  it('closes the drawer when Escape is pressed', () => {
    const { getByText, container } = render(<Drawer {...defaultProps} />)
    fireEvent.click(getByText(triggerCopy))
    expect(container.querySelector('.drawerBox')).toHaveClass('open')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(container.querySelector('.drawerBox')).toHaveClass('closed')
  })

  it('exposes dialog semantics and keeps aria-expanded/aria-hidden in sync with open state', () => {
    const { getByText, container } = render(<Drawer {...defaultProps} />)
    const trigger = getByText(triggerCopy)
    const panel = container.querySelector('.drawerBox') as HTMLElement

    expect(panel).toHaveAttribute('role', 'dialog')
    expect(panel).toHaveAttribute('aria-modal', 'true')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(trigger)

    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has an accessible label on the close button', () => {
    const { getByText, getByLabelText } = render(<Drawer {...defaultProps} />)
    fireEvent.click(getByText(triggerCopy))
    expect(getByLabelText('Close')).toBeInTheDocument()
  })
})
