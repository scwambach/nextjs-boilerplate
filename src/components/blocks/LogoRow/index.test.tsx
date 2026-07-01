import React from 'react'
import { render } from '@testing-library/react'
import { LogoRow } from './index'

describe('LogoRow component', () => {
  const items = [
    {
      title: 'Acme Corp',
      image: { src: '/acme.png', alt: 'Acme', width: 100, height: 50 },
    },
    {
      title: 'Globex Corp',
      image: { src: '/globex.png', alt: 'Globex', width: 100, height: 50 },
    },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(<LogoRow items={items} />)
    expect(container).toBeInTheDocument()
  })

  it('renders an image per item using the item title as alt text', () => {
    const { getByAltText } = render(<LogoRow items={items} />)
    expect(getByAltText('Acme Corp')).toBeInTheDocument()
    expect(getByAltText('Globex Corp')).toBeInTheDocument()
  })

  it('applies a custom className to the section', () => {
    const { container } = render(
      <LogoRow items={items} className="custom-logo-row" />
    )
    expect(container.firstChild).toHaveClass('logoRow custom-logo-row')
  })

  it('provides a screen-reader-only text label for each logo for accessibility', () => {
    const { getAllByText } = render(<LogoRow items={items} />)
    const srOnlyLabel = getAllByText('Acme Corp').find((el) =>
      el.className.includes('srOnly')
    )
    expect(srOnlyLabel).toBeInTheDocument()
  })
})
