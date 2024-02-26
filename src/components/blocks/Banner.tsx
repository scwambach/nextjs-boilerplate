import {
  Avatar,
  Breadcrumbs,
  Button,
  ImageObject,
  Tag,
} from '@components/modules'
import { Container, Flex, Heading } from '@components/utility'
import { compileAuthorNames } from '@utils/compileAuthorNames'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { BannerProps } from '@utils/types'
import dayjs from 'dayjs'

// TODO: Create Banner tests and stories with updated props

export const Banner = ({
  img,
  className,
  heading,
  subheading,
  crumbs,
  bgColor = 'blue',
  tags,
  message,
  headingLevel = 2,
  links,
  testId,
  style,
  date,
  authors,
}: BannerProps) => {
  return (
    <div
      className={`banner ${bgColor}${className ? ` ${className}` : ''}${
        img ? ' has-image' : ''
      }`}
      data-testid={testId}
      style={style}
    >
      {img && (
        <ImageObject
          {...img}
          isBackground
          testId="banner-image"
          className="banner__image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <Container>
        {crumbs && crumbs.items && (
          <Breadcrumbs current={crumbs.current} crumbs={crumbs.items} />
        )}
        {tags && tags.length > 0 && (
          <Flex columnBreak="none" gap="xxs" className="tags">
            {tags.map((tag, index) => (
              <Tag key={tag.label + index} {...tag} />
            ))}
          </Flex>
        )}
        {date && <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>}

        <Heading testId="banner-heading" level={headingLevel}>
          {heading}
        </Heading>
        {subheading && (
          <p>
            <strong>{subheading}</strong>
          </p>
        )}
        {message && (
          <div
            data-testid="banner-message"
            dangerouslySetInnerHTML={{
              __html: parseMarkdownToHTML(message),
            }}
          />
        )}
        {links && (
          <div className="links">
            {links.map((link, index) => (
              <Button key={index} {...link} />
            ))}
          </div>
        )}
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
      </Container>
    </div>
  )
}
