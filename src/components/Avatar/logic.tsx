/**
 * Extracts initials from a full name
 * @param name - Full name (first and last)
 * @returns Two-letter initials
 */
export const getInitials = (name: string): string => {
  const trimmed = name.trim();
  
  if (!trimmed) return "?";
  
  const parts = trimmed.split(/\s+/);

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  const firstInitial = parts[0].charAt(0).toUpperCase();
  const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};

/**
 * Generates a consistent color based on name
 * Uses a hash of the name to select from a predefined color palette
 * @param name - User's name
 * @returns CSS variable for color
 */
export const getColorFromName = (name: string): string => {
  const colors = [
    "var(--color-primary)",
    "var(--color-primary-dark)",
    "var(--color-secondary)",
    "var(--color-secondary-dark)",
    "var(--color-tertiary)",
    "var(--color-tertiary-dark)",
    "var(--color-quaternary)",
    "var(--color-quaternary-dark)",
  ];

  // Simple hash function to generate consistent color from name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

/**
 * Validates if a string is a valid name
 * @param name - Name to validate
 * @returns Boolean indicating if name is valid
 */
export const isValidName = (name: string): boolean => {
  return name.trim().length > 0;
};
