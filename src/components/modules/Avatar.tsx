import { ComponentProps, ImageObjectProps } from '@utils/types'
import { ImageObject } from './ImageObject'

interface AvatarProps extends ComponentProps {
  image?: ImageObjectProps
  firstName: string
  lastName: string
  size?: number
}

const getFirstLetters = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const Avatar = ({
  testId,
  className,
  image,
  firstName,
  lastName,
  size = 5,
}: AvatarProps) => {
  return (
    <div
      data-testid={testId}
      style={{
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      className={`avatar${className ? ` ${className}` : ''}`}
    >
      {!image && (
        <span
          style={{
            fontSize: `${size / 3 + 0.5}rem`,
          }}
        >
          {getFirstLetters(firstName, lastName)}
        </span>
      )}
      {image && (
        <ImageObject {...image} alt={`${firstName} ${lastName}`} isBackground />
      )}
    </div>
  )
}
