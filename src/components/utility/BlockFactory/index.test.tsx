import React from 'react'
import { render, screen } from '@testing-library/react'
import { BlockFactory } from './index'

describe('BlockFactory Component', () => {
  it('renders without crashing when items is empty/undefined', () => {
    const { container } = render(<BlockFactory items={[]} />)
    expect(container).toBeInTheDocument()
  })

  it('reflects each item by rendering the resolved component with content', () => {
    render(
      <BlockFactory
        items={[
          {
            _type: 'button',
            blockType: 'module',
            label: 'Click me',
          },
        ]}
      />
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('does not crash when props.global is missing for a contactBlock item', () => {
    expect(() =>
      render(
        <BlockFactory items={[{ _type: 'contactBlock', blockType: 'block' }]} />
      )
    ).not.toThrow()
  })
})
