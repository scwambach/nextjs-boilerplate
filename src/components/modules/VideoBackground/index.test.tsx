import React from 'react'
import { render } from '@testing-library/react'
import { VideoBackground } from './index'

describe('VideoBackground', () => {
  it('renders without crashing with required props', () => {
    const { getByTestId } = render(
      <VideoBackground video="/video.mp4" testId="video-bg" />
    )
    expect(getByTestId('video-bg')).toBeInTheDocument()
  })

  it('reflects the video prop as the video source', () => {
    const { container } = render(<VideoBackground video="/video.mp4" />)
    expect(container.querySelector('source')).toHaveAttribute(
      'src',
      '/video.mp4'
    )
  })

  it('renders the bgColor overlay when provided', () => {
    const { container } = render(
      <VideoBackground video="/video.mp4" bgColor="primary" />
    )
    expect(container.querySelector('.overlay')).toHaveClass('primary')
  })

  // Purely decorative background media with no user interaction/handlers.
  it('renders a fallback image (hidden by default, shown for prefers-reduced-motion) alongside the video', () => {
    const { container } = render(
      <VideoBackground
        video="/video.mp4"
        image={{ query: 'fallback', alt: 'Fallback background' }}
      />
    )
    expect(container.querySelector('.fallbackImage')).toBeInTheDocument()
  })

  it('hides the decorative video wrapper from assistive technology', () => {
    const { getByTestId } = render(
      <VideoBackground video="/video.mp4" testId="video-bg" />
    )
    expect(getByTestId('video-bg')).toHaveAttribute('aria-hidden', 'true')
  })
})
