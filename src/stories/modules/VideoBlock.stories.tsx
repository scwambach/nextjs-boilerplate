import { VideoBlock as VideoBlockItem } from '@components/modules'
import type { Meta, StoryObj } from '@storybook/react'
import Image from '@images/placeholder1.webp'

const meta: Meta<typeof VideoBlockItem> = {
  title: 'Components/Modules',
  component: VideoBlockItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideoBlockItem>

export const VideoBlock: Story = {
  args: {
    url: 'https://www.youtube.com/embed/7e90gBu4pas',
    title: 'Official Music Video on YouTube',
    copy: 'Watch the official music video for "Nam felis" on YouTube.',
    poster: {
      alt: 'Nam felis',
      ...Image,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}
