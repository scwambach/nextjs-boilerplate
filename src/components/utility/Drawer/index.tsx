'use client'
import { Button } from '../../modules'
import { X } from '@phosphor-icons/react'
import { DrawerProps } from '../../../utils/types'
import { useEffect, useId, useState } from 'react'
import { handleClose, handleEscapeClose, handleToggle } from './logic'
import './styles.scss'

export const Drawer = ({
  children,
  className,
  componentId,
  direction = 'right',
  open,
  triggerCopy,
  triggerTheme,
  triggerUnstyled,
}: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open || false)
  const drawerId = useId()

  useEffect(() => {
    const closeOnEscape = handleEscapeClose(setIsOpen)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <span
      id={componentId}
      className={`drawer${className ? ` ${className}` : ''}`}
    >
      <Button
        type="button"
        label={triggerCopy}
        theme={triggerTheme}
        unstyled={triggerUnstyled}
        ariaExpanded={isOpen}
        ariaControls={drawerId}
        onClick={handleToggle(setIsOpen, isOpen)}
      />
      <div
        className={`screen ${isOpen ? 'open' : 'closed'}`}
        aria-hidden="true"
      />
      <div
        id={drawerId}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`drawerBox ${direction} ${isOpen ? 'open' : 'closed'}`}
      >
        <Button
          className="close"
          type="button"
          unstyled
          ariaLabel="Close"
          onClick={handleClose(setIsOpen)}
        >
          <X size={30} aria-hidden="true" />
        </Button>

        <div className="body">{children}</div>
      </div>
    </span>
  )
}
