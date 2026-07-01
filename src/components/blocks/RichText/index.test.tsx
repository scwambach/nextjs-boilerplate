import React from 'react'
import { render } from '@testing-library/react'
import { RichText } from './index'

describe('RichText component', () => {
  it('renders without crashing with required props', () => {
    const { container } = render(<RichText copy="Hello world" markdown />)
    expect(container).toBeInTheDocument()
  })

  it('renders the provided copy text', () => {
    const { getByText } = render(<RichText copy="Hello world" markdown />)
    expect(getByText('Hello world')).toBeInTheDocument()
  })

  it('applies the centered className when the centered prop is true', () => {
    const { container } = render(
      <RichText copy="Hello world" markdown centered />
    )
    expect(container.firstChild).toHaveClass('richText centered')
  })

  it('sizes the grid to a single column when only one copy field is provided', () => {
    const { container } = render(<RichText copy="Hello world" markdown />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('columns-1')
  })

  it('sizes the grid to match the number of populated copy columns', () => {
    const { container } = render(
      <RichText
        copy="Column 1"
        column2Copy="Column 2"
        column3Copy="Column 3"
        markdown
      />
    )
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('columns-3')
  })

  it('renders as a semantic section element by default', () => {
    const { container } = render(<RichText copy="Hello world" markdown />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })
})
