import React from 'react'
import { render } from '@testing-library/react'
import { Markdown } from './index'

describe('Markdown Component', () => {
  const markdownContent =
    '# Heading\nThis is **bold** text and [a link](https://example.com)'
  const className = 'custom-class'
  const elementTag = 'article'

  it('renders without crashing', () => {
    const { container } = render(<Markdown>{markdownContent}</Markdown>)
    expect(container).toBeInTheDocument()
  })

  it('renders correct HTML output based on Markdown content', () => {
    const { getByText, getByRole } = render(
      <Markdown>{markdownContent}</Markdown>
    )
    expect(getByText('Heading')).toBeInTheDocument()
    expect(getByText('bold')).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('applies provided class name', () => {
    const { container } = render(
      <Markdown className={className}>{markdownContent}</Markdown>
    )
    expect(container.firstChild).toHaveClass(className)
  })

  it('uses specified HTML element tag', () => {
    const { container } = render(
      <Markdown elementTag={elementTag}>{markdownContent}</Markdown>
    )
    expect(container.querySelector(elementTag)).toBeInTheDocument()
  })

  it('renders headings with an id for in-page navigation (accessibility)', () => {
    const { getByText } = render(<Markdown>{markdownContent}</Markdown>)
    const heading = getByText('Heading')
    expect(heading.tagName).toBe('H1')
    expect(heading).toHaveAttribute('id', 'heading')
  })
})
