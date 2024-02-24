import { ContainerProps } from '@utils/types'

export const Container = ({
  className,
  testId,
  children,
  containerClass,
}: ContainerProps) => {
  return (
    <div
      data-testid={testId}
      className={`container${
        containerClass ? ` ${containerClass}` : ''
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
