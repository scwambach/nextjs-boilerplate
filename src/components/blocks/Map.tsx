'use client'
import { MapProps } from '../../utils/types'
import {
  GoogleMap,
  Libraries,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'
import { useCallback, useRef } from 'react'
import { Box, Flex, Heading, Spinner } from '../utility'

const libraries = ['places'] as Libraries

export const Map = ({
  className,
  componentId,
  mapStyle,
  markers,
  googleMapsApiKey = '',
  style = {
    width: '100%',
    minHeight: '600px',
  },
  testId,
}: MapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  })

  const options = {
    styles: mapStyle,
    disableDefaultUI: true,
  }

  const mapRef = useRef()
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map
  }, [])

  if (loadError)
    return (
      <Flex
        componentId={componentId}
        justifyContent="center"
        alignItems="center"
        style={style}
      >
        <Heading level={1} nonHeadingElement="p">
          {' '}
          Something went wrong
        </Heading>
      </Flex>
    )
  if (!isLoaded)
    return (
      <Flex
        componentId={componentId}
        justifyContent="center"
        direction="column"
        alignItems="center"
        gap="none"
        style={style}
      >
        <Spinner size={100} />
        <Heading level={1} nonHeadingElement="p">
          Map is Loading
        </Heading>
      </Flex>
    )

  return (
    <Box
      componentId={componentId}
      testId={testId}
      style={style}
      elementTag="section"
      className={`map${className ? ` ${className}` : ''}`}
    >
      <GoogleMap
        center={markers[0]}
        zoom={17}
        mapContainerStyle={style}
        options={options}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker.lat + marker.lng}
            position={marker}
            onLoad={onMapLoad}
          />
        ))}
        map
      </GoogleMap>
    </Box>
  )
}
