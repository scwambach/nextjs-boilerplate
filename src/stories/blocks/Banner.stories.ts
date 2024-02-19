import { Banner } from '@components/blocks/Banner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Banner> = {
  title: 'Components/Blocks/Banner',
  component: Banner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Banner>

export const Blue: Story = {
  args: {
    bgColor: 'blue',
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
    bgColor: 'green',
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
    bgColor: 'orange',
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

export const WithImage: Story = {
  args: {
    bgColor: 'blue',
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
    img: {
      alt: 'A placeholder image',
      query: 'nature',
    },
  },
}