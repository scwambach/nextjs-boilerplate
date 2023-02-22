import { noOrphans } from './noOrphans'
export const highlighter = (string: string): any => {
  const wordArray: string[] = string.split(' ')

  const wordReturn: (string | JSX.Element)[] = wordArray.map((word: string) => {
    const inBrackets: boolean = word.indexOf('[') >= 0
    if (!inBrackets) return word
    const matchedString: string = word.match(/\[\[([^\]]+)\]\]/)![1]
    return `<span class="highlight">${matchedString}</span>`
  })

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: noOrphans(wordReturn.join(' ')),
      }}
    />
  )
}
