import React from 'react'
import { render } from '@testing-library/react'
import { Portable } from './index'

describe('Portable Component', () => {
  const content = [
    {
      _type: 'block',
      _key: 'a1',
      style: 'h2',
      children: [{ _type: 'span', _key: 'a1s', text: 'Section Title' }],
    },
    {
      _type: 'block',
      _key: 'a2',
      style: 'normal',
      children: [{ _type: 'span', _key: 'a2s', text: 'Some body copy.' }],
    },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(<Portable content={content} testId="portable" />)
    expect(container).toBeInTheDocument()
  })

  it('reflects the elementTag prop by rendering the specified element', () => {
    const { getByTestId } = render(
      <Portable content={content} testId="portable" elementTag="article" />
    )
    expect(getByTestId('portable').tagName).toBe('ARTICLE')
  })

  it('applies the provided className', () => {
    const { getByTestId } = render(
      <Portable content={content} testId="portable" className="custom-class" />
    )
    expect(getByTestId('portable')).toHaveClass('portable', 'custom-class')
  })

  it('renders portable text headings with slugified ids for in-page navigation (accessibility)', () => {
    const { getByText } = render(<Portable content={content} testId="portable" />)
    const heading = getByText('Section Title')
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveAttribute('id', 'section-title')
  })
})
