import { Header as HeaderItem } from '@components/global'
import type { Meta, StoryObj } from '@storybook/react'
import { GlobalProps } from '@utils/types'
import { SessionProvider } from 'next-auth/react'

const meta: Meta<typeof HeaderItem> = {
  title: 'Components/Global',
  component: HeaderItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeaderItem>

export const Header: Story = {
  args: {
    title: 'Next.js Starter Boilerplate',
    menu: [
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
