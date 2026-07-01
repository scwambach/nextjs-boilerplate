import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LinkObject } from './index'

describe('LinkObject', () => {
  it('renders an internal link correctly', () => {
    const { getByTestId } = render(
      <LinkObject href="/internal" testId="internal-link">
        Internal Link
      </LinkObject>
    )
    const link = getByTestId('internal-link')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/internal')
    expect(link.getAttribute('target')).toBeNull()
  })

  it('renders an external link correctly', () => {
    const { getByTestId } = render(
      <LinkObject href="http://external.com" testId="external-link">
        External Link
      </LinkObject>
    )
    const link = getByTestId('external-link')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('http://external.com')
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('applies className and onClick prop correctly', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <LinkObject
        href="/internal"
        testId="internal-link"
        className="custom-class"
        onClick={onClickMock}
      >
        Custom Link
      </LinkObject>
    )
    const link = getByTestId('internal-link')
    expect(link).toHaveClass('linkObject custom-class')
    fireEvent.click(link)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('warns screen reader users that external links open in a new tab', () => {
    const { getByTestId } = render(
      <LinkObject href="http://external.com" testId="external-link">
        External Link
      </LinkObject>
    )
    expect(getByTestId('external-link')).toHaveTextContent('opens in a new tab')
  })

  it('treats in-page anchor links (#id) as internal, not opening a new tab', () => {
    const { getByTestId } = render(
      <LinkObject href="#section-1" testId="anchor-link">
        Jump to section
      </LinkObject>
    )
    const link = getByTestId('anchor-link')
    expect(link.getAttribute('target')).toBeNull()
    expect(link).not.toHaveTextContent('opens in a new tab')
  })
})
