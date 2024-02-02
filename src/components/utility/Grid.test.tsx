import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from './Grid'

// Mocking the useWindowWidth hook

describe('Grid Component', () => {
  it('renders with default props', () => {
    render(
      <Grid testId="grid">
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    )

    expect(screen.getByTestId('grid')).toBeInTheDocument()
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    render(
      <Grid
        className="custom-grid"
        testId="custom-grid"
        elementTag="section"
        gap={2}
        columns={3}
      >
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    )

    expect(screen.getByTestId('custom-grid')).toBeInTheDocument()
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()

    const gridElement = screen.getByTestId('custom-grid')
    expect(gridElement).toHaveClass('custom-grid')
    expect(gridElement.tagName.toLowerCase()).toEqual('section')
    expect(gridElement).toHaveStyle('gap: 2rem')
  })
})
