import { Quote as QuoteItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof QuoteItem> = {
  title: 'Components/Blocks/Quote',
  component: QuoteItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuoteItem>

export const Blue: Story = {
  args: {
    markdown: true,
    bgColor: 'blue',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Green: Story = {
  args: {
    markdown: true,
    bgColor: 'green',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Red: Story = {
  args: {
    markdown: true,
    bgColor: 'red',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Orange: Story = {
  args: {
    markdown: true,
    bgColor: 'orange',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const PersonQuote: Story = {
  args: {
    markdown: true,
    bgColor: 'green',
    cite: 'John Doe',
    person: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Developer',
      company: 'ABC Inc',
      image: {
        query: 'person',
        alt: 'John Doe',
      },
    },
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}
