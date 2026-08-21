import { toggleItem } from "./logic";

describe("Accordion Logic", () => {
  describe("toggleItem", () => {
    it("adds item to empty set", () => {
      const result = toggleItem(new Set(), "item1", false);
      expect(result.has("item1")).toBe(true);
      expect(result.size).toBe(1);
    });

    it("removes item from set if already present", () => {
      const initialSet = new Set(["item1"]);
      const result = toggleItem(initialSet, "item1", false);
      expect(result.has("item1")).toBe(false);
      expect(result.size).toBe(0);
    });

    it("clears other items when allowMultiple is false", () => {
      const initialSet = new Set(["item1", "item2"]);
      const result = toggleItem(initialSet, "item3", false);
      expect(result.has("item1")).toBe(false);
      expect(result.has("item2")).toBe(false);
      expect(result.has("item3")).toBe(true);
      expect(result.size).toBe(1);
    });

    it("preserves other items when allowMultiple is true", () => {
      const initialSet = new Set(["item1", "item2"]);
      const result = toggleItem(initialSet, "item3", true);
      expect(result.has("item1")).toBe(true);
      expect(result.has("item2")).toBe(true);
      expect(result.has("item3")).toBe(true);
      expect(result.size).toBe(3);
    });

    it("removes item even when allowMultiple is true", () => {
      const initialSet = new Set(["item1", "item2"]);
      const result = toggleItem(initialSet, "item1", true);
      expect(result.has("item1")).toBe(false);
      expect(result.has("item2")).toBe(true);
      expect(result.size).toBe(1);
    });

    it("does not mutate original set", () => {
      const initialSet = new Set(["item1"]);
      const result = toggleItem(initialSet, "item2", true);
      expect(initialSet.has("item2")).toBe(false);
      expect(result.has("item2")).toBe(true);
    });
  });
});
