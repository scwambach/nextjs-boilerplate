import React from "react";
import "./styles.css";

export type SpinnerSize = "small" | "medium" | "large";

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export default function LoadingSpinner({
  size = "medium",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      className={`loading-spinner ${size} ${className}`.trim()}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
