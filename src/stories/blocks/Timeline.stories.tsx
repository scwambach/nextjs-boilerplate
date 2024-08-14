import { Timeline as TimelineItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import Image1 from '@images/placeholder1.webp'
import Image2 from '@images/placeholder2.webp'
import Image3 from '@images/placeholder3.webp'
import Image4 from '@images/placeholder4.webp'
import Image5 from '@images/placeholder5.webp'
import Image6 from '@images/placeholder6.webp'

const meta: Meta<typeof TimelineItem> = {
  title: 'Components/Blocks',
  component: TimelineItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TimelineItem>

export const Timeline: Story = {
  args: {
    boxRadius: 12,
    events: [
      {
        date: '2019-01-01',
        title: 'First Event',
        description: 'This is the first event on the timeline.',
        image: {
          ...Image1,
          alt: 'Placeholder Image',
          width: 1400,
          height: 500,
        },
      },
      {
        date: '2019-01-02',
        title: 'Second Event',
        description: 'This is the second event on the timeline.',
      },
      {
        date: '2019-01-03',
        title: 'Third Event',
        description: 'This is the third event on the timeline.',
      },
      {
        date: '2019-01-04',
        title: 'Fourth Event',
        description: 'This is the fourth event on the timeline.',
        image: {
          ...Image2,
          alt: 'Placeholder Image',
          width: 500,
          height: 600,
        },
      },
      {
        date: '2019-01-05',
        title: 'Fifth Event',
        description: 'This is the fifth event on the timeline.',
        image: {
          ...Image3,
          alt: 'Placeholder Image',
          width: 500,
          height: 700,
        },
      },
      {
        date: '2019-01-06',
        title: 'Sixth Event',
        description: 'This is the sixth event on the timeline.',
        image: {
          ...Image4,
          alt: 'Placeholder Image',
          width: 742,
          height: 494,
        },
      },
      {
        date: '2018-01-07',
        title: 'Seventh Event',
        description: 'This is the seventh event on the timeline.',
      },
      {
        date: '2018-01-08',
        title: 'Eighth Event',
        description: 'This is the eighth event on the timeline.',
        image: {
          ...Image5,
          alt: 'Placeholder Image',
          width: 900,
          height: 500,
        },
      },
      {
        date: '2017-01-09',
        title: 'Ninth Event',
        description: 'This is the ninth event on the timeline.',
      },
      {
        date: '2016-01-10',
        title: 'Tenth Event',
        description: 'This is the tenth event on the timeline.',
        image: {
          ...Image6,
          alt: 'Placeholder Image',
          width: 500,
          height: 900,
        },
      },
    ],
  },
}
