import React from 'react'
import { render } from '@testing-library/react'
import { BlockWrapper } from './index'

describe('BlockWrapper Component', () => {
  it('renders without crashing with required props', () => {
    const { getByTestId } = render(
      <BlockWrapper testId="block-wrapper">Content</BlockWrapper>
    )
    expect(getByTestId('block-wrapper')).toBeInTheDocument()
  })

  it('reflects the bgColor prop by applying the color and padded classes', () => {
    const { getByTestId } = render(
      <BlockWrapper testId="block-wrapper" bgColor="primary">
        Content
      </BlockWrapper>
    )
    const el = getByTestId('block-wrapper')
    expect(el).toHaveClass('primary')
    expect(el).toHaveClass('padded')
  })

  it('renders a background ImageObject when backgroundImage is provided', () => {
    const { getByTestId } = render(
      <BlockWrapper
        testId="block-wrapper"
        backgroundImage={{ src: '/test.jpg' }}
      >
        Content
      </BlockWrapper>
    )
    const el = getByTestId('block-wrapper')
    expect(el).toHaveClass('hasBgImage')
  })

  it('uses a semantic section element by default (accessibility)', () => {
    const { getByTestId } = render(
      <BlockWrapper testId="block-wrapper">Content</BlockWrapper>
    )
    expect(getByTestId('block-wrapper').tagName).toBe('SECTION')
  })
})
