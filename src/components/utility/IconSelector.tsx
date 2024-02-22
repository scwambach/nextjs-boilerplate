'use client'
import * as Icon from '@phosphor-icons/react'
import { IconSelectorProps } from '@utils/types'
import { ComponentType } from 'react'

export const IconSelector = ({
  icon,
  alt,
  color,
  size,
  weight,
  className,
  mirrored,
}: IconSelectorProps) => {
  const IconComponent = Icon[icon] as ComponentType<Icon.IconProps>

  const phosphorProps = {
    alt,
    color,
    size,
    weight,
    mirrored,
    className,
  }

  return <IconComponent {...phosphorProps} />
}
