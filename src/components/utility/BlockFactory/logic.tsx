import mapStyle from '@utils/mapStyles'
import * as Block from '@components/blocks'
import * as Module from '@components/modules'

/** Capitalizes the first letter of a Sanity `_type` string, e.g. "map" -> "Map". */
export const capitalizeType = (type: string): string =>
  type.charAt(0).toUpperCase() + type.slice(1)

/**
 * Resolves the React component for a given block object, looking it up in
 * either the shared Module or Block registries based on `blockType`.
 */
export const resolveComponent = (object: any) => {
  const capitalizedType = capitalizeType(object._type)
  return object.blockType === 'module'
    ? Module[capitalizedType as keyof typeof Module]
    : Block[capitalizedType as keyof typeof Block]
}

/** Builds a stable, unique key/componentId for a block based on its type and index. */
export const getBlockId = (type: string, index: number): string =>
  `${type}_${index}`

const isMapOrContact = (type: string) =>
  type === 'map' || type === 'contactBlock'

/**
 * Derives the extra props a block needs beyond its own CMS data — map
 * configuration for map/contactBlock types, and shared contact info for
 * contactBlock.
 */
export const getDerivedBlockProps = (object: any, globalContact: any) => ({
  mapStyle: isMapOrContact(object._type) ? mapStyle : undefined,
  googleMapsApiKey: isMapOrContact(object._type)
    ? (process.env.GOOGLE_MAP_API_KEY as string)
    : undefined,
  info: object._type === 'contactBlock' ? globalContact : undefined,
})
