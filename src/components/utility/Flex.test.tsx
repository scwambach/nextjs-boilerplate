import React from 'react'
import { render } from '@testing-library/react'
import { Flex } from './Flex' // Assuming the component file is named 'Flex.tsx'

describe('Flex component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(
      <Flex testId="flex-test">
        <div>Child 1</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement).toBeInTheDocument()
    expect(flexElement.tagName).toBe('DIV') // Assuming the default parentTagName is 'div'
  })

  it('renders with custom props', () => {
    const { getByTestId } = render(
      <Flex
        testId="flex-test"
        className="custom-class"
        columnBreak="lg"
        customLauout="one-third-two-thirds"
        breakpoint="md"
        gap={2}
      >
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement).toBeInTheDocument()
    expect(flexElement.tagName).toBe('DIV')
    expect(flexElement).toHaveClass('flex')
    expect(flexElement).toHaveClass('column-lg')
    expect(flexElement).toHaveClass('one-third-two-thirds')
    expect(flexElement).toHaveClass('break-md')
    expect(flexElement).toHaveStyle('gap: 2rem;')
  })

  it('renders with default parentTagName', () => {
    const { getByTestId } = render(
      <Flex testId="flex-test" parentTagName="section">
        <div>Child 1</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement.tagName).toBe('SECTION')
  })

  // Add more test cases to cover other variations in props and conditional logic
})
