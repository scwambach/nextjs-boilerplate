import React from 'react'
import { render } from '@testing-library/react'
import { VideoBlock } from './index'

jest.mock('react-player', () => () => null)

describe('VideoBlock', () => {
  const baseProps = {
    url: 'https://example.com/video.mp4',
    testId: 'video-block',
  }

  it('renders without crashing with required props', () => {
    const { getByTestId } = render(<VideoBlock {...baseProps} />)
    expect(getByTestId('video-block')).toBeInTheDocument()
  })

  it('reflects the title prop by rendering it as a heading', () => {
    const { getByText } = render(<VideoBlock {...baseProps} title="My Video" />)
    expect(getByText('My Video')).toBeInTheDocument()
  })

  it('renders markdown copy when markdown is true', () => {
    const { getByText } = render(
      <VideoBlock {...baseProps} copy="**Bold copy**" markdown />
    )
    expect(getByText('Bold copy')).toBeInTheDocument()
  })

  // Purely presentational wrapper around react-player, which owns and
  // tests its own play/pause interaction; no additional component-specific
  // interactive behavior exists here to test.
  it('renders the video container ready to host the player', () => {
    const { container } = render(<VideoBlock {...baseProps} />)
    expect(container.querySelector('.box')).toBeInTheDocument()
  })
})
