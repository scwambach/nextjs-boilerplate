import { Cards as CardsItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Nature from '@images/nature2.webp'

const meta: Meta<typeof CardsItem> = {
  title: 'Components/Blocks/Cards',
  component: CardsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardsItem>

export const Standard: Story = {
  args: {
    heading: 'Cards',
    subheading: 'This is a subheading',
    columns: 4,
    gap: 'xs',
    items: [
      {
        title: 'Card 1',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        links: [
          {
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
      {
        title: 'Card 2',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        links: [
          {
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
      {
        title: 'Card 3',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        links: [
          {
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
      {
        title: 'Card 4',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        links: [
          {
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
    ],
  },
}

export const Clickable: Story = {
  args: {
    heading: 'Clickable cards',
    subheading: 'This is a subheading',
    columns: 4,
    gap: 'xs',
    items: [
      {
        title: 'Card 1',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        href: '/',
      },
      {
        title: 'Card 2',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        href: '/',
      },
      {
        title: 'Card 3',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        href: '/',
      },
      {
        title: 'Card 4',
        description: 'This is a card',
        image: {
          ...Nature,
          alt: 'Placeholder image',
        },
        href: '/',
      },
    ],
  },
}
