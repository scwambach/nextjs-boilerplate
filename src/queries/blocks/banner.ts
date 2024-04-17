import { heading, imageQuery } from 'queries/common'

export const banner = `_type == "banner" => {
  ${heading},
  className,
  bgColor,
  contained,
  overlap,
  micro,
  containedWidth,
  boxBgColor,
  links,
  ${imageQuery('backgroundImage', true)},
  ${imageQuery('foregroundMedia')},
}`
