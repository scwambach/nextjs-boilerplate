import {
  capitalizeType,
  getBlockId,
  getDerivedBlockProps,
  resolveComponent,
} from './logic'

describe('capitalizeType', () => {
  it('capitalizes the first letter (happy path)', () => {
    expect(capitalizeType('map')).toBe('Map')
  })

  it('leaves an already-capitalized string unchanged (edge case)', () => {
    expect(capitalizeType('Map')).toBe('Map')
  })
})

describe('getBlockId', () => {
  it('combines type and index into a stable id', () => {
    expect(getBlockId('map', 2)).toBe('map_2')
  })
})

describe('resolveComponent', () => {
  it('resolves a module component when blockType is module (happy path)', () => {
    const Component = resolveComponent({ _type: 'button', blockType: 'module' })
    expect(Component).toBeDefined()
  })

  it('resolves a block component when blockType is not module (edge case)', () => {
    const Component = resolveComponent({ _type: 'banner', blockType: 'block' })
    expect(Component).toBeDefined()
  })
})

describe('getDerivedBlockProps', () => {
  it('derives map props for map type (happy path)', () => {
    const props = getDerivedBlockProps({ _type: 'map' }, { phone: '123' })
    expect(props.mapStyle).toBeDefined()
    expect(props.info).toBeUndefined()
  })

  it('derives no map/info props for unrelated types (edge case)', () => {
    const props = getDerivedBlockProps({ _type: 'banner' }, { phone: '123' })
    expect(props.mapStyle).toBeUndefined()
    expect(props.googleMapsApiKey).toBeUndefined()
    expect(props.info).toBeUndefined()
  })

  it('derives contact info for contactBlock type', () => {
    const contact = { phone: '123' }
    const props = getDerivedBlockProps({ _type: 'contactBlock' }, contact)
    expect(props.mapStyle).toBeDefined()
    expect(props.info).toBe(contact)
  })
})
