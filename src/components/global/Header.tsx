'use client'
import { Button, Dropdown, LinkObject } from '@components/modules'
import { Flex, Heading } from '@components/utility'
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
          ariaLabel="Main Navigation"
          columnBreak="none"
          role="navigation"
          elementTag="nav"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading level={1} nonHeadingElement="p">
            <LinkObject href="/" ariaLabel={title}>
              {title}
            </LinkObject>
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
