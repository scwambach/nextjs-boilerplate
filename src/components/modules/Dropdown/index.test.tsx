import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Dropdown } from './index'

describe('Dropdown Component', () => {
  const defaultProps = {
    label: 'Dropdown Label',
    items: [
      { href: '/item1', copy: 'Item 1' },
      { href: '/item2', copy: 'Item 2' },
    ],
    className: 'custom-class',
  }

  it('renders without crashing', () => {
    const { container } = render(<Dropdown {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-dropdown'
    const { container } = render(
      <Dropdown {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('renders the menu items', () => {
    const { getByText } = render(<Dropdown {...defaultProps} />)
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  it('toggles open state and aria-expanded when the toggle button is clicked', () => {
    const { getByText } = render(<Dropdown {...defaultProps} />)
    const toggle = getByText(defaultProps.label)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the dropdown when Escape is pressed', () => {
    const { getByText, container } = render(<Dropdown {...defaultProps} />)
    const toggle = getByText(defaultProps.label)
    fireEvent.click(toggle)
    expect(container.firstChild).toHaveClass('open')
    fireEvent.keyDown(container.firstChild as HTMLElement, { key: 'Escape' })
    expect(container.firstChild).not.toHaveClass('open')
  })

  it('associates the toggle button with the menu via aria-controls for assistive tech', () => {
    const { getByText, container } = render(<Dropdown {...defaultProps} />)
    const toggle = getByText(defaultProps.label)
    const controlsId = toggle.getAttribute('aria-controls')
    expect(controlsId).toBeTruthy()
    expect(container.querySelector(`#${controlsId}`)).toBeInTheDocument()
  })
})
