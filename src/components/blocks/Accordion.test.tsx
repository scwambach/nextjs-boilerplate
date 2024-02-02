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

    // Initially, content should be hidden
    const contentElement = queryByText('Accordion Content')
    expect(contentElement).not.toBeVisible()

    // Click on the summary to toggle visibility
    fireEvent.click(summaryElement)

    // After clicking, content should become visible
    expect(queryByText('Accordion Content')).toBeInTheDocument()

    // Click again to hide the content
    fireEvent.click(summaryElement)

    // After clicking again, content should become hidden
    expect(queryByText('Accordion Content')).not.toBeVisible()
  })
})
