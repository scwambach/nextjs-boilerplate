import { widths } from './../../../sanity/docTypes/common'
import { Banner } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import ForegroundImage from '@images/marketing.png'
import Nature from '@images/nature.webp'

const meta: Meta<typeof Banner> = {
  title: 'Components/Blocks/Banner',
  component: Banner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Banner>

export const Blue: Story = {
  args: {
    markdown: true,
    bgColor: 'primary',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const Green: Story = {
  args: {
    markdown: true,
    bgColor: 'secondary',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/learn-more',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        theme: 'secondary',
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const Orange: Story = {
  args: {
    markdown: true,
    bgColor: 'tertiary',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/learn-more',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        theme: 'tertiary',
        label: 'Learn More',
        href: '/learn-more',
      },
      {
        theme: 'tertiary',
        label: 'Contact Us',
        href: '/contact',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const WidthForeground: Story = {
  args: {
    markdown: true,
    bgColor: 'primary',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    foregroundMedia: {
      _type: 'ImageObject',
      ...ForegroundImage,
    },
  },
}

export const WithImage: Story = {
  args: {
    markdown: true,
    bgColor: 'primary',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      ...Nature,
    },
  },
}

export const AsPost: Story = {
  args: {
    markdown: true,
    bgColor: 'primary',
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    tags: [
      {
        label: 'Tag',
        href: '/tag',
      },
      {
        label: 'Another Tag',
        href: '/another-tag',
        theme: 'secondary',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      ...Nature,
    },
    date: '2021-01-01',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        title: 'CEO',
        image: {
          alt: 'A placeholder image',
          ...Nature,
        },
      },
    ],
  },
}

export const Contained: Story = {
  args: {
    markdown: true,
    bgColor: 'primary',
    contained: true,
    boxRadius: 12,
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      ...Nature,
    },
  },
}

export const CalloutBox: Story = {
  args: {
    markdown: true,
    boxRadius: 12,
    bgColor: 'secondary',
    boxBgColor: 'black',
    contained: true,
    container: 'narrower',
    micro: true,
    heading: 'Quisque iaculis tincidunt',
    message:
      'Donec sed velit sed erat placerat faucibus. Pellentesque placerat neque sapien, ac tristique mauris sollicitudin quis. Quisque est sem, hendrerit eu dignissim id, laoreet in neque. Nunc accumsan ligula ut vulputate viverra. Aliquam gravida nibh ut nunc tempus, ut vehicula.',
    headingLevel: 1,
  },
}
