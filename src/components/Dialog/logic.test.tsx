import {
  handleClose,
  createToggleDialog,
  createOpenDialog,
  createCloseDialog,
} from "./logic";

describe("Dialog Logic", () => {
  describe("handleClose", () => {
    it("calls onClose when invoked", () => {
      const onClose = jest.fn();
      const handler = handleClose(onClose);
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLButtonElement>;

      handler(mockEvent);

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe("createToggleDialog", () => {
    it("toggles dialog state from false to true", () => {
      const setIsOpen = jest.fn();
      const toggle = createToggleDialog(setIsOpen);

      toggle();

      expect(setIsOpen).toHaveBeenCalledTimes(1);
      const callback = setIsOpen.mock.calls[0][0];
      expect(callback(false)).toBe(true);
    });

    it("toggles dialog state from true to false", () => {
      const setIsOpen = jest.fn();
      const toggle = createToggleDialog(setIsOpen);

      toggle();

      const callback = setIsOpen.mock.calls[0][0];
      expect(callback(true)).toBe(false);
    });
  });

  describe("createOpenDialog", () => {
    it("sets dialog state to true", () => {
      const setIsOpen = jest.fn();
      const open = createOpenDialog(setIsOpen);

      open();

      expect(setIsOpen).toHaveBeenCalledWith(true);
    });
  });

  describe("createCloseDialog", () => {
    it("sets dialog state to false", () => {
      const setIsOpen = jest.fn();
      const close = createCloseDialog(setIsOpen);

      close();

      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });
});
