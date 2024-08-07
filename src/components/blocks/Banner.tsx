import { Avatar, Breadcrumbs, Button, ImageObject, Tag } from '../modules'
import { Box, Container, Flex, Grid, Heading, Portable } from '../utility'
import { compileAuthorNames } from '../../utils/compileAuthorNames'
import { parseMarkdownToHTML } from '../../utils/parseMarkdownToHTML'
import { BannerProps } from '../../utils/types'
import dayjs from 'dayjs'
import { VideoBackground } from '@components/modules/VideoBackground'

export const Banner = ({
  authors,
  backgroundVideo,
  backgroundImage,
  bgColor = 'primary',
  boxBgColor = 'white',
  boxRadius,
  className,
  componentId,
  contained,
  container: containedWidth = 'narrow',
  crumbs,
  date,
  foregroundMedia,
  heading,
  headingLevel = 2,
  links,
  markdown,
  message,
  micro,
  overlap,
  style,
  subheading,
  tags,
  testId,
}: BannerProps) => {
  const content = (alone: boolean) => (
    <>
      <Flex
        className={alone ? 'innerContent' : undefined}
        justifyContent={alone ? 'flex-start' : 'center'}
        alignItems={alone ? 'flex-start' : 'center'}
      >
        <Box>
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
            <>
              {markdown ? (
                <p className="subheading">
                  <strong>{subheading as string}</strong>
                </p>
              ) : (
                <Portable content={subheading as any[]} />
              )}
            </>
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
            <Box className="links">
              {links.map((link, index) => (
                <Button key={index} {...link} />
              ))}
            </Box>
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
        </Box>
      </Flex>

      {foregroundMedia && (
        <Flex alignItems="center" justifyContent="center">
          <Box
            overflow
            style={{
              width: '100%',
            }}
          >
            <ImageObject {...foregroundMedia} />
          </Box>
        </Flex>
      )}
    </>
  )

  return (
    <Box
      componentId={componentId}
      className={`banner ${bgColor}${contained && overlap ? ' overlap' : ''}${
        contained ? ' contained' : ''
      }${className ? ` ${className}` : ''}${
        backgroundImage || backgroundVideo ? ' has-image' : ''
      }${contained && micro ? ' micro' : ''}`}
      testId={testId}
      elementTag="section"
      style={style}
    >
      {backgroundVideo && (
        <VideoBackground
          bgColor="black"
          video={backgroundVideo}
          image={backgroundImage}
        />
      )}
      {!contained && backgroundImage && (
        <ImageObject
          {...backgroundImage}
          isBackground
          testId="banner-image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <Container containerClass={contained ? containedWidth : undefined}>
        <Box
          radius={contained ? boxRadius : undefined}
          overflow={contained}
          className={`inner${contained && boxBgColor && !backgroundImage ? ` ${boxBgColor}` : ''}`}
        >
          {contained && backgroundImage && (
            <ImageObject
              {...backgroundImage}
              isBackground
              testId="banner-image"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          )}

          {foregroundMedia ? (
            <Grid columns={2} gap="lg">
              {content(false)}
            </Grid>
          ) : (
            content(true)
          )}
        </Box>
      </Container>
    </Box>
  )
}
