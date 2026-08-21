import { handleLightboxKeyboard, getImageCounter } from "./logic";

describe("ImageGallery Logic", () => {
  describe("handleLightboxKeyboard", () => {
    it("navigates to previous image on ArrowLeft", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });

      handleLightboxKeyboard(event, 2, 5, onNavigate, onClose);

      expect(onNavigate).toHaveBeenCalledWith(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("does not navigate previous when at first image", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });

      handleLightboxKeyboard(event, 0, 5, onNavigate, onClose);

      expect(onNavigate).not.toHaveBeenCalled();
    });

    it("navigates to next image on ArrowRight", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "ArrowRight" });

      handleLightboxKeyboard(event, 2, 5, onNavigate, onClose);

      expect(onNavigate).toHaveBeenCalledWith(3);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("does not navigate next when at last image", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "ArrowRight" });

      handleLightboxKeyboard(event, 4, 5, onNavigate, onClose);

      expect(onNavigate).not.toHaveBeenCalled();
    });

    it("closes lightbox on Escape", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "Escape" });

      handleLightboxKeyboard(event, 2, 5, onNavigate, onClose);

      expect(onClose).toHaveBeenCalled();
      expect(onNavigate).not.toHaveBeenCalled();
    });

    it("ignores other keys", () => {
      const onNavigate = jest.fn();
      const onClose = jest.fn();
      const event = new KeyboardEvent("keydown", { key: "Enter" });

      handleLightboxKeyboard(event, 2, 5, onNavigate, onClose);

      expect(onNavigate).not.toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe("getImageCounter", () => {
    it("returns correct counter text", () => {
      expect(getImageCounter(0, 5)).toBe("1 / 5");
      expect(getImageCounter(2, 10)).toBe("3 / 10");
      expect(getImageCounter(9, 10)).toBe("10 / 10");
    });

    it("handles single image", () => {
      expect(getImageCounter(0, 1)).toBe("1 / 1");
    });
  });
});
