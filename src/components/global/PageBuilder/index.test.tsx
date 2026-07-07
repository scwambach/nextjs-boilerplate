import React from 'react'
import { render, screen } from '@testing-library/react'
import { PageBuilder } from './index'
import { GlobalProps } from '@/utils/types'

jest.mock('../../utility/BlockFactory', () => ({
  BlockFactory: ({ items }: { items: unknown[] }) => (
    <div data-testid="block-factory">{items?.length ?? 0} blocks</div>
  ),
}))

jest.mock('../PageLayout', () => ({
  PageLayout: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-layout">{children}</div>
  ),
}))

describe('PageBuilder Component', () => {
  const globalData: GlobalProps = {
    favicon: '/favicon.ico',
    siteDescription: 'A site',
    siteTitle: 'Acme Co',
    navigation: [],
  }

  it('renders without crashing', () => {
    const { container } = render(
      <PageBuilder pageData={{ pageComponents: [] }} globalData={globalData} />
    )
    expect(container).toBeInTheDocument()
  })

  it('reflects the pageData prop by passing pageComponents through to BlockFactory', () => {
    render(
      <PageBuilder
        pageData={{ pageComponents: [{ _type: 'hero' }, { _type: 'cta' }] }}
        globalData={globalData}
      />
    )
    expect(screen.getByTestId('block-factory')).toHaveTextContent('2 blocks')
  })

  // PageBuilder is a pure composition component (dispatches CMS blocks via
  // PageLayout + BlockFactory) with no interactive elements or own
  // className/wrapping element, so no interaction test applies.

  it('delegates layout landmarks to PageLayout, which owns the accessible structure', () => {
    render(
      <PageBuilder pageData={{ pageComponents: [] }} globalData={globalData} />
    )
    expect(screen.getByTestId('page-layout')).toBeInTheDocument()
  })
})
