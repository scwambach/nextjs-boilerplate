import { People as PeopleItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image1 from '@images/placeholder1.webp'
import Image2 from '@images/placeholder2.webp'
import Image3 from '@images/placeholder3.webp'
import Image4 from '@images/placeholder4.webp'
import Image5 from '@images/placeholder5.webp'
import Image6 from '@images/placeholder6.webp'

const meta: Meta<typeof PeopleItem> = {
  title: 'Components/Blocks',
  component: PeopleItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PeopleItem>

export const People: Story = {
  args: {
    columns: 4,
    gap: 'xs',
    boxRadius: 8,
    items: [
      {
        firstName: 'John',
        lastName: 'Doe',
        title: 'CEO',
        image: {
          ...Image1,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'CTO',
        image: {
          ...Image2,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        title: 'CFO',
        image: {
          ...Image3,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        title: 'COO',
        image: {
          ...Image4,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'John',
        lastName: 'Johnson',
        title: 'CIO',
        image: {
          ...Image5,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Johnson',
        title: 'CMO',
        image: {
          ...Image6,
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
    ],
  },
}
