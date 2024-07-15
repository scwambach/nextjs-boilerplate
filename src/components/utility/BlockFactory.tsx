import mapStyle from '@utils/mapStyles'
import * as Block from '@components/blocks'
import * as Module from '@components/modules'

export const BlockFactory = (props: any) => {
  return (
    <>
      {props.items?.map((object: any, index: number) => {
        const captializedType =
          object._type.charAt(0).toUpperCase() + object._type.slice(1)

        const Component =
          object.blockType === 'module'
            ? Module[captializedType as keyof typeof Module]
            : Block[captializedType as keyof typeof Block]
        const uniqueId = `${object._type}_${index}`
        return (
          <Component
            {...object}
            componentId={uniqueId}
            key={uniqueId}
            boxRadius="8"
            mapStyle={
              object._type === 'map' || object._type === 'contactBlock'
                ? mapStyle
                : undefined
            }
            googleMapsApiKey={
              object._type === 'map' || object._type === 'contactBlock'
                ? (process.env.GOOGLE_MAP_API_KEY as string)
                : undefined
            }
            info={
              object._type === 'contactBlock' ? props.global.contact : undefined
            }
          />
        )
      })}
    </>
  )
}
