/**
 * Moves keyboard focus to the page's main content landmark (#bodyContent),
 * allowing keyboard/screen-reader users to bypass repeated navigation.
 */
export const handleSkipToMain = () => {
  const main = document.getElementById('bodyContent')
  if (main) {
    main.focus()
  }
}
