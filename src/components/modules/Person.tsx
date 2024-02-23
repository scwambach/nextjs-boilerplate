import { PersonProps } from '@utils/types'
import * as Icon from '@phosphor-icons/react'
import { IconSelector, Flex } from '@components/utility'
import { LinkObject, ImageObject } from '@components/modules'
import { headingFont } from '@utils/fonts'

export const Person = ({
  firstName,
  lastName,
  className,
  image,
  socials,
  title,
}: PersonProps) => {
  return (
    <div className={`person${className ? ` ${className}` : ''}`}>
      <Flex direction="column" gap="xxs" alignItems="stretch">
        <div className="image">
          <ImageObject {...image} isBackground />
        </div>
        <p className={headingFont.className}>
          {firstName} {lastName}
        </p>
        <p>{title}</p>
        {socials && (
          <Flex
            columnBreak="none"
            elementTag="ul"
            className="unstyled"
            gap="micro"
          >
            {socials.map((social, index) => (
              <li key={index}>
                <LinkObject href={social.href} ariaLabel={social.screenReader}>
                  <IconSelector
                    icon={social.icon as keyof typeof Icon}
                    weight="fill"
                    size={24}
                  />
                </LinkObject>
              </li>
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
