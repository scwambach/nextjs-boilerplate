import { ImageObject } from '@components/modules'
import { Box as BoxItem } from '@components/utility'
import type { Meta, StoryObj } from '@storybook/react'
import Image1 from '@images/placeholder2.webp'
import Image2 from '@images/placeholder3.webp'
import Image3 from '@images/placeholder4.webp'

const meta: Meta<typeof BoxItem> = {
  title: 'Components/Utility/Box',
  component: BoxItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BoxItem>

export const Default: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject {...Image1} isBackground alt="Dog" />,
  },
}

export const Rounded: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject {...Image2} isBackground alt="Dog" />,
    overflow: true,
    radius: 12,
  },
}

export const Shadow: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject {...Image3} isBackground alt="Dog" />,
    overflow: true,
    radius: 12,
    shadow: 4,
  },
}
