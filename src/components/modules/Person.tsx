import { PersonProps } from '@utils/types'
import { alfaSlabOne } from '@utils/headingFont'
import { ImageObject } from './ImageObject'
import * as Icon from '@phosphor-icons/react'
import { IconSelector } from '@components/utility/IconSelector'
import { Flex } from '@components/utility'
import { LinkObject } from './LinkObject'

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
        <p className={alfaSlabOne.className}>
          {firstName} {lastName}
        </p>
        <p>{title}</p>
        {socials && (
          <Flex elementTag="ul" className="unstyled" gap="micro">
            {socials.map((social, index) => (
              <li key={index}>
                <LinkObject href={social.href} aria-label={social.screenReader}>
                  <IconSelector
                    icon={social.icon as keyof typeof Icon}
                    weight="fill"
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
