import React from 'react'
import { render } from '@testing-library/react'
import { Cards } from './index'

const mockItems = [
  { title: 'Card 1', description: 'Description 1' },
  { title: 'Card 2', description: 'Description 2' },
]

const subheading = [
  {
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Cards Subheading',
        _key: 'd9986fb8c9440',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: '2977d788040d',
    markDefs: [],
  },
]

describe('Cards component', () => {
  it('renders with items', () => {
    const { getByText } = render(
      <Cards
        items={mockItems}
        heading="Cards Heading"
        subheading={subheading}
      />
    )

    expect(getByText('Cards Heading')).toBeInTheDocument()
    expect(getByText('Cards Subheading')).toBeInTheDocument()

    mockItems.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument()
      expect(getByText(item.description)).toBeInTheDocument()
    })
  })

  it('renders without heading and subheading', () => {
    const { queryByText } = render(<Cards items={mockItems} />)

    expect(queryByText('Cards Heading')).toBeNull()
    expect(queryByText('Cards Subheading')).toBeNull()

    mockItems.forEach((item) => {
      expect(queryByText(item.title)).toBeInTheDocument()
      expect(queryByText(item.description)).toBeInTheDocument()
    })
  })

  it('renders pagination nav with an accessible label when paginated with more items than the page size', () => {
    const manyItems = Array.from({ length: 8 }, (_, i) => ({
      title: `Card ${i + 1}`,
      description: `Description ${i + 1}`,
    }))
    const { getByRole } = render(
      <Cards items={manyItems} paginated itemsPerPage={6} />
    )
    expect(getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
  })

  it('shows a fallback heading when there are no items for the current page', () => {
    const { getByText } = render(<Cards items={[]} />)
    expect(getByText('There are no items for page 1.')).toBeInTheDocument()
  })
})
