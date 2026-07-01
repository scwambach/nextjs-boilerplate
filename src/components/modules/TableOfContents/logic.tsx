import { HeadingItem } from '../../../utils/types'

/**
 * Reads all heading elements within the target container and converts
 * them into the flat list of { id, text, index } items the table of
 * contents renders links for.
 */
export const collectHeadings = (targetId: string): HeadingItem[] => {
  const target = document.getElementById(targetId)
  const headings = target?.querySelectorAll('h1, h2, h3, h4, h5, h6')

  const headingsArray: HeadingItem[] = []
  headings?.forEach((heading, index) => {
    headingsArray.push({
      id: heading.id,
      text: `${heading.textContent}`,
      index,
    })
  })
  return headingsArray
}

/**
 * Intercepts the in-page anchor click and smooth-scrolls to the target
 * heading instead of relying on the browser's default (instant) jump.
 */
export const handleClickedLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const target = document.getElementById(
    `${e.currentTarget.getAttribute('href')?.replace('#', '')}`
  )
  target?.scrollIntoView({ behavior: 'smooth' })
}
