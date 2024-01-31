'use client'
import * as Icon from '@phosphor-icons/react'
import { ComponentType } from 'react'

export interface IconSelectorProps {
  icon: keyof typeof Icon
  alt?: string
  color?: string
  size?: string | number
  weight?: Icon.IconWeight
  mirrored?: boolean
}

export const IconSelector = ({
  icon,
  alt,
  color,
  size,
  weight,
  mirrored,
}: IconSelectorProps) => {
  const IconComponent = Icon[icon] as ComponentType<Icon.IconProps>

  const phosphorProps = {
    alt,
    color,
    size,
    weight,
    mirrored,
  }

  return <IconComponent {...phosphorProps} />
}
