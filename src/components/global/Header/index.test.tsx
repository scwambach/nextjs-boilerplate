import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './index'
import { GlobalProps } from '@utils/types'

const useSessionMock = jest.fn()

jest.mock('next-auth/react', () => ({
  useSession: () => useSessionMock(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe('Header Component', () => {
  const menu: GlobalProps['navigation'] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]

  const defaultProps = {
    menu,
    title: 'Acme Co',
  }

  beforeEach(() => {
    useSessionMock.mockReturnValue({ data: null })
  })

  it('renders without crashing', () => {
    const { container } = render(<Header {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('reflects the title prop in the site name link', () => {
    render(<Header {...defaultProps} />)
    expect(screen.getAllByText(defaultProps.title)[0]).toBeInTheDocument()
  })

  it('renders a navigation item for each menu entry', () => {
    render(<Header {...defaultProps} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('shows Sign In when there is no session and Sign Out when there is', () => {
    const { rerender } = render(<Header {...defaultProps} />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()

    useSessionMock.mockReturnValue({
      data: { user: { name: 'Jane Doe', image: '/jane.png' } },
    })
    rerender(<Header {...defaultProps} />)
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })

  it('toggles the mobile menu open state when the nav toggle is clicked', () => {
    render(<Header {...defaultProps} />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('associates the nav toggle button with the nav list via aria-controls', () => {
    const { container } = render(<Header {...defaultProps} />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    const controlsId = toggle.getAttribute('aria-controls')
    expect(controlsId).toBeTruthy()
    expect(container.querySelector(`#${controlsId}`)).toBeInTheDocument()
  })

  it('exposes an accessible main navigation landmark', () => {
    render(<Header {...defaultProps} />)
    expect(
      screen.getByRole('navigation', { name: 'Main Navigation' })
    ).toBeInTheDocument()
  })

  it('renders dropdown for menu items with subNav', () => {
    const menuWithSubnav: GlobalProps['navigation'] = [
      {
        label: 'Products',
        href: '/products',
        subNav: [
          { label: 'Product 1', href: '/products/1' },
          { label: 'Product 2', href: '/products/2' },
        ],
      },
    ]

    render(<Header menu={menuWithSubnav} title="Test" />)
    expect(screen.getByText('Products')).toBeInTheDocument()
  })

  it('renders span for menu items without href', () => {
    const menuWithoutHref: GlobalProps['navigation'] = [
      { label: 'No Link' },
    ]

    render(<Header menu={menuWithoutHref} title="Test" />)
    expect(screen.getByText('No Link')).toBeInTheDocument()
  })

  it('handles session with user name and image', () => {
    useSessionMock.mockReturnValue({
      data: {
        user: { name: 'John Doe', image: '/john.png' },
      },
    })

    render(<Header {...defaultProps} />)
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })
})

