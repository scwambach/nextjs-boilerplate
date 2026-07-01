/**
 * Derives the two-letter monogram shown when no avatar image is provided.
 */
export const getFirstLetters = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}
