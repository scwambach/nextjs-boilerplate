import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ButtonRow } from './index'

describe('ButtonRow component', () => {
  const items = [
    { _key: '1', label: 'Button One', onClick: jest.fn() },
    { _key: '2', label: 'Button Two' },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(<ButtonRow items={items} />)
    expect(container).toBeInTheDocument()
  })

  it('renders a heading when provided', () => {
    const { getByText } = render(
      <ButtonRow items={items} heading="Row Heading" headingLevel={3} />
    )
    expect(getByText('Row Heading')).toBeInTheDocument()
  })

  it('renders all provided items', () => {
    const { getByText } = render(<ButtonRow items={items} />)
    expect(getByText('Button One')).toBeInTheDocument()
    expect(getByText('Button Two')).toBeInTheDocument()
  })

  it('applies a custom className to the wrapper', () => {
    const { container } = render(
      <ButtonRow items={items} className="custom-row" />
    )
    expect(container.firstChild).toHaveClass('buttonRow custom-row')
  })

  it('invokes the item onClick handler when a button is activated', () => {
    const { getByText } = render(<ButtonRow items={items} />)
    fireEvent.click(getByText('Button One'))
    expect(items[0].onClick).toHaveBeenCalled()
  })

  it('renders the heading with a semantic heading level for accessibility', () => {
    const { getByText } = render(
      <ButtonRow items={items} heading="Row Heading" headingLevel={3} />
    )
    expect(getByText('Row Heading').tagName).toBe('H3')
  })
})
