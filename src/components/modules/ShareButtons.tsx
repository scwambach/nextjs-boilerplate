import { ComponentProps } from '@utils/types'
import { Button } from './Button'
import { Flex } from '@components/utility'
import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

// TODO: Create ShareButtons tests and stories

interface ShareButtonsProps extends ComponentProps {
  title: string
  slug: string
}

export const ShareButtons = ({
  className,
  testId,
  title,
  slug,
}: ShareButtonsProps) => {
  return (
    <div
      data-testid={testId}
      className={`shareButtons${className ? ` ${className}` : ''}`}
    >
      <Flex columnBreak="none" gap="xxs">
        <Button
          type="link"
          href={`https://twitter.com/intent/tweet?text=${title}&url=https://sproutyourdesign.com/blog/${slug}`}
        >
          <span className="desktopOnly">Share on</span>{' '}
          <TwitterLogo weight="fill" />
        </Button>
        <Button
          type="link"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://sproutyourdesign.com/blog/${slug}`}
        >
          <span className="desktopOnly">Share on</span>{' '}
          <LinkedinLogo weight="fill" />
        </Button>
        <Button
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
