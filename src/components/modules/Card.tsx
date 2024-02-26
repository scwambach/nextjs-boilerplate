'use client'
import { CardProps, PersonProps } from '@utils/types'
import {
  Button,
  ImageObject,
  Avatar,
  Tag,
  LinkObject,
} from '@components/modules'
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

export const Card = ({
  authors,
  className,
  date,
  description,
  headingLevel = 2,
  href,
  image,
  links,
  tags,
  title,
  testId,
}: CardProps) => {
  return (
    <Box
      testId={testId}
      className={`card${href ? ' link' : ''}${className ? ` ${className}` : ''}`}
    >
      {tags && (
        <Flex gap="xxs" className="tags" columnBreak="none">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </Flex>
      )}
      {image && href && (
        <Box overflow className="image">
          <LinkObject href={href}>
            <ImageObject {...image} isBackground />
          </LinkObject>
        </Box>
      )}
      {image && !href && (
        <Box overflow className="image">
          <ImageObject {...image} isBackground />
        </Box>
      )}
      <div className="inner">
        <div>
          {date && <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>}
          {href ? (
            <Heading level={headingLevel}>
              <LinkObject href={href}>{title}</LinkObject>
            </Heading>
          ) : (
            <Heading level={headingLevel}>{title}</Heading>
          )}

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
