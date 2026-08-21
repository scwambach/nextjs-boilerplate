export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Handles keyboard navigation for the lightbox
 * @param event - Keyboard event
 * @param currentIndex - Current image index
 * @param totalImages - Total number of images
 * @param onNavigate - Callback to navigate to specific index
 * @param onClose - Callback to close lightbox
 */
export const handleLightboxKeyboard = (
  event: KeyboardEvent,
  currentIndex: number,
  totalImages: number,
  onNavigate: (index: number) => void,
  onClose: () => void,
) => {
  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      break;
    case "ArrowRight":
      if (currentIndex < totalImages - 1) {
        onNavigate(currentIndex + 1);
      }
      break;
    case "Escape":
      onClose();
      break;
  }
};

/**
 * Gets the image counter text
 * @param current - Current image index (0-based)
 * @param total - Total number of images
 * @returns Counter text like "1 / 5"
 */
export const getImageCounter = (current: number, total: number): string => {
  return `${current + 1} / ${total}`;
};
