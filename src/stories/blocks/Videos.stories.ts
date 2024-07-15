import { Videos as VideosItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image1 from '@images/placeholder2.webp'
import Image2 from '@images/placeholder3.webp'
import Image3 from '@images/placeholder4.webp'

const meta: Meta<typeof VideosItem> = {
  title: 'Components/Blocks',
  component: VideosItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideosItem>

export const Videos: Story = {
  args: {
    heading: 'Videos',
    subheading: 'Check out our latest videos',
    boxRadius: 12,
    items: [
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          ...Image1,
        },
      },
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          ...Image2,
        },
      },
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          ...Image3,
        },
      },
    ],
  },
}
