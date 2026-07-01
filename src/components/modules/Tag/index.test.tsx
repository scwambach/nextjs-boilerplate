import React from 'react'
import { render } from '@testing-library/react'
import { Tag } from './index'
import { TagProps } from '../../../utils/types'

describe('Tag Component', () => {
  const className = 'custom-tag'
  const label = 'Tag'
  const theme = 'secondary'
  const elementTag = 'div'

  const defaultProps: TagProps = {
    className: className,
    label: label,
    theme: theme,
    elementTag: elementTag,
  }

  it('renders without crashing', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the label correctly', () => {
    const { getByText } = render(<Tag {...defaultProps} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('applies provided class name', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('applies provided theme', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveClass(theme)
  })

  it('renders using the correct HTML element based on elementTag prop', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveProperty('tagName', 'DIV')
  })

  // Purely presentational unless an href is given, in which case the link
  // (LinkObject) provides its own keyboard/focus accessibility, already
  // covered by LinkObject's own test suite -- nothing additional to add here.
  it('wraps the label in a link when href is provided', () => {
    const { getByText } = render(<Tag {...defaultProps} href="/tags/tag" />)
    const link = getByText(label).closest('a')
    expect(link).toHaveAttribute('href', '/tags/tag')
  })
})
