/**
 * Resolves the image URL to render, falling back to a placeholder image
 * service (sized to match the requested dimensions) when no src is given
 * -- e.g. for CMS content that hasn't uploaded a real image yet.
 */
export const getImageSrc = (
  src: string | undefined,
  width: number | undefined,
  height: number | undefined
): string =>
  src ||
  `https://fakeimg.pl/${width && height ? `${width}x${height}` : '600x400'}?text=url+is+broken&font=bebas`
