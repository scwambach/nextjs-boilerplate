import { TagProps } from '@utils/types'
import { LinkObject } from '@components/modules'
import { Box } from '@components/utility'

export const Tag = ({
  className,
  label,
  elementTag = 'span',
  href,
  testId,
  theme = 'primary',
}: TagProps) => {
  return (
    <Box
      radius={4}
      testId={testId}
      elementTag={elementTag}
      className={`tagItem ${theme}${className ? ` ${className}` : ''}`}
    >
      {href ? <LinkObject href={href}>{label}</LinkObject> : label}
    </Box>
  )
}
