"use client";

import React, { useState } from "react";
import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import { Star } from "@phosphor-icons/react";

export function DismissibleAlerts() {
  const [alerts, setAlerts] = useState({
    neutral: true,
    info: true,
    warning: true,
    critical: true,
  });

  const dismissAlert = (variant: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [variant]: false }));
  };

  const resetAlerts = () => {
    setAlerts({
      neutral: true,
      info: true,
      warning: true,
      critical: true,
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {alerts.neutral && (
          <Alert
            variant="neutral"
            title="Dismissible Neutral Alert"
            dismissible
            onClose={() => dismissAlert("neutral")}
          >
            Click the × to dismiss this alert.
          </Alert>
        )}
        {alerts.info && (
          <Alert
            variant="info"
            title="Dismissible Info Alert"
            dismissible
            onClose={() => dismissAlert("info")}
          >
            This alert can be closed by the user.
          </Alert>
        )}
        {alerts.warning && (
          <Alert
            variant="warning"
            title="Dismissible Warning Alert"
            dismissible
            onClose={() => dismissAlert("warning")}
          >
            Close this when you&apos;ve acknowledged the warning.
          </Alert>
        )}
        {alerts.critical && (
          <Alert
            variant="critical"
            title="Dismissible Critical Alert"
            dismissible
            onClose={() => dismissAlert("critical")}
          >
            Critical alerts can also be dismissed.
          </Alert>
        )}
      </div>
      {(!alerts.neutral ||
        !alerts.info ||
        !alerts.warning ||
        !alerts.critical) && (
        <button
          onClick={resetAlerts}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "1px solid var(--color-gray)",
            background: "var(--color-white)",
            cursor: "pointer",
          }}
        >
          Reset All Alerts
        </button>
      )}
    </div>
  );
}

export function DismissibleBadges() {
  const [badges, setBadges] = useState({
    neutral: true,
    primary: true,
    secondary: true,
    tertiary: true,
    quaternary: true,
    withIcon: true,
  });

  const dismissBadge = (key: keyof typeof badges) => {
    setBadges((prev) => ({ ...prev, [key]: false }));
  };

  const resetBadges = () => {
    setBadges({
      neutral: true,
      primary: true,
      secondary: true,
      tertiary: true,
      quaternary: true,
      withIcon: true,
    });
  };

  const hasDismissedBadges = Object.values(badges).some((value) => !value);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        {badges.neutral && (
          <Badge
            variant="neutral"
            dismissible
            onDismiss={() => dismissBadge("neutral")}
          >
            Neutral
          </Badge>
        )}
        {badges.primary && (
          <Badge
            variant="primary"
            dismissible
            onDismiss={() => dismissBadge("primary")}
          >
            Primary
          </Badge>
        )}
        {badges.secondary && (
          <Badge
            variant="secondary"
            dismissible
            onDismiss={() => dismissBadge("secondary")}
          >
            Secondary
          </Badge>
        )}
        {badges.tertiary && (
          <Badge
            variant="tertiary"
            dismissible
            onDismiss={() => dismissBadge("tertiary")}
          >
            Tertiary
          </Badge>
        )}
        {badges.quaternary && (
          <Badge
            variant="quaternary"
            dismissible
            onDismiss={() => dismissBadge("quaternary")}
          >
            Quaternary
          </Badge>
        )}
        {badges.withIcon && (
          <Badge
            variant="primary"
            leftIcon={Star}
            dismissible
            onDismiss={() => dismissBadge("withIcon")}
          >
            With Icon
          </Badge>
        )}
      </div>
      {hasDismissedBadges && (
        <button
          onClick={resetBadges}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "1px solid var(--color-gray)",
            background: "var(--color-white)",
            cursor: "pointer",
          }}
        >
          Reset All Badges
        </button>
      )}
    </div>
  );
}
