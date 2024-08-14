import siteImage from '../images/placeholder1.webp'
import logo from '../images/logoipsum-300.svg'
import { GlobalProps } from '@utils/types'

export const globalData = {
  favicon: 'favicon.ico',
  siteDescription:
    'A Gatsby starter for creating a blog site using Contentful as a headless CMS.',
  siteTitle: 'Gatsby Contentful Blog Starter',
  siteImage,
  logo,
  footerCopy: '© 2021 Gatsby Contentful Blog Starter',
  navigation: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
} as GlobalProps
