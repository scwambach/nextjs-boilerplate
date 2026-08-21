import type { AlertVariant } from "./index";
import {
  Info,
  WarningCircle,
  XCircle,
  CheckCircle,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

export interface AlertAccessibilityProps {
  ariaRole: "alert" | "status";
  ariaLive: "polite" | "assertive";
}

/**
 * Get appropriate ARIA attributes for alert variant
 * @param variant - The alert variant type
 * @returns ARIA role and live region settings
 */
export const getAlertProps = (
  variant: AlertVariant,
): AlertAccessibilityProps => {
  switch (variant) {
    case "critical":
    case "warning":
      return {
        ariaRole: "alert",
        ariaLive: "assertive",
      };
    case "info":
    case "neutral":
    default:
      return {
        ariaRole: "status",
        ariaLive: "polite",
      };
  }
};

/**
 * Get display label for alert variant
 * @param variant - The alert variant type
 * @returns Human-readable label
 */
export const getVariantLabel = (variant: AlertVariant): string => {
  const labels: Record<AlertVariant, string> = {
    neutral: "Notice",
    info: "Information",
    warning: "Warning",
    critical: "Critical",
  };

  return labels[variant];
};

/**
 * Get appropriate icon component for alert variant
 * @param variant - The alert variant type
 * @returns Phosphor icon component
 */
export const getVariantIcon = (variant: AlertVariant): Icon => {
  const icons: Record<AlertVariant, Icon> = {
    neutral: Info,
    info: CheckCircle,
    warning: WarningCircle,
    critical: XCircle,
  };

  return icons[variant];
};
