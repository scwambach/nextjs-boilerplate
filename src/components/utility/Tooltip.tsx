import { ComponentProps } from '@utils/types'
import { ReactNode } from 'react'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

interface TooltipProps extends ComponentProps {
  children: ReactNode
  copy: string
}

export const Tooltip = ({ className, children, copy }: TooltipProps) => {
  return (
    <span className={`tooltip${className ? ` ${className}` : ''}`}>
      {children}
      <span className={roboto.className}>{copy}</span>
    </span>
  )
}
