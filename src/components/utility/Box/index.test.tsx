import React from 'react'
import { render } from '@testing-library/react'
import { Box } from './index'

describe('Box Component', () => {
  it('renders without crashing with required props', () => {
    const { getByTestId } = render(<Box testId="box">Content</Box>)
    expect(getByTestId('box')).toBeInTheDocument()
  })

  it('reflects the elementTag prop by rendering the specified element', () => {
    const { getByTestId } = render(
      <Box testId="box" elementTag="section">
        Content
      </Box>
    )
    expect(getByTestId('box').tagName).toBe('SECTION')
  })

  it('applies shadow and radius classes based on props', () => {
    const { getByTestId } = render(
      <Box testId="box" shadow={2} radius={8}>
        Content
      </Box>
    )
    const box = getByTestId('box')
    expect(box).toHaveClass('shadow-2')
    expect(box).toHaveClass('radius-8')
  })

  it('renders children content accessibly within the element', () => {
    const { getByText } = render(<Box testId="box">Accessible content</Box>)
    expect(getByText('Accessible content')).toBeInTheDocument()
  })
})
