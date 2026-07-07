'use client'
import * as Icon from '@phosphor-icons/react'
import { IconSelectorProps } from '@/utils/types'
import { ComponentType } from 'react'

// No styles.scss: this component renders no wrapping element or className of
// its own — it dispatches directly to the resolved Phosphor icon component,
// which brings its own SVG markup/props (className passed through as-is).
export const IconSelector = ({
  alt,
  className,
  color,
  componentId,
  icon,
  mirrored,
  size,
  testId,
  weight,
}: IconSelectorProps) => {
  const IconComponent = Icon[icon] as ComponentType<Icon.IconProps>

  const phosphorProps = {
    alt,
    className,
    color,
    id: componentId,
    mirrored,
    size,
    'test-id': testId,
    weight,
    // Icons are decorative by default (no accessible name from Phosphor's
    // `alt` prop). When no `alt` text is provided, hide the icon from
    // assistive tech; when provided, expose it as an accessible image.
    'aria-hidden': alt ? undefined : true,
    role: alt ? 'img' : undefined,
    'aria-label': alt || undefined,
  }

  return <IconComponent {...phosphorProps} />
}
