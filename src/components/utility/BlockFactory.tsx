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
            info={object._type === 'ContactBlock' && props.global.contact}
          />
        )
      })}
    </>
  )
}
