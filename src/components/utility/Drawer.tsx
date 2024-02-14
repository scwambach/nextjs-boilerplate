'use client'
import { Button } from '@components/modules'
import { X } from '@phosphor-icons/react'
import { ButtonProps, ComponentProps, Themes } from '@utils/types'
import { ReactNode, useEffect, useState } from 'react'

interface DrawerProps extends ComponentProps {
  drawerId: string
  triggerCopy: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
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
  direction = 'right',
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
      <div className={`screen ${isOpen ? 'open' : 'closed'}`} />
      <div className={`drawerBox ${direction} ${isOpen ? 'open' : 'closed'}`}>
        <Button
          className="close"
          type="button"
          unstyled
          onClick={() => setIsOpen(false)}
        >
          <X size={30} />
        </Button>

        <div className="body">{children}</div>
      </div>
    </span>
  )
}
