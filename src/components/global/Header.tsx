'use client'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { GlobalProps } from '@utils/types'
import { Box, Container, Flex, Heading } from '@components/utility'
import { Avatar, Button, Dropdown, LinkObject } from '@components/modules'

// deploy

export const Header = ({
  menu,
  title,
}: {
  menu: GlobalProps['navigation']
  title: GlobalProps['siteTitle']
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { data: session } = useSession()
  return (
    <Box elementTag="header" className="header">
      <Container>
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

          <Flex
            elementTag="ul"
            alignItems="center"
            className={`unstyled mainNav${menuOpen ? ' open' : ''} `}
          >
            {menu.map((item) => (
              <li key={item.href}>
                {item.subNav ? (
                  <Dropdown
                    unstyled
                    href={item.href}
                    label={item.label}
                    items={item.subNav}
                  />
                ) : item.href ? (
                  <Button unstyled type={item.type} href={item.href}>
                    {item.label}
                  </Button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </Flex>
          {session ? (
            <>
              {session.user && session.user.name && (
                <Avatar
                  firstName={session.user?.name.split(' ')[0]}
                  lastName={session.user?.name.split(' ')[1]}
                  image={{
                    src: session.user?.image as string,
                    alt: session.user?.name as string,
                  }}
                />
              )}
              <Button onClick={() => signOut()} type="button">
                Sign Out
              </Button>
            </>
          ) : (
            <Button onClick={() => signIn()} type="button">
              Sign In
            </Button>
          )}
          <Button
            unstyled
            type="button"
            className={`navToggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
            <Box className="srOnly">
              <span>Toggle Menu</span>
            </Box>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
