import { render } from '@testing-library/react'
import { Card, CardProps } from '../Card'
import nature from '../../images/nature2.webp'

describe('Card', () => {
  const defaultProps: CardProps = {
    title: 'Test Title',
  }

  it('renders the Card component with all props', () => {
    const props: CardProps = {
      ...defaultProps,
      description: 'Test Description',
      image: { ...nature, alt: 'Test Image' },
      theme: 'primary',
      links: [
        { label: 'Button 1', href: '#' },
        { label: 'Button 2', href: '#' },
      ],
    }
    const { getByText, getByAltText } = render(<Card {...props} />)
    expect(getByText(props.title)).toBeInTheDocument()
    expect(getByText(props.description!)).toBeInTheDocument()
    expect(getByAltText(props.image!.alt)).toBeInTheDocument()
    expect(getByText('Button 1')).toBeInTheDocument()
    expect(getByText('Button 2')).toBeInTheDocument()
  })

  it('renders the Card component without optional props', () => {
    const { getByText } = render(<Card {...defaultProps} />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  it('renders the Card component with href prop only', () => {
    const props: CardProps = {
      ...defaultProps,
      href: '/test',
    }
    const { getByText } = render(<Card {...props} />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  it('renders the Card component with description prop only', () => {
    const props: CardProps = {
      ...defaultProps,
      description: 'Test Description',
    }
    const { getByText } = render(<Card {...props} />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  it('renders the Card component with default headingLevel', () => {
    const props: CardProps = {
      ...defaultProps,
    }
    const { getByText } = render(<Card {...props} />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  it('renders the Card component with custom className', () => {
    const props: CardProps = {
      ...defaultProps,
      className: 'custom-class',
    }
    const { container } = render(<Card {...props} />)
    expect(container.firstChild).toHaveClass('card custom-class')
  })

  it('renders the Card component with custom theme', () => {
    const props: CardProps = {
      ...defaultProps,
      theme: 'tertiary',
    }
    const { container } = render(<Card {...props} />)
    expect(container.firstChild).toHaveClass('card tertiary')
  })
})
