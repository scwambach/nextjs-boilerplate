'use client'
import { useEffect, useId, useState } from 'react'
import { Flex } from '../Flex'
import { Button } from '../../modules'
import { ModalProps } from '../../../utils/types'
import { handleToggle, handleEscapeClose } from './logic'
import './styles.scss'

export const Modal = ({
  buttons,
  buttonTheme,
  children,
  className,
  componentId,
  open,
  triggerCopy,
  triggerTheme,
  triggerUnstyled,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open || false)
  const modalId = useId()

  useEffect(() => {
    const closeOnEscape = handleEscapeClose(setIsOpen)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const toggle = handleToggle(setIsOpen, isOpen)

  return (
    <span
      id={componentId}
      className={`modal${className ? ` ${className}` : ''}`}
    >
      <Button
        type="button"
        label={triggerCopy}
        theme={triggerTheme}
        unstyled={triggerUnstyled}
        ariaExpanded={isOpen}
        ariaControls={modalId}
        onClick={toggle}
      />
      <div
        id={modalId}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        className={`modalBox ${isOpen ? 'open' : 'closed'}`}
      >
        <Flex gap="xxs" className="contentBox" direction="column">
          <div className="body">{children}</div>

          <Flex gap="xxs" className="buttons">
            {buttons?.map((buttons) => (
              <Button key={buttons.label} {...buttons} />
            ))}
            <Button theme={buttonTheme} onClick={toggle}>
              Close
            </Button>
          </Flex>
        </Flex>
      </div>
    </span>
  )
}
