import { ShareButtonsProps } from '@utils/types'
import { Button } from './Button'
import { Flex } from '@components/utility'
import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

export const ShareButtons = ({
  className,
  componentId,
  slug,
  testId,
  title,
}: ShareButtonsProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`shareButtons${className ? ` ${className}` : ''}`}
    >
      <Flex columnBreak="none" gap="xxs">
        <Button
          type="link"
          style={{ background: '#1DA1F2' }}
          href={`https://twitter.com/intent/tweet?text=${title}&url=https://sproutyourdesign.com/blog/${slug}`}
        >
          twitter
          <span className="desktopOnly">Share on</span>{' '}
          <TwitterLogo weight="fill" />
        </Button>
        <Button
          style={{ background: '#0077B5' }}
          type="link"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://sproutyourdesign.com/blog/${slug}`}
        >
          <span className="desktopOnly">Share on</span>{' '}
          <LinkedinLogo weight="fill" />
        </Button>
        <Button
          style={{ background: '#316FF6' }}
          type="link"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://sproutyourdesign.com/blog/${slug}`}
        >
          <span className="desktopOnly">Share on</span>{' '}
          <FacebookLogo weight="fill" />
        </Button>
      </Flex>
    </div>
  )
}
