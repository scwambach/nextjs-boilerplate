"use client";

import React, { useEffect, useRef } from "react";
import { handleClose } from "./logic";
import { X } from "@phosphor-icons/react";
import "./styles.css";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  actions?: React.ReactNode;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  additionalProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function DialogTrigger({
  children,
  onClick,
  className = "",
  additionalProps,
}: DialogTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      {...additionalProps}
    >
      {children}
    </button>
  );
}

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  actions,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the close button when dialog opens
      closeButtonRef.current?.focus();

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="dialog-backdrop"
      onClick={(e) => {
        if (
          dialogRef.current &&
          !dialogRef.current.contains(e.target as Node)
        ) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className={`dialog dialog-${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
      >
        <div className="dialog-header">
          {title && (
            <h2 id="dialog-title" className="dialog-title">
              {title}
            </h2>
          )}
          <button
            ref={closeButtonRef}
            type="button"
            className="dialog-close"
            onClick={handleClose(onClose)}
            aria-label="Close dialog"
          >
            <X size={24} weight="bold" />
          </button>
        </div>
        <div className="dialog-content content">{children}</div>
        {actions && <div className="dialog-footer">{actions}</div>}
      </div>
    </div>
  );
}
