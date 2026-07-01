'use client'

import { Button } from '../../modules'
import { handleSkipToMain } from './logic'

// No styles.scss: `.skipToMain` is already defined in `src/styles/_global.scss`
// (a shared global utility, out of scope for this refactor).
export const SkipToMain = () => {
  return (
    <Button className="skipToMain" onClick={handleSkipToMain}>
      Skip to main content
    </Button>
  )
}
