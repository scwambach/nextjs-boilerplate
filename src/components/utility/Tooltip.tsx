import { bodyFont } from '@utils/fonts'
import { TooltipProps } from '@utils/types'

export const Tooltip = ({ className, children, copy }: TooltipProps) => {
  return (
    <span className={`tooltip${className ? ` ${className}` : ''}`}>
      {children}
      <span className={bodyFont.className}>{copy}</span>
    </span>
  )
}
