import { Banner } from '@components/blocks'
import { PageLayout as PageLayoutItem } from '@components/global/PageLayout'
import type { Meta, StoryObj } from '@storybook/react'
import { GlobalProps } from '@utils/types'
import { SessionProvider } from 'next-auth/react'

const meta: Meta<typeof PageLayoutItem> = {
  title: 'Components/Global',
  component: PageLayoutItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageLayoutItem>

export const PageLayout: Story = {
  args: {
    children: <Banner heading="Placeholder content" />,
    global: {
      siteTitle: 'Next.js Starter Boilerplate',
      siteDescription: 'A starter boilerplate for Next.js',
      siteImage: {
        src: '/site-image.jpg',
        alt: 'Site image',
      },
      favicon: '/favicon.ico',
      navigation: [
        {
          label: 'Home',
          href: '/',
          type: 'link',
        },
        {
          label: 'About',
          type: 'button',
          href: '/about',
          subnav: [
            {
              copy: 'Our Team',
              href: '/about/team',
            },
            {
              copy: 'Our Mission',
              href: '/about/mission',
            },
          ],
        },
        {
          label: 'Blog',
          href: '/blog',
          type: 'link',
        },
      ] as GlobalProps['navigation'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <SessionProvider>
          <Story />
        </SessionProvider>
      )
    },
  ],
}
