import { getBlockId, getDerivedBlockProps, resolveComponent } from './logic'

// No styles.scss: BlockFactory renders no wrapping element or className of
// its own — it's a pure dispatch/composition component that resolves and
// renders the appropriate Block or Module component for each CMS item.
export const BlockFactory = (props: any) => {
  return (
    <>
      {props.items?.map((object: any, index: number) => {
        const Component = resolveComponent(object)
        const uniqueId = getBlockId(object._type, index)

        return (
          <Component
            {...object}
            componentId={uniqueId}
            key={uniqueId}
            boxRadius="8"
            {...getDerivedBlockProps(object, props.global?.contact)}
          />
        )
      })}
    </>
  )
}
