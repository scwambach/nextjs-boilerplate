'use client'
import { ButtonProps, LinkObjectProps } from '@utils/types'
import { Button } from './Button'
import { useEffect, useRef, useState } from 'react'
import { LinkObject } from './LinkObject'
import { Flex } from '@components/utility'

interface DropdownProps extends ButtonProps {
  items?: LinkObjectProps[]
}

export const Dropdown = ({ items, ...props }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const [hasTouch, setHasTouch] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const doAnyListItemsHaveFocus = () => {
    if (!ref.current) {
      return false
    }
    const listItems = ref.current.querySelectorAll('.menu .linkObject')
    let hasFocus = false
    listItems.forEach((item) => {
      if (item === document.activeElement) {
        hasFocus = true
      }
    })
    return hasFocus
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', () => {
        setOpen(true)
      })

      ref.current.addEventListener('mouseleave', () => {
        setOpen(false)
      })
    }

    // detect window
    if (typeof window !== 'undefined') {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints
      setHasTouch(hasTouch as boolean)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`dropdown${
        hasTouch ? ' touch' : ''
      }${open ? ' open' : ''}${props.className ? ` ${props.className}` : ''}`}
    >
      <Button
        suffixIcon="CaretDown"
        {...props}
        type={props.href ? 'link' : 'button'}
        className="toggle"
        onFocus={() => {
          setOpen(true)
        }}
      />

      <Button
        suffixIcon={open ? 'Minus' : 'Plus'}
        {...props}
        type={props.href ? 'link' : 'button'}
        className="mobileToggle"
      />
      <button
        className="toggleScreen"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>

      <Flex direction="column" gap="none" className="menu">
        {items?.map((item, index) => (
          <LinkObject
            key={item.href + index}
            {...item}
            onClick={() => {
              setOpen(false)
            }}
            onBlur={() => {
              setTimeout(() => {
                doAnyListItemsHaveFocus() ? setOpen(true) : setOpen(false)
              }, 10)
            }}
          />
        ))}
      </Flex>
    </div>
  )
}
