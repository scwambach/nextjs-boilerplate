import {
  getChoiceId,
  getFieldId,
  getGroupId,
  handleIndicatorBlur,
  handleIndicatorFocus,
  handleMultiSelectFocus,
  handleMultiSelectBlur,
} from './logic'

describe('getFieldId', () => {
  it('slugifies the label and appends the id', () => {
    expect(getFieldId('Email Address', '123')).toBe('email-address_123')
  })

  it('falls back to "input" when there is no label', () => {
    expect(getFieldId(undefined, '123')).toBe('input_123')
  })
})

describe('getGroupId', () => {
  it('namespaces the group id by field type', () => {
    expect(getGroupId('checkbox', 'Pick one', 'abc')).toBe(
      'checkbox_pick-one_abc'
    )
    expect(getGroupId('radio', 'Pick one', 'abc')).toBe('radio_pick-one_abc')
  })
})

describe('getChoiceId', () => {
  it('builds a unique id per choice', () => {
    expect(getChoiceId('radio', 'Yes', '1')).toBe('radio_yes_1')
  })

  it('handles an undefined type gracefully', () => {
    expect(getChoiceId(undefined, 'Yes', '1')).toBe('undefined_yes_1')
  })
})

describe('handleIndicatorFocus / handleIndicatorBlur', () => {
  it('adds the focused class to the parent element on focus', () => {
    const parent = document.createElement('label')
    const input = document.createElement('input')
    parent.appendChild(input)
    handleIndicatorFocus({
      target: input,
    } as unknown as React.FocusEvent<HTMLInputElement>)
    expect(parent.classList.contains('focused')).toBe(true)
  })

  it('removes the focused class from the parent element on blur', () => {
    const parent = document.createElement('label')
    parent.classList.add('focused')
    const input = document.createElement('input')
    parent.appendChild(input)
    handleIndicatorBlur({
      target: input,
    } as unknown as React.FocusEvent<HTMLInputElement>)
    expect(parent.classList.contains('focused')).toBe(false)
  })
})

describe('handleMultiSelectFocus / handleMultiSelectBlur', () => {
  it('adds focused class to the multi-select wrapper on focus', () => {
    const greatGrandParent = document.createElement('div')
    const grandParent = document.createElement('div')
    const parent = document.createElement('div')
    const container = document.createElement('div')
    const input = document.createElement('input')
    
    container.appendChild(input)
    parent.appendChild(container)
    grandParent.appendChild(parent)
    greatGrandParent.appendChild(grandParent)
    
    handleMultiSelectFocus({
      target: input,
    } as unknown as React.FocusEvent<HTMLInputElement>)
    
    expect(greatGrandParent.classList.contains('focused')).toBe(true)
  })

  it('removes focused class from the multi-select wrapper on blur', () => {
    const greatGrandParent = document.createElement('div')
    const grandParent = document.createElement('div')
    const parent = document.createElement('div')
    const container = document.createElement('div')
    const input = document.createElement('input')
    
    greatGrandParent.classList.add('focused')
    container.appendChild(input)
    parent.appendChild(container)
    grandParent.appendChild(parent)
    greatGrandParent.appendChild(grandParent)
    
    handleMultiSelectBlur({
      target: input,
    } as unknown as React.FocusEvent<HTMLInputElement>)
    
    expect(greatGrandParent.classList.contains('focused')).toBe(false)
  })
})
