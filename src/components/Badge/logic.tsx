import type { BadgeVariant } from "./index";

/**
 * Get display label for badge variant
 * @param variant - The badge variant type
 * @returns Human-readable label
 */
export const getVariantLabel = (variant: BadgeVariant): string => {
  const labels: Record<BadgeVariant, string> = {
    neutral: "Neutral",
    primary: "Primary",
    secondary: "Secondary",
    tertiary: "Tertiary",
    quaternary: "Quaternary",
  };

  return labels[variant];
};

/**
 * Validates if text content is appropriate for a badge
 * @param text - Text to validate
 * @returns Boolean indicating if text is valid
 */
export const isValidBadgeText = (text: string): boolean => {
  return text.trim().length > 0 && text.trim().length <= 50;
};
