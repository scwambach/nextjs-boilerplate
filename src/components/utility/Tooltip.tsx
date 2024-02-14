import { bodyFont } from '@utils/fonts'
import { ComponentProps } from '@utils/types'
import { ReactNode } from 'react'

interface TooltipProps extends ComponentProps {
  children: ReactNode
  copy: string
}

export const Tooltip = ({ className, children, copy }: TooltipProps) => {
  return (
    <span className={`tooltip${className ? ` ${className}` : ''}`}>
      {children}
      <span className={bodyFont.className}>{copy}</span>
    </span>
  )
}
