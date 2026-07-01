import React from 'react'
import { render } from '@testing-library/react'
import { CompareTable } from './index'

describe('CompareTable', () => {
  const baseProps = {
    heading: 'Pro Plan',
    items: ['Feature A', 'Feature B'],
    testId: 'compare-table',
  }

  it('renders without crashing with required props', () => {
    const { getByText } = render(<CompareTable {...baseProps} />)
    expect(getByText('Pro Plan')).toBeInTheDocument()
    expect(getByText('Feature A')).toBeInTheDocument()
    expect(getByText('Feature B')).toBeInTheDocument()
  })

  it('reflects the highlight and tag props by rendering the accent tag', () => {
    const { getByText } = render(
      <CompareTable
        {...baseProps}
        highlight
        tag="Most popular"
        theme="primary"
      />
    )
    expect(getByText('Most popular')).toBeInTheDocument()
  })

  // Purely presentational: no interactive elements/handlers exist on this
  // component (the optional CTA is a Button, which owns its own a11y/tests).
  it('renders the optional link as a Button when provided', () => {
    const { getByText } = render(
      <CompareTable
        {...baseProps}
        link={{ label: 'Choose plan', href: '/plan' }}
      />
    )
    const link = getByText('Choose plan')
    expect(link.closest('a')).toHaveAttribute('href', '/plan')
  })

  it('hides the decorative checkmark icons from assistive technology', () => {
    const { container } = render(<CompareTable {...baseProps} />)
    const icons = container.querySelectorAll('svg')
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
