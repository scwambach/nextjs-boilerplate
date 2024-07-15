'use client'
import { Button } from '../modules'
import { SectionHeading } from '../modules'
import { Box, Container, Flex } from '../utility'
import { IconSelector } from '../utility'
import { TabsProps } from '../../utils/types'
import { useState } from 'react'

export const Tabs = ({
  boxRadius,
  className,
  componentId,
  container,
  heading,
  items,
  headingLevel,
  subheading,
  testId,
  theme = 'primary',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Box
      elementTag="section"
      componentId={componentId}
      testId={testId}
      className={`tabs${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
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
            <li key={index} className="item">
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
        <Box shadow={2} className="panel" radius={boxRadius}>
          {items[activeTab].content}
        </Box>
      </Container>
    </Box>
  )
}
