/**
 * Resolves the id used to associate the tooltip bubble with its trigger via
 * `aria-describedby`. Prefers a stable id derived from componentId (useful
 * for CMS/CI snapshot stability); falls back to the React-generated id when
 * no componentId is supplied, so the accessibility association always works.
 */
export const resolveTooltipId = (
  componentId: string | undefined,
  generatedId: string
): string => (componentId ? `${componentId}-tooltip` : generatedId)
