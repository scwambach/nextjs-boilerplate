import { Card as CardItem } from '@components/modules'
import type { Meta, StoryObj } from '@storybook/react'
import Image from '@images/nature2.webp'
import Image2 from '@images/nature.webp'

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
      ...Image,
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
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Clickable: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      ...Image,
      alt: 'nature',
    },
    href: '/clickable',
    description: 'This is a card without a link',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
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
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const WithTags: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      ...Image,
      alt: 'nature',
    },
    description: 'This is a card with tags',
    tags: [
      {
        label: 'Tag',
      },
      {
        label: 'Another tag',
        theme: 'secondary',
      },
    ],
    links: [
      {
        label: 'Link',
        href: '/link',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const AsPost: Story = {
  args: {
    title: 'Post',
    theme: 'primary',
    image: {
      ...Image,
      alt: 'nature',
    },
    href: '/post',
    date: '2024-02-29',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        image: {
          ...Image2,
          alt: 'John Doe',
        },
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        image: {
          ...Image2,
          alt: 'Jane Doe',
        },
      },
    ],
    description: 'This is a card with a date',
    tags: [
      {
        label: 'Tag',
      },
      {
        label: 'Another tag',
        theme: 'secondary',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
