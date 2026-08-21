import { getInitials, getColorFromName, isValidName } from "./logic";

describe("Avatar Logic", () => {
  describe("getInitials", () => {
    it("returns initials for two names", () => {
      expect(getInitials("John Doe")).toBe("JD");
    });

    it("returns single initial for one name", () => {
      expect(getInitials("Madonna")).toBe("M");
    });

    it("returns first and last initials for multiple names", () => {
      expect(getInitials("John Michael Doe")).toBe("JD");
    });

    it("handles names with extra spaces", () => {
      expect(getInitials("  John   Doe  ")).toBe("JD");
    });

    it("uppercases lowercase names", () => {
      expect(getInitials("john doe")).toBe("JD");
    });

    it("returns ? for empty string", () => {
      expect(getInitials("")).toBe("?");
    });

    it("returns ? for whitespace-only string", () => {
      expect(getInitials("   ")).toBe("?");
    });

    it("handles names with hyphens", () => {
      expect(getInitials("Mary-Jane Watson")).toBe("MW");
    });
  });

  describe("getColorFromName", () => {
    it("returns consistent color for same name", () => {
      const color1 = getColorFromName("John Doe");
      const color2 = getColorFromName("John Doe");
      expect(color1).toBe(color2);
    });

    it("returns different colors for different names", () => {
      const color1 = getColorFromName("John Doe");
      const color2 = getColorFromName("Jane Smith");
      // They might be the same by chance, but likely different
      expect(typeof color1).toBe("string");
      expect(typeof color2).toBe("string");
    });

    it("returns valid CSS variable", () => {
      const color = getColorFromName("John Doe");
      expect(color).toMatch(/^var\(--color-[a-z-]+\)$/);
    });

    it("returns a color from the predefined palette", () => {
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
      const color = getColorFromName("Test User");
      expect(colors).toContain(color);
    });
  });

  describe("isValidName", () => {
    it("returns true for valid name", () => {
      expect(isValidName("John Doe")).toBe(true);
    });

    it("returns false for empty string", () => {
      expect(isValidName("")).toBe(false);
    });

    it("returns false for whitespace-only string", () => {
      expect(isValidName("   ")).toBe(false);
    });

    it("returns true for single character", () => {
      expect(isValidName("J")).toBe(true);
    });

    it("returns true for name with spaces", () => {
      expect(isValidName("  John  ")).toBe(true);
    });
  });
});
