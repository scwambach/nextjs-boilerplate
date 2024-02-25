import { CardProps, PersonProps } from '@utils/types'
import { Button, ImageObject, Avatar, Tag } from '@components/modules'
import { Heading, Markdown, Flex, Box } from '@components/utility'
import dayjs from 'dayjs'

const compileAuthorNames = (authors: PersonProps[]) => {
  const names = authors.map(
    (author) => `${author.firstName} ${author.lastName}`
  )
  const lastName = names.pop()

  if (names.length === 0) {
    return lastName
  }

  if (names.length === 1) {
    return `${names[0]} and ${lastName}`
  }
  return `${names.join(', ')}, and ${lastName}`
}

export const Content = ({
  className,
  title,
  description,
  date,
  authors,
  tags,
  links,
  testId,
  href,
  headingLevel = 3,
  image,
}: CardProps) => {
  return (
    <Box testId={testId} className={className}>
      {tags && (
        <Flex gap="xxs" className="tags" columnBreak="none">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </Flex>
      )}
      {image && (
        <Box overflow className="image">
          <ImageObject {...image} isBackground />
        </Box>
      )}
      <div className="inner">
        <div>
          {date && <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>}
          <Heading level={headingLevel}>{title}</Heading>
          {description && <Markdown className="copy">{description}</Markdown>}
          {authors && (
            <Flex
              gap="xxs"
              columnBreak="md"
              className={`authors${authors.length > 1 ? ' multiple' : ''}`}
              alignItems="center"
            >
              <Flex
                gap="none"
                className={`avatars`}
                alignItems="flex-start"
                columnBreak="none"
              >
                {authors.map((author, index) => (
                  <Flex
                    key={author.firstName + author.lastName + index}
                    gap="none"
                    columnBreak="none"
                    className="author"
                  >
                    <Avatar {...author} size={3} />
                  </Flex>
                ))}
              </Flex>
              {<p className="authorNames">{compileAuthorNames(authors)}</p>}
            </Flex>
          )}
        </div>
        {links && !href && (
          <Flex gap="xxs" className="links">
            {links.map((link, index) => (
              <Button key={index} {...link} />
            ))}
          </Flex>
        )}
      </div>
    </Box>
  )
}

export const Card = (props: CardProps) => {
  return (
    <>
      {props.href ? (
        <Button
          href={props.href}
          unstyled
          type="link"
          className={`card link${props.theme ? ` ${props.theme}` : ''}${props.className ? ` ${props.className}` : ''}`}
        >
          <Content {...props} />
        </Button>
      ) : (
        <Content
          {...props}
          className={`card${props.theme ? ` ${props.theme}` : ''}${props.className ? ` ${props.className}` : ''}`}
        />
      )}
    </>
  )
}
