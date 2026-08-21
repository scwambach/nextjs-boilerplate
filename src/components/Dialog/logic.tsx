import type { MouseEvent } from "react";

/**
 * Handles closing the dialog
 * @param onClose - Callback function to close the dialog
 * @returns Event handler function
 */
export const handleClose =
  (onClose: () => void) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

/**
 * Handles backdrop click to close dialog
 * Only closes if clicking the backdrop itself, not the dialog content
 * @param dialogRef - Reference to the dialog element
 * @param onClose - Callback function to close the dialog
 * @returns Event handler function
 */
export const handleBackdropClick =
  (dialogRef: { current: HTMLDivElement | null }, onClose: () => void) =>
  (e: MouseEvent<HTMLDivElement>) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

/**
 * Creates a toggle function for dialog state
 * @param setIsOpen - State setter for dialog open state
 * @returns Toggle function
 */
export const createToggleDialog =
  (setIsOpen: (isOpen: boolean) => void) => () => {
    setIsOpen((prev) => !prev);
  };

/**
 * Creates an open function for dialog state
 * @param setIsOpen - State setter for dialog open state
 * @returns Open function
 */
export const createOpenDialog =
  (setIsOpen: (isOpen: boolean) => void) => () => {
    setIsOpen(true);
  };

/**
 * Creates a close function for dialog state
 * @param setIsOpen - State setter for dialog open state
 * @returns Close function
 */
export const createCloseDialog =
  (setIsOpen: (isOpen: boolean) => void) => () => {
    setIsOpen(false);
  };
