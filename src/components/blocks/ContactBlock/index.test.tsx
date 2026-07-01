import React from 'react'
import { render } from '@testing-library/react'
import { ContactBlock } from './index'
import { ContactBlockProps } from '@utils/types'

describe('ContactBlock component', () => {
  const information: ContactBlockProps['information'] = {
    phone: '555-1234',
    email: 'hello@example.com',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
    },
    hours: [{ days: 'Mon-Fri', hours: '9am-5pm' }],
  }

  it('renders without crashing with required props', () => {
    const { container } = render(
      <ContactBlock information={information} googleMapsApiKey="" />
    )
    expect(container).toBeInTheDocument()
  })

  it('renders a heading when provided', () => {
    const { getByText } = render(
      <ContactBlock
        information={information}
        googleMapsApiKey=""
        heading="Contact Us"
      />
    )
    expect(getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders provided contact information as links', () => {
    const { getByText } = render(
      <ContactBlock
        information={information}
        googleMapsApiKey=""
        heading="Contact Us"
      />
    )
    expect(getByText('555-1234')).toHaveAttribute('href', 'tel:555-1234')
    expect(getByText('hello@example.com')).toHaveAttribute(
      'href',
      'mailto:hello@example.com'
    )
  })

  it('renders as a semantic section element with the componentId applied', () => {
    const { container } = render(
      <ContactBlock
        information={information}
        googleMapsApiKey=""
        componentId="contact-section"
      />
    )
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'contact-section')
  })
})
