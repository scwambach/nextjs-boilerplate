import React from 'react'
import { render } from '@testing-library/react'
import { CompareTables } from './index'
import { CompareTablesProps } from '@utils/types'

describe('CompareTables component', () => {
  const items: CompareTablesProps['items'] = [
    { _key: '1', heading: 'Basic', items: ['Feature A'] },
    { _key: '2', heading: 'Pro', items: ['Feature A', 'Feature B'] },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(<CompareTables items={items} />)
    expect(container).toBeInTheDocument()
  })

  it('renders a heading when provided', () => {
    const { getByText } = render(
      <CompareTables items={items} heading="Compare Plans" headingLevel={2} />
    )
    expect(getByText('Compare Plans')).toBeInTheDocument()
  })

  it('renders all provided table items', () => {
    const { getByText } = render(<CompareTables items={items} />)
    expect(getByText('Basic')).toBeInTheDocument()
    expect(getByText('Pro')).toBeInTheDocument()
  })

  it('applies a custom className to the wrapper', () => {
    const { container } = render(
      <CompareTables items={items} className="custom-compare" />
    )
    expect(container.firstChild).toHaveClass('compareTables custom-compare')
  })

  it('renders the heading with a semantic heading level for accessibility', () => {
    const { getByText } = render(
      <CompareTables items={items} heading="Compare Plans" headingLevel={2} />
    )
    expect(getByText('Compare Plans').tagName).toBe('H2')
  })
})
