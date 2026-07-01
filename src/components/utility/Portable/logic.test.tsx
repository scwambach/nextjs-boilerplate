import React from 'react'
import { render } from '@testing-library/react'
import { getPortableTextComponents } from './logic'

describe('getPortableTextComponents', () => {
  it('renders a heading block with a slugified id (happy path)', () => {
    const components = getPortableTextComponents()
    const H2 = components.block.h2
    const { getByText } = render(<H2>{['Hello World']}</H2>)
    const heading = getByText('Hello World')
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveAttribute('id', 'hello-world')
  })

  it('gracefully skips rendering an image block when the asset reference is missing (edge case)', () => {
    const components = getPortableTextComponents()
    const ImageBlock = components.types.image
    const { container } = render(<ImageBlock value={{}} />)
    expect(container).toBeEmptyDOMElement()
  })
})
