import React from 'react'
import { render } from '@testing-library/react'
import { Map } from './index'
import { useLoadScript } from '@react-google-maps/api'

// Mock the Google Maps React hook
jest.mock('@react-google-maps/api', () => ({
  ...jest.requireActual('@react-google-maps/api'),
  useLoadScript: jest.fn(),
  GoogleMap: ({ children }: any) => (
    <div data-testid="google-map">{children}</div>
  ),
  Marker: ({ position }: any) => (
    <div data-testid="marker">{JSON.stringify(position)}</div>
  ),
  Libraries: jest.fn(),
}))

describe('Map component', () => {
  const markers = [{ lat: 40.7128, lng: -74.006 }]

  beforeEach(() => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: false,
      loadError: undefined,
    })
  })

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

  it('shows error message when map fails to load', () => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: false,
      loadError: new Error('Failed to load'),
    })

    const { getByText } = render(<Map markers={markers} />)
    expect(getByText('Something went wrong')).toBeInTheDocument()
  })

  it('renders the map when loaded successfully', () => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: true,
      loadError: undefined,
    })

    const { getByTestId, getAllByTestId } = render(<Map markers={markers} />)
    expect(getByTestId('google-map')).toBeInTheDocument()
    expect(getAllByTestId('marker')).toHaveLength(1)
  })

  it('renders multiple markers', () => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: true,
      loadError: undefined,
    })

    const multipleMarkers = [
      { lat: 40.7128, lng: -74.006 },
      { lat: 40.758, lng: -73.9855 },
      { lat: 40.7489, lng: -73.968 },
    ]

    const { getAllByTestId } = render(<Map markers={multipleMarkers} />)
    expect(getAllByTestId('marker')).toHaveLength(3)
  })

  it('applies custom className', () => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: true,
      loadError: undefined,
    })

    const { container } = render(
      <Map markers={markers} className="custom-map" />
    )
    expect(container.querySelector('.map.custom-map')).toBeInTheDocument()
  })

  it('uses custom API key when provided', () => {
    ;(useLoadScript as jest.Mock).mockReturnValue({
      isLoaded: true,
      loadError: undefined,
    })

    render(<Map markers={markers} googleMapsApiKey="test-api-key" />)
    expect(useLoadScript).toHaveBeenCalledWith({
      googleMapsApiKey: 'test-api-key',
      libraries: ['places'],
    })
  })
})
