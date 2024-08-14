import { Events as EventsItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image from '@images/placeholder2.webp'

const meta: Meta<typeof EventsItem> = {
  title: 'Components/Blocks',
  component: EventsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventsItem>

export const Events: Story = {
  args: {
    boxRadius: 4,
    items: [
      {
        date: '2024-02-29',
        title: 'New Year',
        startTime: '14:00',
        endTime: '16:00',
        doorsOpenTime: '4:00 PM',
        location: {
          name: 'The Party Place',
          address: '123 Main St, Anytown, USA',
        },
        poster: {
          ...Image,
          alt: 'New Year Party',
          width: 1200,
          height: 800,
        },
        links: [
          { href: '/new-year', label: 'More Info' },
          { href: '/tickets', label: 'Get Tickets' },
        ],
      },
      {
        date: '2023-12-25',
        title: 'Christmas',
        startTime: '5:00 PM',
        doorsOpenTime: '4:00 PM',
        endTime: '12:00 AM',
        poster: {
          ...Image,
          alt: 'Christmas Party',
          width: 1200,
          height: 800,
        },
        location: {
          name: 'The Party Place',
          address: '123 Main St, Anytown, USA',
        },
        links: [
          { href: '/christmas', label: 'More Info' },
          { href: '/tickets', label: 'Get Tickets' },
        ],
      },
    ],
  },
}
