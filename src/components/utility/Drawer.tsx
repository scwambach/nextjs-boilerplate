'use client'
import { Button } from '@components/modules'
import { ButtonProps, ComponentProps, Themes } from '@utils/types'
import { ReactNode, useEffect, useState } from 'react'

interface DrawerProps extends ComponentProps {
  drawerId: string
  triggerCopy: string
  triggerUnstyled?: boolean
  triggerTheme?: Themes
  buttonTheme?: Themes
  buttons?: ButtonProps[]
  children: ReactNode
  open?: boolean
}

export const Drawer = ({
  className,
  children,
  triggerCopy,
  open,
  triggerTheme,
  triggerUnstyled,
}: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open || false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [])
  return (
    <span className={`drawer${className ? ` ${className}` : ''}`}>
      <Button
        type="button"
        label={triggerCopy}
        theme={triggerTheme}
        unstyled={triggerUnstyled}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <div className={`drawerBox ${isOpen ? 'open' : 'closed'}`}>
        <div className="body">{children}</div>
      </div>
    </span>
  )
}
