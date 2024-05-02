import { Avatar } from '@components/modules'
import { Container, Flex, Markdown } from '@components/utility'
import { Minus, Quotes } from '@phosphor-icons/react/dist/ssr'
import { headingFont } from '@utils/fonts'
import { QuoteProps } from '@utils/types'

export const Quote = (props: QuoteProps) => {
  const {
    bgColor = 'green',
    cite,
    className,
    componentId,
    person,
    quote,
    testId,
    markdown,
  } = props
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`quote ${bgColor}${className ? ` ${className}` : ''}`}
    >
      <Container containerClass="narrower">
        <Quotes size={40} />

        <blockquote>
          {markdown ? <Markdown>{quote as string}</Markdown> : <p>{quote}</p>}
        </blockquote>
        {cite && !person && (
          <cite className={headingFont.className}>
            <Minus weight="bold" size={16} /> {cite}
          </cite>
        )}
        {person && (
          <Flex elementTag="cite" alignItems="center" justifyContent="center">
            <Flex gap="xxs" alignItems="center">
              <Avatar {...person} />
              <Flex direction="column" justifyContent="flex-start" gap="micro">
                {person.firstName} {person.lastName}
                {person.title && (
                  <>
                    <span>
                      {person.title}{' '}
                      {person.company && (
                        <>
                          <span> @ {person.company}</span>
                        </>
                      )}
                    </span>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        )}
      </Container>
    </section>
  )
}
