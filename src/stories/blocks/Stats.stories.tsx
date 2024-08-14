import { Stats as StatsItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StatsItem> = {
  title: 'Components/Blocks',
  component: StatsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatsItem>

export const Stats: Story = {
  args: {
    heading: 'Stats',
    boxRadius: 12,
    subheading: 'This is a subheading',
    items: [
      {
        value: 100,
        icon: 'Rocket',
        title: 'New Users',
        numberSuffix: 'k',
        theme: 'primary',
        tags: ['+10%', 'from last month'],
      },
      {
        value: 293487209,
        type: 'currency',
        maxValue: 570,
        icon: 'Backpack',
        title: 'Money stuff',
        theme: 'secondary',
        tags: ['+10%', 'from last month'],
      },
      {
        value: 84.34,
        type: 'percentage',
        icon: 'Knife',
        title: 'Something Else',
        theme: 'tertiary',
        tags: ['+10%', 'from last month'],
      },
    ],
  },
}
