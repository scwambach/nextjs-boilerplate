import { bodyFont } from '@utils/fonts'
import { TooltipProps } from '@utils/types'
import { Box } from './Box'

export const Tooltip = ({ className, children, copy }: TooltipProps) => {
  return (
    <span className={`tooltip${className ? ` ${className}` : ''}`}>
      {children}
      <Box elementTag="span" className={bodyFont.className}>
        {copy}
      </Box>
    </span>
  )
}
