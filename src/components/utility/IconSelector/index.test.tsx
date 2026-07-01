import React from 'react'
import { IconSelector } from './index'
import { render } from '@testing-library/react'

describe('IconSelector', () => {
  it('renders the icon', () => {
    const icon = 'Airplane'
    const { container } = render(<IconSelector icon={icon} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('reflects the size prop on the rendered svg', () => {
    const { container } = render(<IconSelector icon="Airplane" size={40} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
  })

  it('hides decorative icons from assistive tech when no alt is provided', () => {
    const { container } = render(<IconSelector icon="Airplane" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('exposes an accessible name via role and aria-label when alt is provided', () => {
    const { container } = render(
      <IconSelector icon="Airplane" alt="Airplane icon" />
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).toHaveAttribute('aria-label', 'Airplane icon')
  })
})
