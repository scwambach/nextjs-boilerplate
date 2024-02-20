'use client'
import { Button, Dropdown } from '@components/modules'
import { Flex } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { ButtonTypes, GlobalProps } from '@utils/types'
import { useState } from 'react'

export const Header = ({
  menu,
  title,
}: {
  menu: GlobalProps['navigation']
  title: GlobalProps['siteTitle']
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <div className="container">
        <Flex
          columnBreak="none"
          elementTag="nav"
          justifyContent="space-between"
        >
          <Heading level={1} nonHeadingElement="p">
            {title}
          </Heading>
          <Button
            unstyled
            className={`navToggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
            <div className="srOnly">
              <span>Toggle Menu</span>
            </div>
          </Button>
          <Flex
            elementTag="ul"
            className={`unstyled mainNav${menuOpen ? ' open' : ''} `}
          >
            {menu.map((item) => (
              <li key={item.href}>
                {item.subnav ? (
                  <Dropdown
                    unstyled
                    href={item.href}
                    label={item.label}
                    items={item.subnav}
                  />
                ) : item.href ? (
                  <Button
                    unstyled
                    type={item.type as ButtonTypes}
                    href={item.href}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </Flex>
        </Flex>
      </div>
    </header>
  )
}
