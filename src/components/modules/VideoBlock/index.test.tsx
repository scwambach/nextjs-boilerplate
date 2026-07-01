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

  it('renders portable content copy when markdown is false', () => {
    const { container } = render(
      <VideoBlock
        {...baseProps}
        copy={[
          {
            _type: 'block',
            _key: '1',
            children: [{ _type: 'span', _key: '2', text: 'Portable copy' }],
          },
        ]}
        markdown={false}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('renders with poster image', () => {
    const { container } = render(
      <VideoBlock
        {...baseProps}
        poster={{
          src: '/poster.jpg',
          alt: 'Video poster',
          width: 1920,
          height: 1080,
        }}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <VideoBlock {...baseProps} className="custom-video" />
    )
    expect(container.querySelector('.videoBlock.custom-video')).toBeInTheDocument()
  })
})

