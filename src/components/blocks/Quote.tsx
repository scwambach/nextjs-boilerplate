import { Avatar } from '@components/modules'
import { Container, Flex, Markdown } from '@components/utility'
import { Minus, Quotes } from '@phosphor-icons/react/dist/ssr'
import { headingFont } from '@utils/fonts'
import { Colors, ComponentProps, PersonProps } from '@utils/types'

// TODO: Create Quote tests and stories

interface QuoteProps extends ComponentProps {
  quote: string
  cite?: string
  person?: PersonProps
  bgColor?: Colors
}

export const Quote = ({
  className,
  testId,
  quote,
  cite,
  bgColor = 'green',
  person,
}: QuoteProps) => {
  return (
    <div
      data-testid={testId}
      className={`quote ${bgColor}${className ? ` ${className}` : ''}`}
    >
      <Container containerClass="narrower">
        <Quotes size={40} />
        <blockquote>
          <Markdown>{quote}</Markdown>
        </blockquote>
        {cite && !person && (
          <cite className={headingFont.className}>
            <Minus weight="bold" /> {cite}
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
    </div>
  )
}
