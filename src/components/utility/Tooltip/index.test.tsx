import React from 'react'
import { render } from '@testing-library/react'
import { Tooltip } from './index'

describe('Tooltip Component', () => {
  const className = 'custom-tooltip'
  const childrenContent = 'Hover Me'
  const copy = 'Tooltip Copy'

  const defaultProps = {
    className: className,
    children: childrenContent,
    copy: copy,
  }

  it('renders without crashing', () => {
    const { container } = render(<Tooltip {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the children correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />)
    expect(getByText(childrenContent)).toBeInTheDocument()
  })

  it('renders the tooltip copy correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />)
    expect(getByText(copy)).toBeInTheDocument()
  })

  it('applies provided class name', () => {
    const { container } = render(<Tooltip {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('is keyboard-focusable and associates the tooltip copy via aria-describedby', () => {
    const { getByText, container } = render(<Tooltip {...defaultProps} />)
    const trigger = container.firstChild as HTMLElement
    expect(trigger).toHaveAttribute('tabIndex', '0')
    const describedBy = trigger.getAttribute('aria-describedby')
    expect(describedBy).toBeTruthy()
    const tooltipBubble = getByText(copy)
    expect(tooltipBubble).toHaveAttribute('id', describedBy)
    expect(tooltipBubble).toHaveAttribute('role', 'tooltip')
  })
})
