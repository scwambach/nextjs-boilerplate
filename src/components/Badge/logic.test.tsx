import { getVariantLabel, isValidBadgeText } from "./logic";

describe("Badge Logic", () => {
  describe("getVariantLabel", () => {
    it("returns correct label for neutral", () => {
      expect(getVariantLabel("neutral")).toBe("Neutral");
    });

    it("returns correct label for primary", () => {
      expect(getVariantLabel("primary")).toBe("Primary");
    });

    it("returns correct label for secondary", () => {
      expect(getVariantLabel("secondary")).toBe("Secondary");
    });

    it("returns correct label for tertiary", () => {
      expect(getVariantLabel("tertiary")).toBe("Tertiary");
    });

    it("returns correct label for quaternary", () => {
      expect(getVariantLabel("quaternary")).toBe("Quaternary");
    });
  });

  describe("isValidBadgeText", () => {
    it("returns true for valid short text", () => {
      expect(isValidBadgeText("New")).toBe(true);
    });

    it("returns true for text at max length", () => {
      const text = "a".repeat(50);
      expect(isValidBadgeText(text)).toBe(true);
    });

    it("returns false for text over max length", () => {
      const text = "a".repeat(51);
      expect(isValidBadgeText(text)).toBe(false);
    });

    it("returns false for empty string", () => {
      expect(isValidBadgeText("")).toBe(false);
    });

    it("returns false for whitespace-only string", () => {
      expect(isValidBadgeText("   ")).toBe(false);
    });

    it("returns true for text with spaces", () => {
      expect(isValidBadgeText("Hello World")).toBe(true);
    });

    it("trims whitespace before validating", () => {
      expect(isValidBadgeText("  Valid  ")).toBe(true);
    });
  });
});
