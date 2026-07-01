import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Dots } from './index'

describe('Dots Component', () => {
  const defaultProps = {
    count: 3,
    activeIndex: 0,
    setActiveIndex: jest.fn(),
    className: 'custom-class',
  }

  it('renders without crashing', () => {
    const { container } = render(<Dots {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correct number of dots', () => {
    const { container } = render(<Dots {...defaultProps} />)
    const dots = container.querySelectorAll('.dots button')
    expect(dots.length).toBe(defaultProps.count)
  })

  it('calls setActiveIndex when a dot is clicked', () => {
    const { container } = render(<Dots {...defaultProps} />)
    const dots = container.querySelectorAll('.dots button')
    fireEvent.click(dots[1])
    expect(defaultProps.setActiveIndex).toHaveBeenCalledWith(1)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-dots'
    const { container } = render(
      <Dots {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('gives each dot an accessible name describing its position', () => {
    const { getByLabelText } = render(<Dots {...defaultProps} />)
    expect(getByLabelText('Go to slide 2 of 3')).toBeInTheDocument()
  })
})
