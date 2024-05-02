import { render } from '@testing-library/react'
import { Timeline } from './Timeline'
import { TimelineProps } from '@utils/types'

const subheading = [
  {
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Timeline Subheading',
        _key: 'd9986fb8c9440',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: '2977d788040d',
    markDefs: [],
  },
]

const description = [
  {
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Description 1',
        _key: 'd9986fb8c9440',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: '2977d788040d',
    markDefs: [],
  },
]

describe('Timeline Component', () => {
  const defaultProps: TimelineProps = {
    events: [
      {
        date: '2023-01-01',
        title: 'Event 1',
        description,
        image: { query: 'history', alt: 'Image 1', width: 100, height: 100 },
      },
      {
        date: '2023-02-01',
        title: 'Event 2',
      },
    ],
    className: 'custom-class',
    heading: 'Timeline Heading',
    headingLevel: 3,
    subheading,
  }

  it('renders without crashing', () => {
    const { container } = render(<Timeline {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders heading when provided', () => {
    const { getByText } = render(<Timeline {...defaultProps} />)
    expect(getByText(defaultProps.heading as string)).toBeInTheDocument()
  })

  it('renders subheading when provided', () => {
    const { getByText } = render(<Timeline {...defaultProps} />)
    expect(getByText('Timeline Subheading')).toBeInTheDocument()
  })

  it('renders correct number of events', () => {
    const { container } = render(<Timeline {...defaultProps} />)
    const events = container.querySelectorAll('.timeline .eventItem')
    expect(events.length).toBe(defaultProps.events.length)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-timeline'
    const { container } = render(
      <Timeline {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('renders event with date', () => {
    const { getByText } = render(<Timeline {...defaultProps} />)
    expect(getByText('Jan 01, 2023')).toBeInTheDocument()
  })

  it('renders event with title', () => {
    const { getByText } = render(<Timeline {...defaultProps} />)
    expect(getByText('Event 1')).toBeInTheDocument()
  })

  it('renders event with description', () => {
    const { getByText } = render(<Timeline {...defaultProps} />)
    expect(getByText('Description 1')).toBeInTheDocument()
  })

  it('renders event with image', () => {
    const { getByAltText } = render(<Timeline {...defaultProps} />)
    expect(getByAltText('Image 1')).toBeInTheDocument()
  })

  it('renders event without description or image', () => {
    const { queryByText, queryByAltText } = render(
      <Timeline {...defaultProps} />
    )
    expect(queryByText('Event 2')).toBeInTheDocument()
    expect(queryByText('Description 2')).toBeNull()
    expect(queryByAltText('Image 2')).toBeNull()
  })
})
