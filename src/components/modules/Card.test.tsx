import { render, waitFor } from '@testing-library/react'
import { Content, Card } from './Card'
import nature from '../../images/nature2.webp'
import { CardProps } from '@utils/types'

describe('Content Component', () => {
  const cardProps = {
    className: 'custom-class',
    title: 'Sample Title',
    description: 'Sample Description',
    date: '2024-02-20',
    authors: [{ firstName: 'John', lastName: 'Doe' }],
    tags: [{ label: 'Tag 1' }, { label: 'Tag 2' }],
    links: [
      {
        label: 'Link Item',
        href: 'https://example.com/link1',
        testId: 'link-item',
      },
    ],
    headingLevel: 2,
    image: { ...nature, alt: 'Image Alt' },
  } as CardProps

  it('renders card content correctly', () => {
    const { getByText } = render(<Content {...cardProps} />)
    expect(getByText('Tag 1')).toBeInTheDocument()
    expect(getByText('Tag 2')).toBeInTheDocument()
    expect(getByText('Feb 20, 2024')).toBeInTheDocument()
    expect(getByText('Sample Title')).toBeInTheDocument()
    expect(getByText('Sample Description')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    waitFor(() => expect(getByText('Link Item')).toBeInTheDocument())
    expect(getByText('Link Item')).toBeInTheDocument()
  })

  it('renders card image correctly', () => {
    const { getByAltText } = render(<Content {...cardProps} />)
    expect(getByAltText('Image Alt')).toBeInTheDocument()
  })
})

describe('Card Component', () => {
  const cardProps = {
    className: 'custom-class',
    title: 'Sample Title',
    description: 'Sample Description',
    date: '2024-02-20',
    authors: [{ firstName: 'John', lastName: 'Doe' }],
    tags: [{ label: 'Tag 1' }, { label: 'Tag 2' }],
    links: [{ label: 'Link 1', href: 'https://example.com/link1' }],
    headingLevel: 2,
    image: { ...nature, alt: 'Image Alt' },
  } as CardProps

  it('renders card with link correctly', () => {
    const { getByText } = render(<Card {...cardProps} />)
    expect(getByText('Sample Title')).toBeInTheDocument()
    expect(getByText('Sample Description')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Link 1')).toBeInTheDocument()
  })

  it('renders card without link correctly', () => {
    const propsWithoutLink = { ...cardProps, href: '' }
    const { getByText } = render(<Card {...propsWithoutLink} />)
    expect(getByText('Sample Title')).toBeInTheDocument()
    expect(getByText('Sample Description')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Tag 1')).toBeInTheDocument()
    expect(getByText('Tag 2')).toBeInTheDocument()
    expect(getByText('Feb 20, 2024')).toBeInTheDocument()
  })
})
