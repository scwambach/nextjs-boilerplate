import { collectHeadings, handleClickedLink } from './logic'

describe('collectHeadings', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('collects all headings within the target element in order', () => {
    document.body.innerHTML = `
      <div id="content">
        <h2 id="a">First</h2>
        <h3 id="b">Second</h3>
      </div>
    `
    const result = collectHeadings('content')
    expect(result).toEqual([
      { id: 'a', text: 'First', index: 0 },
      { id: 'b', text: 'Second', index: 1 },
    ])
  })

  it('returns an empty array when the target does not exist', () => {
    expect(collectHeadings('missing')).toEqual([])
  })
})

describe('handleClickedLink', () => {
  it('prevents default navigation and smooth-scrolls to the target', () => {
    document.body.innerHTML = '<h2 id="target">Target</h2>'
    const targetEl = document.getElementById('target') as HTMLElement
    targetEl.scrollIntoView = jest.fn()

    const preventDefault = jest.fn()
    const event = {
      preventDefault,
      currentTarget: { getAttribute: () => '#target' },
    } as unknown as React.MouseEvent<HTMLAnchorElement>

    handleClickedLink(event)

    expect(preventDefault).toHaveBeenCalled()
    expect(targetEl.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
