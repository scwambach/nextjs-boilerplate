import React from 'react'
import { render } from '@testing-library/react'
import { Map } from './index'

describe('Map component', () => {
  const markers = [{ lat: 40.7128, lng: -74.006 }]

  it('renders without crashing with required props', () => {
    const { container } = render(<Map markers={markers} />)
    expect(container).toBeInTheDocument()
  })

  it('shows a loading state (semantic heading) while the Google Maps script has not loaded', () => {
    const { getByText } = render(<Map markers={markers} />)
    expect(getByText('Map is Loading')).toBeInTheDocument()
  })

  it('renders the loading message as a semantic heading element for accessibility', () => {
    const { getByText } = render(<Map markers={markers} />)
    expect(getByText('Map is Loading').tagName).toBe('P')
  })
})
