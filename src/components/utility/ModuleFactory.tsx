'use client'
import * as Module from '@components/modules'

export const ModuleFactory = (props: any) => {
  return (
    <>
      {props.items.map((object: any) => {
        const Component = Module[object._type as keyof typeof Module]
        return <Component {...object} key={object._key} />
      })}
    </>
  )
}
