import type { MouseEvent } from "react";

/**
 * Handles toggling an accordion item
 * @param itemId - The ID of the accordion item to toggle
 * @param allowMultiple - Whether multiple items can be expanded at once
 * @param expandedItems - Set of currently expanded item IDs
 * @param setExpandedItems - State setter for expanded items
 * @returns Event handler function
 */
export const handleToggle =
  (
    itemId: string,
    allowMultiple: boolean,
    expandedItems: Set<string>,
    setExpandedItems: (items: Set<string>) => void,
  ) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setExpandedItems((prev) => {
      const newSet = new Set(allowMultiple ? prev : []);

      if (prev.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }

      return newSet;
    });
  };

/**
 * Creates a new Set with toggled item
 * @param currentSet - Current set of expanded items
 * @param itemId - ID of item to toggle
 * @param allowMultiple - Whether multiple items can be expanded
 * @returns New set with toggled item
 */
export const toggleItem = (
  currentSet: Set<string>,
  itemId: string,
  allowMultiple: boolean,
): Set<string> => {
  const newSet = new Set(allowMultiple ? currentSet : []);

  if (currentSet.has(itemId)) {
    newSet.delete(itemId);
  } else {
    newSet.add(itemId);
  }

  return newSet;
};
