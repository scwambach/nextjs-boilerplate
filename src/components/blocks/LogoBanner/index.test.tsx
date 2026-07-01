import React from 'react'
import { render } from '@testing-library/react'
import { LogoBanner } from './index'

describe('LogoBanner component', () => {
  it('renders without crashing with required props', () => {
    const { container } = render(<LogoBanner copy="Some copy" />)
    expect(container).toBeInTheDocument()
  })

  it('renders the logo image when provided', () => {
    const { getByAltText } = render(
      <LogoBanner
        copy="Some copy"
        logo={{ src: '/logo.png', alt: 'Logo', width: 200, height: 100 }}
      />
    )
    expect(getByAltText('Logo')).toBeInTheDocument()
  })

  it('does not render a logo when not provided', () => {
    const { queryByAltText } = render(<LogoBanner copy="Some copy" />)
    expect(queryByAltText('Logo')).toBeNull()
  })

  it('applies a custom className to the section', () => {
    const { container } = render(
      <LogoBanner copy="Some copy" className="custom-logo-banner" />
    )
    expect(container.firstChild).toHaveClass('logoBanner custom-logo-banner')
  })

  it('marks the decorative background image as hidden from assistive tech via empty alt text', () => {
    const { container } = render(
      <LogoBanner
        copy="Some copy"
        backgroundImage={{ src: '/bg.jpg', alt: 'ignored' }}
      />
    )
    const images = container.querySelectorAll('img')
    expect(images[0]).toHaveAttribute('alt', '')
  })
})
