import React from 'react'
import { render } from '@testing-library/react'
import { ShareButtons } from './index'

describe('ShareButtons', () => {
  const baseProps = {
    title: 'My Great Post',
    slug: 'my-great-post',
    testId: 'share-buttons',
  }

  it('renders without crashing with required props', () => {
    const { getByTestId } = render(<ShareButtons {...baseProps} />)
    expect(getByTestId('share-buttons')).toBeInTheDocument()
  })

  it('reflects the slug prop by building the correct share URLs', () => {
    const { getByLabelText } = render(<ShareButtons {...baseProps} />)
    expect(getByLabelText('Share on Twitter')).toHaveAttribute(
      'href',
      expect.stringContaining('my-great-post')
    )
    expect(getByLabelText('Share on Facebook')).toHaveAttribute(
      'href',
      expect.stringContaining('my-great-post')
    )
  })

  // Purely a set of external links (no custom interactive/keyboard logic
  // beyond the native <a> behavior LinkObject/Button already provide and
  // test independently), so there is no additional interaction to cover here.
  it('gives each network link a distinct accessible name instead of relying on the shared decorative icon/text', () => {
    const { getByLabelText } = render(<ShareButtons {...baseProps} />)
    expect(getByLabelText('Share on Twitter')).toBeInTheDocument()
    expect(getByLabelText('Share on LinkedIn')).toBeInTheDocument()
    expect(getByLabelText('Share on Facebook')).toBeInTheDocument()
  })
})
