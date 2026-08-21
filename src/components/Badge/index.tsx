"use client";

import React from "react";
import type { Icon } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react";
import "./styles.css";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  leftIcon?: Icon;
  rightIcon?: Icon;
  iconSize?: number;
  iconWeight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Badge({
  children,
  variant = "neutral",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconSize = 16,
  iconWeight = "bold",
  dismissible = false,
  onDismiss,
}: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {LeftIcon && (
        <LeftIcon
          size={iconSize}
          weight={iconWeight}
          className="badge-icon badge-icon-left"
          aria-hidden="true"
        />
      )}
      <span className="badge-text">{children}</span>
      {RightIcon && (
        <RightIcon
          size={iconSize}
          weight={iconWeight}
          className="badge-icon badge-icon-right"
          aria-hidden="true"
        />
      )}
      {dismissible && onDismiss && (
        <button
          type="button"
          className="badge-close"
          onClick={onDismiss}
          aria-label="Dismiss badge"
        >
          <X size={14} weight="bold" />
        </button>
      )}
    </span>
  );
}
