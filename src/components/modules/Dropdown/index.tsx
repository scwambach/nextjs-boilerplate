'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { LinkObject } from '../LinkObject'
import { Flex } from '../../utility'
import { DropdownProps } from '../../../utils/types'
import {
  createItemBlurHandler,
  createKeyDownHandler,
  createOutsideClickHandler,
  handleItemClick,
  handleToggle,
} from './logic'
import './styles.scss'

export const Dropdown = ({ items, ...props }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const menuId = props.componentId ? `${props.componentId}-menu` : 'dropdown-menu'

  useEffect(() => {
    // click anywhere outside the ref to close the dropdown
    const handleClick = createOutsideClickHandler(ref, setOpen)
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      id={props.componentId}
      ref={ref}
      onKeyDown={createKeyDownHandler(setOpen)}
      className={`dropdown${open ? ' open' : ''}${props.className ? ` ${props.className}` : ''}`}
    >
      <Button
        suffixIcon="CaretDown"
        {...props}
        type="button"
        href={undefined}
        className="toggle"
        onClick={handleToggle(open, setOpen)}
        ariaExpanded={open}
        ariaControls={menuId}
      />
      <Flex
        direction="column"
        gap="none"
        className="menu"
        elementTag="ul"
        componentId={menuId}
      >
        {items?.map((item, index) => (
          <li key={item.href + index}>
            <LinkObject
              {...item}
              onClick={handleItemClick(setOpen)}
              onBlur={createItemBlurHandler(ref, setOpen)}
            />
          </li>
        ))}
      </Flex>
    </div>
  )
}
