import React from 'react'
import { render } from '@testing-library/react'
import { FormSelector } from './index'

describe('FormSelector component', () => {
  it('renders without crashing with required props', () => {
    const { container } = render(<FormSelector formName="ContactForm" />)
    expect(container).toBeInTheDocument()
  })

  it('renders the form matching the given formName prop', () => {
    const { container } = render(<FormSelector formName="ContactForm" />)
    expect(container.querySelector('#contactForm')).toBeInTheDocument()
  })

  it('renders a submit button that is keyboard accessible (native button element)', () => {
    const { getByText } = render(<FormSelector formName="ContactForm" />)
    const submitButton = getByText('Submit')
    expect(submitButton.closest('button')).toBeInTheDocument()
  })
})
