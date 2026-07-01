import React from 'react'
import { render } from '@testing-library/react'
import { Banner } from './index'
import { Colors } from '@utils/types'

describe('Banner', () => {
  it('renders with required props', () => {
    const { getByText } = render(<Banner heading="Test Heading" />)
    expect(getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders with all props', () => {
    const { getByText, getByTestId } = render(
      <Banner
        heading="Test Heading"
        subheading="Test Subheading"
        message="Test Message"
        markdown
        backgroundImage={{
          alt: 'Banner Image',
          width: 900,
          height: 500,
          src: '/image.jpg',
        }}
        links={[{ label: 'Button 1' }, { label: 'Button 2' }]}
        crumbs={{
          current: 'Current',
          items: [
            {
              label: 'Item 1',
              href: '/item-1',
            },
            { label: 'Item 2', href: '/item-2' },
          ],
        }}
      />
    )
    expect(getByText('Test Heading')).toBeInTheDocument()
    expect(getByText('Test Subheading')).toBeInTheDocument()
    expect(getByText('Test Message')).toBeInTheDocument()
    expect(getByTestId('banner-image')).toBeInTheDocument()
    expect(getByTestId('banner-heading')).toBeInTheDocument()
    expect(getByText('Button 1')).toBeInTheDocument()
    expect(getByText('Button 2')).toBeInTheDocument()
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <Banner heading="Test Heading" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with custom bgColor', () => {
    const { container } = render(
      <Banner heading="Test Heading" bgColor={'red' as Colors} />
    )
    expect(container.firstChild).toHaveClass('banner red')
  })

  it('renders without image when img prop is not provided', () => {
    const { queryByTestId } = render(<Banner heading="Test Heading" />)
    expect(queryByTestId('banner-image')).toBeNull()
  })

  it('renders without subheading when subheading prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Test Subheading')).toBeNull()
  })

  it('renders without message when message prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Test Message')).toBeNull()
  })

  it('renders without links when links prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Button 1')).toBeNull()
    expect(queryByText('Button 2')).toBeNull()
  })

  it('renders with breadcrumbs when crumbs prop is provided', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        crumbs={{
          current: 'Current',
          items: [
            {
              label: 'Item 1',
              href: '/item-1',
            },
            { label: 'Item 2', href: '/item-2' },
          ],
        }}
      />
    )
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  it('does not render breadcrumbs when crumbs prop is not provided', () => {
    const { queryByTestId } = render(<Banner heading="Test Heading" />)
    expect(queryByTestId('breadcrumbs')).toBeNull()
  })

  it('does not render links when links prop is an empty array', () => {
    const { queryByText } = render(<Banner heading="Test Heading" links={[]} />)
    expect(queryByText('Button 1')).toBeNull()
    expect(queryByText('Button 2')).toBeNull()
  })

  it('renders the heading with an accessible heading level', () => {
    const { getByTestId } = render(
      <Banner heading="Test Heading" headingLevel={2} />
    )
    const headingEl = getByTestId('banner-heading')
    expect(headingEl.tagName).toBe('H2')
  })

  it('renders with tags', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        tags={[
          { label: 'Tag 1', href: '/tag-1' },
          { label: 'Tag 2', href: '/tag-2' },
        ]}
      />
    )
    expect(getByText('Tag 1')).toBeInTheDocument()
    expect(getByText('Tag 2')).toBeInTheDocument()
  })

  it('renders with date', () => {
    const { getByText } = render(
      <Banner heading="Test Heading" date="2024-01-15" />
    )
    expect(getByText('Jan 15, 2024')).toBeInTheDocument()
  })

  it('renders with authors (single)', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        authors={[
          {
            _id: '1',
            _type: 'person',
            firstName: 'John',
            lastName: 'Doe',
            image: {
              src: '/avatar.jpg',
              alt: 'John Doe',
              width: 100,
              height: 100,
            },
          },
        ]}
      />
    )
    expect(getByText('John Doe')).toBeInTheDocument()
  })

  it('renders with multiple authors', () => {
    const { getByText, container } = render(
      <Banner
        heading="Test Heading"
        authors={[
          {
            _id: '1',
            _type: 'person',
            firstName: 'John',
            lastName: 'Doe',
            image: {
              src: '/avatar1.jpg',
              alt: 'John Doe',
              width: 100,
              height: 100,
            },
          },
          {
            _id: '2',
            _type: 'person',
            firstName: 'Jane',
            lastName: 'Smith',
            image: {
              src: '/avatar2.jpg',
              alt: 'Jane Smith',
              width: 100,
              height: 100,
            },
          },
        ]}
      />
    )
    expect(getByText('John Doe and Jane Smith')).toBeInTheDocument()
    expect(container.querySelector('.authors.multiple')).toBeInTheDocument()
  })

  it('renders with portable content subheading (non-markdown)', () => {
    const { container } = render(
      <Banner
        heading="Test Heading"
        subheading={[
          {
            _type: 'block',
            _key: '1',
            children: [
              { _type: 'span', _key: '2', text: 'Portable subheading' },
            ],
          },
        ]}
        markdown={false}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('renders with background video', () => {
    const { container } = render(
      <Banner
        heading="Test Heading"
        backgroundVideo={{
          url: 'https://example.com/video.mp4',
        }}
      />
    )
    expect(container.querySelector('.has-image')).toBeInTheDocument()
  })

  it('renders with foreground media', () => {
    const { container } = render(
      <Banner
        heading="Test Heading"
        foregroundMedia={{
          src: '/foreground.jpg',
          alt: 'Foreground',
          width: 800,
          height: 600,
        }}
      />
    )
    expect(container.querySelector('img[alt="Foreground"]')).toBeInTheDocument()
  })

  it('renders with contained and overlap styles', () => {
    const { container } = render(
      <Banner heading="Test Heading" contained overlap />
    )
    expect(container.querySelector('.overlap')).toBeInTheDocument()
    expect(container.querySelector('.contained')).toBeInTheDocument()
  })

  it('renders with contained and micro styles', () => {
    const { container } = render(
      <Banner heading="Test Heading" contained micro />
    )
    expect(container.querySelector('.micro')).toBeInTheDocument()
    expect(container.querySelector('.contained')).toBeInTheDocument()
  })

  it('renders with crumbs having only current', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        crumbs={{
          current: 'Current Page',
        }}
      />
    )
    expect(getByText('Current Page')).toBeInTheDocument()
  })

  it('renders with crumbs having only items', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        crumbs={{
          items: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ],
        }}
      />
    )
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('About')).toBeInTheDocument()
  })
})
