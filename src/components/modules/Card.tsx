import {
  ButtonProps,
  ComponentProps,
  HeadingLevel,
  ImageObjectProps,
  PersonProps,
  TagProps,
  Themes,
} from '@utils/types'
import { Button } from './Button'
import { ImageObject } from './ImageObject'
import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'
import { Flex } from '@components/utility'
import dayjs from 'dayjs'
import { Avatar } from './Avatar'
import { Tag } from './Tag'

// TODO: Create new stories and tests for this component's updated features

export interface CardProps extends ComponentProps {
  image?: ImageObjectProps
  title: string
  tags?: TagProps[]
  authors?: PersonProps[]
  date?: string
  description?: string
  theme?: Themes
  href?: string
  headingLevel?: HeadingLevel
  links?: ButtonProps[]
}
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

const Content = ({
  className,
  title,
  description,
  date,
  authors,
  tags,
  links,
  href,
  headingLevel = 3,
  image,
}: CardProps) => {
  return (
    <div className={className}>
      {tags && (
        <Flex gap="xxs" className="tags" columnBreak="none">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </Flex>
      )}
      {image && (
        <div className="image">
          <ImageObject {...image} isBackground />
        </div>
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
    </div>
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
