import React from 'react'
import { render, screen } from '@testing-library/react'
import { PageLayout } from './index'
import { GlobalProps } from '@/utils/types'

// Header/Footer/SkipToMain are rendered for real (each has its own
// dedicated unit tests); PageLayout's own tests focus on composition and
// the landmark structure it is responsible for.
jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: null }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe('PageLayout Component', () => {
  const global: GlobalProps = {
    favicon: '/favicon.ico',
    siteDescription: 'A site',
    siteTitle: 'Acme Co',
    navigation: [],
  }

  it('renders without crashing', () => {
    const { container } = render(
      <PageLayout global={global}>
        <p>Page content</p>
      </PageLayout>
    )
    expect(container).toBeInTheDocument()
  })

  it('reflects the pageClasses prop on the main element', () => {
    const { container } = render(
      <PageLayout global={global} pageClasses="custom-page">
        <p>Page content</p>
      </PageLayout>
    )
    expect(container.querySelector('main')).toHaveClass('custom-page')
  })

  it('renders children within the bodyContent region', () => {
    render(
      <PageLayout global={global}>
        <p>Unique page content</p>
      </PageLayout>
    )
    const content = screen.getByText('Unique page content')
    expect(content.closest('#bodyContent')).toBeInTheDocument()
  })

  // PageLayout is a pure composition component (Header/SkipToMain/children/Footer
  // wrapped in <main>) with no interactive elements of its own, so no
  // interaction test applies here; SkipToMain's own click behavior is
  // covered by its own component tests.

  it('uses a semantic main landmark and exposes a focusable, non-tabbable bodyContent region', () => {
    const { container } = render(
      <PageLayout global={global}>
        <p>Page content</p>
      </PageLayout>
    )
    expect(container.querySelector('main')).toBeInTheDocument()
    const bodyContent = container.querySelector('#bodyContent')
    expect(bodyContent).toHaveAttribute('tabIndex', '-1')
  })
})
