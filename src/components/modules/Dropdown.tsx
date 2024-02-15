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
    console.log(hasFocus)
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
  }, [])

  return (
    <div
      ref={ref}
      className={`dropdown${open ? ' open' : ''}${props.className ? ` ${props.className}` : ''}`}
    >
      <Button
        {...props}
        className="toggle"
        onFocus={() => {
          setOpen(true)
        }}
      />
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
