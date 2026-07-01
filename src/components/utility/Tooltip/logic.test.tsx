import { resolveTooltipId } from './logic'

describe('resolveTooltipId', () => {
  it('derives a stable id from componentId when provided (happy path)', () => {
    expect(resolveTooltipId('my-tooltip', 'react-generated-id')).toBe(
      'my-tooltip-tooltip'
    )
  })

  it('falls back to the generated id when componentId is undefined (edge case)', () => {
    expect(resolveTooltipId(undefined, 'react-generated-id')).toBe(
      'react-generated-id'
    )
  })
})
