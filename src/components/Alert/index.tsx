"use client";

import React from "react";
import { getAlertProps } from "./logic";
import {
  WarningCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InfoIcon,
} from "@phosphor-icons/react";
import "./styles.css";

export type AlertVariant = "neutral" | "info" | "warning" | "critical";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  dismissible?: boolean;
}

const AlertIcon = ({ variant }: { variant: AlertVariant }) => {
  switch (variant) {
    case "neutral":
      return <InfoIcon size={24} weight="fill" />;
    case "info":
      return <CheckCircleIcon size={24} weight="fill" />;
    case "warning":
      return <WarningCircleIcon size={24} weight="fill" />;
    case "critical":
      return <XCircleIcon size={24} weight="fill" />;
  }
};

export default function Alert({
  variant = "neutral",
  title,
  children,
  onClose,
  dismissible = false,
}: AlertProps) {
  const { ariaRole, ariaLive } = getAlertProps(variant);

  return (
    <div
      className={`alert alert-${variant}`}
      role={ariaRole}
      aria-live={ariaLive}
    >
      <div className="alert-icon" aria-hidden="true">
        <AlertIcon variant={variant} />
      </div>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {dismissible && onClose && (
        <button
          type="button"
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
}
