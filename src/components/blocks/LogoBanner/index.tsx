import { ImageObject } from '@/components/modules'
import { Box, Flex } from '@/components/utility'
import { LogoBannerProps } from '@/utils/types'
import './styles.scss'

export const LogoBanner = ({
  backgroundImage,
  className,
  componentId,
  logo,
  testId,
}: LogoBannerProps) => {
  return (
    <Box
      componentId={componentId}
      elementTag="section"
      testId={testId}
      className={`logoBanner${className ? ` ${className}` : ''}`}
    >
      <ImageObject {...backgroundImage} alt="" isBackground />
      {logo && (
        <Flex alignItems="center" justifyContent="center">
          <ImageObject {...logo} alt="Logo" className="logo" />
        </Flex>
      )}
    </Box>
  )
}
