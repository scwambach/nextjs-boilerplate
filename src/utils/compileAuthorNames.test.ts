import { compileAuthorNames } from './compileAuthorNames'
import { PersonProps } from './types'

describe('compileAuthorNames', () => {
  it('returns single author name', () => {
    const authors: PersonProps[] = [
      {
        _id: '1',
        _type: 'person',
        firstName: 'John',
        lastName: 'Doe',
      } as PersonProps,
    ]
    expect(compileAuthorNames(authors)).toBe('John Doe')
  })

  it('returns two author names with "and"', () => {
    const authors: PersonProps[] = [
      {
        _id: '1',
        _type: 'person',
        firstName: 'John',
        lastName: 'Doe',
      } as PersonProps,
      {
        _id: '2',
        _type: 'person',
        firstName: 'Jane',
        lastName: 'Smith',
      } as PersonProps,
    ]
    expect(compileAuthorNames(authors)).toBe('John Doe and Jane Smith')
  })

  it('returns three author names with commas and "and"', () => {
    const authors: PersonProps[] = [
      {
        _id: '1',
        _type: 'person',
        firstName: 'John',
        lastName: 'Doe',
      } as PersonProps,
      {
        _id: '2',
        _type: 'person',
        firstName: 'Jane',
        lastName: 'Smith',
      } as PersonProps,
      {
        _id: '3',
        _type: 'person',
        firstName: 'Bob',
        lastName: 'Johnson',
      } as PersonProps,
    ]
    expect(compileAuthorNames(authors)).toBe(
      'John Doe, Jane Smith, and Bob Johnson'
    )
  })

  it('returns multiple author names with proper formatting', () => {
    const authors: PersonProps[] = [
      {
        _id: '1',
        _type: 'person',
        firstName: 'Alice',
        lastName: 'Williams',
      } as PersonProps,
      {
        _id: '2',
        _type: 'person',
        firstName: 'Bob',
        lastName: 'Brown',
      } as PersonProps,
      {
        _id: '3',
        _type: 'person',
        firstName: 'Charlie',
        lastName: 'Davis',
      } as PersonProps,
      {
        _id: '4',
        _type: 'person',
        firstName: 'Diana',
        lastName: 'Miller',
      } as PersonProps,
    ]
    expect(compileAuthorNames(authors)).toBe(
      'Alice Williams, Bob Brown, Charlie Davis, and Diana Miller'
    )
  })
})
