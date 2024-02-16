import { Card as CardItem } from '@components/modules/Card'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardItem> = {
  title: 'Components/Modules/Card',
  component: CardItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardItem>

export const Links: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    description: 'This is a card with a link',
    links: [
      {
        label: 'Link',
        href: '/link',
      },
      {
        label: 'Another link',
        href: '/another-link',
      },
    ],
  },
}

export const Clickable: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    href: '/clickable',
    description: 'This is a card without a link',
  },
}

export const NoImage: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    description: 'This is a card without an image',
    links: [
      {
        label: 'Link',
        href: '/link',
      },
    ],
  },
}
