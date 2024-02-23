'use client'
import { useEffect, useState } from 'react'
import { Flex } from '@components/utility'
import { Button } from '@components/modules'
import { ModalProps } from '@utils/types'

export const Modal = ({
  className,
  children,
  buttons,
  triggerCopy,
  open,
  triggerTheme,
  buttonTheme,
  triggerUnstyled,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open || false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [])
  return (
    <span className={`modal${className ? ` ${className}` : ''}`}>
      <Button
        type="button"
        label={triggerCopy}
        theme={triggerTheme}
        unstyled={triggerUnstyled}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        className={`modalBox ${isOpen ? 'open' : 'closed'}`}
      >
        <Flex gap="xxs" className="contentBox" direction="column">
          <div className="body">{children}</div>

          <Flex gap="xxs" className="buttons">
            {buttons?.map((buttons) => (
              <Button key={buttons.label} {...buttons} />
            ))}
            <Button
              theme={buttonTheme}
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Close
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </span>
  )
}
