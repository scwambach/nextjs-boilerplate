import { Gallery as GalleryItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image1 from '@images/placeholder1.webp'
import Image2 from '@images/placeholder2.webp'
import Image3 from '@images/placeholder3.webp'
import Image4 from '@images/placeholder4.webp'
import Image5 from '@images/placeholder5.webp'
import Image6 from '@images/placeholder6.webp'
import Image7 from '@images/placeholder7.webp'

const meta: Meta<typeof GalleryItem> = {
  title: 'Components/Blocks',
  component: GalleryItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GalleryItem>

export const Gallery: Story = {
  args: {
    gap: 'xs',
    boxRadius: 8,
    columns: 4,
    heading: 'Gallery',
    subheading:
      "It may look like the images aren't loading when selecting the next arrow but they are. The images are just large and take a moment to load.\n\n__That's because we're using placeholder images from Unsplash.__",
    items: [
      {
        ...Image1,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image2,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image3,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image4,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image5,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image6,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image7,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        ...Image5,
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
    ],
  },
}
