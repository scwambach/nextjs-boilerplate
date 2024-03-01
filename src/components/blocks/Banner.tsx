import {
  Avatar,
  Breadcrumbs,
  Button,
  ImageObject,
  Tag,
} from '@components/modules'
import { Box, Container, Flex, Grid, Heading } from '@components/utility'
import { compileAuthorNames } from '@utils/compileAuthorNames'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { BannerProps } from '@utils/types'
import dayjs from 'dayjs'

// TODO: Create Banner tests and stories with updated props

export const Banner = ({
  backgroundImage,
  className,
  heading,
  subheading,
  crumbs,
  bgColor = 'blue',
  tags,
  message,
  foregroundMedia,
  headingLevel = 2,
  links,
  testId,
  style,
  date,
  authors,
}: BannerProps) => {
  const content = (alone: boolean) => (
    <>
      <Flex
        justifyContent={alone ? 'flex-start' : 'center'}
        alignItems={alone ? 'flex-start' : 'center'}
      >
        <div>
          {crumbs && (crumbs.items || crumbs.current) && (
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
        </div>
      </Flex>
      {foregroundMedia && (
        <Flex alignItems="center" justifyContent="center">
          <Box
            overflow
            style={{
              width: '100%',
            }}
          >
            {foregroundMedia}
          </Box>
        </Flex>
      )}
    </>
  )

  return (
    <section
      className={`banner ${bgColor}${className ? ` ${className}` : ''}${
        backgroundImage ? ' has-image' : ''
      }`}
      data-testid={testId}
      style={style}
    >
      {backgroundImage && (
        <ImageObject
          {...backgroundImage}
          isBackground
          testId="banner-image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <Container>
        {foregroundMedia ? (
          <Grid columns={2} gap="lg">
            {content(false)}
          </Grid>
        ) : (
          content(true)
        )}
      </Container>
    </section>
  )
}
