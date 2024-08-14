import siteImage from '../images/placeholder1.webp'
import logo from '../images/logoipsum-300.svg'
import { GlobalProps } from '@utils/types'

export const globalData = {
  favicon: logo.src,
  siteDescription:
    'A starter template to build amazing static websites with Next.js and TypeScript.',
  siteTitle: 'Next.js Basic Starter',
  siteImage,
  logo,
  // footerCopy: 'This is the footer',
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
      label: 'Contact',
      href: '/contact',
    },
  ],
} as GlobalProps
