import { HeadingProps } from '../../../utils/types'

// No styles.scss: `.heading` is already defined in `src/styles/_typography.scss`
// (a shared global typography rule, out of scope for this refactor), and this
// component renders no other component-specific className.
export const Heading = ({
  children,
  className,
  componentId,
  level = 3,
  nonHeadingElement,
  testId,
}: HeadingProps) => {
  const HeadingTag =
    nonHeadingElement || (`h${level}` as keyof JSX.IntrinsicElements)

  return (
    <HeadingTag
      id={componentId}
      data-testid={testId}
      className={`heading${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
