import { getShareUrl } from './logic'

describe('getShareUrl', () => {
  it('builds a twitter intent URL including the title and post URL', () => {
    const url = getShareUrl('twitter', 'Hello World', 'hello-world')
    expect(url).toContain('twitter.com/intent/tweet')
    expect(url).toContain('text=Hello World')
    expect(url).toContain('sproutyourdesign.com/blog/hello-world')
  })

  it('builds a facebook sharer URL for the post', () => {
    const url = getShareUrl('facebook', 'Hello World', 'hello-world')
    expect(url).toContain('facebook.com/sharer/sharer.php')
    expect(url).toContain('sproutyourdesign.com/blog/hello-world')
  })
})
