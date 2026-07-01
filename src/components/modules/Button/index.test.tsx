import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './index'

describe('Button Component', () => {
  it('renders button with default type', () => {
    const { getByTestId } = render(
      <Button type="button" testId="test-button">
        Click me
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders button with specified type', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="submit">
        Submit
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button.tagName).toBe('BUTTON')
    expect(button.getAttribute('type')).toBe('submit')
  })

  it('renders button as link', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="link" href="/path">
        Link
      </Button>
    )
    const link = getByTestId('test-button')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/path')
  })

  it('renders unstyled button', () => {
    const { getByTestId } = render(
      <Button testId="test-button" unstyled>
        Unstyled
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button).toHaveClass('unstyled')
  })

  it('calls onClick handler', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <Button testId="test-button" onClick={handleClick}>
        Click me
      </Button>
    )
    const button = getByTestId('test-button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders button with custom class', () => {
    const { getByTestId } = render(
      <Button testId="test-button" className="custom-class">
        Custom Button
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button).toHaveClass('button custom-class')
  })

  it('renders button without href if not provided for link type', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="link">
        Link
      </Button>
    )
    const link = getByTestId('test-button')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/')
  })

  it('exposes aria-expanded, aria-controls and aria-label on native button elements', () => {
    const { getByTestId } = render(
      <Button
        testId="test-button"
        type="button"
        ariaExpanded={true}
        ariaControls="panel-1"
        ariaLabel="Toggle panel"
      >
        Toggle
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAttribute('aria-controls', 'panel-1')
    expect(button).toHaveAttribute('aria-label', 'Toggle panel')
  })

  it('forwards aria-label to the rendered link when type is "link"', () => {
    const { getByTestId } = render(
      <Button testId="test-link" type="link" href="/path" ariaLabel="Go home">
        Home
      </Button>
    )
    expect(getByTestId('test-link')).toHaveAttribute('aria-label', 'Go home')
  })
})
