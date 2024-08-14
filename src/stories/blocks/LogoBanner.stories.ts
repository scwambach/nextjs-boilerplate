import { LogoBanner as LogoBannerItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@images/logoipsum-300.svg'
import Image from '@images/nature.webp'

const meta: Meta<typeof LogoBannerItem> = {
  title: 'Components/Blocks',
  component: LogoBannerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LogoBannerItem>

export const LogoBanner: Story = {
  args: {
    backgroundImage: {
      ...Image,
      alt: 'nature',
    },
    logo: Logo,
    copy: 'This is a logo banner',
  },
}
