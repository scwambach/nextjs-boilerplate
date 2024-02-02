import { render, fireEvent } from '@testing-library/react'
import { LinkObject } from './LinkObject'

describe('LinkObject', () => {
  it('renders an internal link correctly', () => {
    const { getByTestId } = render(
      <LinkObject href="/internal" testId="internal-link">
        Internal Link
      </LinkObject>
    )
    const link = getByTestId('internal-link')
    expect(link.tagName).toBe('A') // It should render an anchor tag for internal links
    expect(link.getAttribute('href')).toBe('/internal')
    expect(link.getAttribute('target')).toBeNull() // Internal links should not have target attribute
  })

  it('renders an external link correctly', () => {
    const { getByTestId } = render(
      <LinkObject href="http://external.com" testId="external-link">
        External Link
      </LinkObject>
    )
    const link = getByTestId('external-link')
    expect(link.tagName).toBe('A') // It should render an anchor tag for external links
    expect(link.getAttribute('href')).toBe('http://external.com')
    expect(link.getAttribute('target')).toBe('_blank') // External links should have target="_blank"
    expect(link.getAttribute('rel')).toBe('noopener noreferrer') // External links should have rel="noopener noreferrer"
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
    expect(onClickMock).toHaveBeenCalled() // onClick prop should be called when link is clicked
  })
})
