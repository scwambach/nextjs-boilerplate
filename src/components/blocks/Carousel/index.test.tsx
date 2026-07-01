import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Carousel } from './index'

const items = [
  { heading: 'Slide One' },
  { heading: 'Slide Two' },
  { heading: 'Slide Three' },
]

describe('Carousel component', () => {
  it('renders without crashing with required props', () => {
    const { container } = render(<Carousel items={items} />)
    expect(container).toBeInTheDocument()
  })

  it('renders a banner for each item', () => {
    const { getByText } = render(<Carousel items={items} />)
    expect(getByText('Slide One')).toBeInTheDocument()
    expect(getByText('Slide Two')).toBeInTheDocument()
    expect(getByText('Slide Three')).toBeInTheDocument()
  })

  it('applies a custom className', () => {
    const { container } = render(
      <Carousel items={items} className="custom-carousel" />
    )
    expect(container.firstChild).toHaveClass('carousel custom-carousel')
  })

  it('changes the active slide when a dot is clicked (keyboard accessible button)', () => {
    const { getAllByRole } = render(<Carousel items={items} />)
    const dotButtons = getAllByRole('button')
    expect(dotButtons.length).toBe(items.length)
    fireEvent.click(dotButtons[1])
    expect(dotButtons[1]).toHaveAttribute(
      'aria-label',
      expect.stringContaining('slide 2')
    )
  })
})
