'use client'
import { MapProps } from '@utils/types'
import {
  GoogleMap,
  Libraries,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'
import { useCallback, useRef } from 'react'
import mapStyle from '@utils/mapStyles'

const libraries = ['places'] as Libraries

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
}

export const Map = ({
  className,
  testId,
  markers,
  style = {
    width: '100%',
    minHeight: '600px',
  },
}: MapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY as string,
    libraries,
  })

  const mapRef = useRef()
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map
  }, [])

  if (loadError) return <div>Something went wrong</div>
  if (!isLoaded) return <div>Map is loading</div>

  return (
    <div
      data-testid={testId}
      className={`map${className ? ` ${className}` : ''}`}
    >
      <GoogleMap
        center={markers[0]}
        zoom={17}
        mapContainerStyle={style}
        options={options}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.lat + marker.lng}
            position={marker}
            onLoad={onMapLoad}
          />
        ))}
        map
      </GoogleMap>
    </div>
  )
}
