import { ComponentProps, ImageObjectProps } from '@utils/types'
import { alfaSlabOne } from '@utils/headingFont'
import { ImageObject } from './ImageObject'
import * as Icon from '@phosphor-icons/react'
import { IconSelector } from '@components/utility/IconSelector'
import { Flex } from '@components/utility'

interface PersonProps extends ComponentProps {
  firstName: string
  lastName: string
  title?: string
  image: ImageObjectProps
  socials?: {
    icon: keyof typeof Icon
    screenReader: string
    href: string
  }[]
}

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
                <a href={social.href} aria-label={social.screenReader}>
                  <IconSelector icon={social.icon} weight="fill" />
                </a>
              </li>
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
