import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'
import { Box, Flex } from '@/components/utility'
import { ShareButtonsProps } from '@/utils/types'
import { Button } from '../Button'
import { getShareUrl } from './logic'
import './styles.scss'

export const ShareButtons = ({
  className,
  componentId,
  slug,
  testId,
  title,
}: ShareButtonsProps) => {
  return (
    <Box
      componentId={componentId}
      testId={testId}
      className={`shareButtons${className ? ` ${className}` : ''}`}
    >
      <Flex columnBreak="none" gap="xxs" justifyContent="flex-start">
        <Button
          type="link"
          href={getShareUrl('twitter', title, slug)}
          ariaLabel="Share on Twitter"
        >
          <span className="desktopOnly" aria-hidden="true">
            Share on
          </span>
          <TwitterLogo weight="fill" size={22} aria-hidden="true" />
        </Button>
        <Button
          type="link"
          href={getShareUrl('linkedin', title, slug)}
          ariaLabel="Share on LinkedIn"
        >
          <span className="desktopOnly" aria-hidden="true">
            Share on
          </span>
          <LinkedinLogo weight="fill" size={22} aria-hidden="true" />
        </Button>
        <Button
          type="link"
          href={getShareUrl('facebook', title, slug)}
          ariaLabel="Share on Facebook"
        >
          <span className="desktopOnly" aria-hidden="true">
            Share on
          </span>
          <FacebookLogo weight="fill" size={22} aria-hidden="true" />
        </Button>
      </Flex>
    </Box>
  )
}
