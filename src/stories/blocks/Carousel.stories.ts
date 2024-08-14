import { Carousel as CarouselItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image from '@images/placeholder1.webp'

const meta: Meta<typeof CarouselItem> = {
  title: 'Components/Blocks',
  component: CarouselItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CarouselItem>

export const Carousel: Story = {
  args: {
    items: [
      {
        heading: 'Card 1',
        bgColor: 'primary',
        message: 'This is a card',
      },
      {
        heading: 'Card 2',
        bgColor: 'secondary',
        message: 'This is a card',
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
        heading: 'Card 3',
        bgColor: 'quaternary',
        message: 'This is a card',
      },
      {
        heading: 'Card 4',
        backgroundImage: {
          ...Image,
          alt: 'Placeholder image',
        },
        message: 'This is a card',
      },
    ],
  },
}
