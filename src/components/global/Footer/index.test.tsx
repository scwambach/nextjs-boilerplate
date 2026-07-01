import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './index'

describe('Footer Component', () => {
  const defaultProps = {
    title: 'Acme Co',
  }

  it('renders without crashing', () => {
    const { container } = render(<Footer {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('reflects the title prop in the copyright text', () => {
    render(<Footer {...defaultProps} />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(`© ${year} ${defaultProps.title}`)
    ).toBeInTheDocument()
  })

  it('renders optional markdown copy when provided', () => {
    const { container } = render(
      <Footer {...defaultProps} copy="Some **markdown** copy" />
    )
    expect(container.querySelector('.markdown')).toHaveTextContent(
      'Some markdown copy'
    )
  })

  // No interactive elements exist on Footer (purely presentational), so no
  // interaction test is included per the test bar's opt-out clause.

  it('uses a semantic footer landmark element', () => {
    const { container } = render(<Footer {...defaultProps} />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
