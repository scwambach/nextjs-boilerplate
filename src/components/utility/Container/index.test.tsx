import React from 'react'
import { render } from '@testing-library/react'
import { Container } from './index'

describe('Container Component', () => {
  it('renders without crashing with required props', () => {
    const { getByTestId } = render(
      <Container testId="container">Content</Container>
    )
    expect(getByTestId('container')).toBeInTheDocument()
  })

  it('reflects the padded prop by applying the padded class', () => {
    const { getByTestId } = render(
      <Container testId="container" padded>
        Content
      </Container>
    )
    expect(getByTestId('container')).toHaveClass('container', 'padded')
  })

  it('applies the containerClass and className props', () => {
    const { getByTestId } = render(
      <Container testId="container" containerClass="narrow" className="custom">
        Content
      </Container>
    )
    const el = getByTestId('container')
    expect(el).toHaveClass('narrow')
    expect(el).toHaveClass('custom')
  })

  it('renders children content accessibly', () => {
    const { getByText } = render(
      <Container testId="container">Accessible content</Container>
    )
    expect(getByText('Accessible content')).toBeInTheDocument()
  })
})
