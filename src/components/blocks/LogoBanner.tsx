import { ImageObject } from '@components/modules'
import { Flex } from '@components/utility'
import { ComponentProps, ImageObjectProps } from '@utils/types'

// TODO: Create LogoBanner tests and stories

interface LogoBannerProps extends ComponentProps {
  backgroundImage?: ImageObjectProps
  copy: string
  logo?: ImageObjectProps
}

export const LogoBanner = ({
  backgroundImage,
  className,
  componentId,
  logo,
  testId,
}: LogoBannerProps) => {
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`logoBanner${className ? ` ${className}` : ''}`}
    >
      <ImageObject {...backgroundImage} alt="" isBackground />
      {logo && (
        <Flex alignItems="center" justifyContent="center">
          <ImageObject {...logo} alt="Logo" className="logo" />
        </Flex>
      )}
    </section>
  )
}
