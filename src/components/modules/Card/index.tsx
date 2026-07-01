'use client'
import dayjs from 'dayjs'
import { CardProps } from '../../../utils/types'
import { Button } from '../Button'
import { ImageObject } from '../ImageObject'
import { Avatar } from '../Avatar'
import { Tag } from '../Tag'
import { LinkObject } from '../LinkObject'
import { Heading, Markdown, Flex, Box, IconSelector, Spacer } from '../../utility'
import { compileAuthorNames } from '../../../utils/compileAuthorNames'
import { getInnerImageRadius } from './logic'
import './styles.scss'

export const Card = ({
  authors,
  boxRadius,
  className,
  componentId,
  date,
  description,
  href,
  icon,
  image,
  links,
  markdown,
  tags,
  testId,
  title,
}: CardProps) => {
  const rounded = getInnerImageRadius(boxRadius)
  return (
    <Box
      componentId={componentId}
      testId={testId}
      radius={boxRadius}
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
        <Box overflow className="image" radius={rounded}>
          <LinkObject href={href}>
            <ImageObject {...image} isBackground />
          </LinkObject>
        </Box>
      )}
      {image && !href && (
        <Box overflow className="image" radius={rounded}>
          <ImageObject {...image} isBackground />
        </Box>
      )}
      <div className="inner">
        <div>
          {date && (
            <p className="date">
              <time dateTime={date}>{dayjs(date).format('MMM DD, YYYY')}</time>
            </p>
          )}
          {icon && (
            <>
              <IconSelector icon={icon} size={60} className="icon" />
              <Spacer size={0.5} />
            </>
          )}
          {href ? (
            <Heading nonHeadingElement="p">
              <LinkObject href={href}>{title}</LinkObject>
            </Heading>
          ) : (
            <Heading nonHeadingElement="p">{title}</Heading>
          )}

          {description && (
            <>
              {markdown ? (
                <Markdown className="copy">{description as string}</Markdown>
              ) : (
                <p>{description}</p>
              )}
            </>
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
