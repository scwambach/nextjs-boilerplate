import { Quote as QuoteItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image from '@images/placeholder1.webp'

const meta: Meta<typeof QuoteItem> = {
  title: 'Components/Blocks/Quote',
  component: QuoteItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuoteItem>

export const Primary: Story = {
  args: {
    bgColor: 'primary',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Secondary: Story = {
  args: {
    bgColor: 'secondary',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Quaternary: Story = {
  args: {
    bgColor: 'quaternary',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Tertiary: Story = {
  args: {
    bgColor: 'tertiary',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const PersonQuote: Story = {
  args: {
    bgColor: 'secondary',
    cite: 'John Doe',
    person: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Developer',
      company: 'ABC Inc',
      image: {
        ...Image,
        alt: 'John Doe',
      },
    },
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}
