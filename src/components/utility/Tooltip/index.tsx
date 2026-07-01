import { useId } from 'react'
import { TooltipProps } from '../../../utils/types'
import { resolveTooltipId } from './logic'
import './styles.scss'

export const Tooltip = ({
  children,
  className,
  componentId,
  copy,
  testId,
}: TooltipProps) => {
  const generatedId = useId()
  const tooltipId = resolveTooltipId(componentId, generatedId)

  return (
    <span
      id={componentId}
      data-testid={testId}
      tabIndex={0}
      aria-describedby={tooltipId}
      className={`tooltip${className ? ` ${className}` : ''}`}
    >
      {children}
      <span id={tooltipId} role="tooltip">
        {copy}
      </span>
    </span>
  )
}
