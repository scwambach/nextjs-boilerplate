import { TagProps } from '../../utils/types'
import { LinkObject } from '../modules'
import { Box } from '../utility'

export const Tag = ({
  className,
  componentId,
  elementTag = 'span',
  href,
  label,
  testId,
  theme = 'primary',
}: TagProps) => {
  return (
    <Box
      componentId={componentId}
      radius={4}
      testId={testId}
      elementTag={elementTag}
      className={`tagItem ${theme}${className ? ` ${className}` : ''}`}
    >
      {href ? <LinkObject href={href}>{label}</LinkObject> : label}
    </Box>
  )
}
