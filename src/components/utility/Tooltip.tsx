import { TooltipProps } from '../../utils/types'
import { Box } from './Box'

export const Tooltip = ({
  children,
  className,
  componentId,
  copy,
  testId,
}: TooltipProps) => {
  return (
    <span
      id={componentId}
      data-testid={testId}
      className={`tooltip${className ? ` ${className}` : ''}`}
    >
      {children}
      <Box elementTag="span">{copy}</Box>
    </span>
  )
}
