import React from 'react'
import { render } from '@testing-library/react'
import { Videos } from './index'
import { VideosProps } from '@utils/types'

jest.mock('react-player', () => () => null)

describe('Videos component', () => {
  const items: VideosProps['items'] = [
    { url: 'https://example.com/video1.mp4', title: 'Video One' },
    { url: 'https://example.com/video2.mp4', title: 'Video Two' },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(<Videos items={items} />)
    expect(container).toBeInTheDocument()
  })

  it('renders a heading when provided', () => {
    const { getByText } = render(
      <Videos items={items} heading="Watch Now" headingLevel={2} />
    )
    expect(getByText('Watch Now')).toBeInTheDocument()
  })

  it('renders all provided video items', () => {
    const { getByText } = render(<Videos items={items} />)
    expect(getByText('Video One')).toBeInTheDocument()
    expect(getByText('Video Two')).toBeInTheDocument()
  })

  it('renders the optional button when provided', () => {
    const { getByText } = render(
      <Videos items={items} button={{ label: 'See all videos' }} />
    )
    expect(getByText('See all videos')).toBeInTheDocument()
  })

  it('renders the heading with a semantic heading level for accessibility', () => {
    const { getByText } = render(
      <Videos items={items} heading="Watch Now" headingLevel={2} />
    )
    expect(getByText('Watch Now').tagName).toBe('H2')
  })
})
