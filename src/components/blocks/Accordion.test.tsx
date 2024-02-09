import { render, fireEvent } from '@testing-library/react'
import { Accordion } from './Accordion'

describe('Accordion component', () => {
  it('renders with heading', () => {
    const heading = 'Accordion Heading'

    const { getByText, queryByText } = render(
      <Accordion heading={heading}>
        <p>Accordion Content</p>
      </Accordion>
    )

    const summaryElement = getByText(heading)
    expect(summaryElement).toBeInTheDocument()

    const contentElement = queryByText('Accordion Content')
    expect(contentElement).not.toBeVisible()

    fireEvent.click(summaryElement)

    expect(queryByText('Accordion Content')).toBeInTheDocument()

    fireEvent.click(summaryElement)

    expect(queryByText('Accordion Content')).not.toBeVisible()
  })
})
