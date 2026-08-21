"use client";

import React from "react";
import { getInitials, getColorFromName } from "./logic";
import "./styles.css";

export type AvatarSize = "small" | "medium" | "large";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: AvatarSize;
  alt?: string;
}

export default function Avatar({
  name,
  src,
  size = "medium",
  alt,
}: AvatarProps) {
  const initials = getInitials(name);
  const backgroundColor = getColorFromName(name);

  if (src) {
    return (
      <div className={`avatar avatar-${size}`}>
        <img src={src} alt={alt || name} className="avatar-image" />
      </div>
    );
  }

  return (
    <div
      className={`avatar avatar-${size} avatar-initials`}
      style={{ backgroundColor }}
      aria-label={`Avatar for ${name}`}
    >
      <span className="avatar-text">{initials}</span>
    </div>
  );
}
