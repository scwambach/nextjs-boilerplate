'use client'
import { Button } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Flex } from '@components/utility'
import { IconSelector } from '@components/utility/IconSelector'
import { BlockProps, Themes } from '@utils/types'
import { useState } from 'react'

export interface TabsProps extends BlockProps {
  items: {
    label: string
    content: React.ReactNode
  }[]
  theme?: Themes
}

export const Tabs = ({
  className,
  heading,
  level,
  theme = 'primary',
  subheading,
  items,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className={`tabs${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}

      <Button
        className={`toggle ${theme}${menuOpen ? ' open' : ''}`}
        unstyled
        style={{ width: '100%' }}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <Flex
          columnBreak="none"
          gap="none"
          justifyContent="space-between"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <Flex columnBreak="none" gap="xxs" alignItems="center">
            <IconSelector icon="List" size={22} />
            <span>{items[activeTab].label}</span>
          </Flex>
          <IconSelector className="indicator" icon="CaretDown" size={22} />
        </Flex>
      </Button>
      <Flex
        elementTag="ul"
        className={`unstyled${menuOpen ? ' open' : ''}`}
        gap="micro"
      >
        {items.map((item, index) => (
          <li key={index} className="tabs__item">
            <Button
              theme={theme}
              onClick={() => {
                setActiveTab(index)
                setMenuOpen(false)
              }}
              className={activeTab === index ? 'active' : ''}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </Flex>
      <div className="panel">{items[activeTab].content}</div>
    </div>
  )
}
