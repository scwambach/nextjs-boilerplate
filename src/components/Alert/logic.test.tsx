import { getAlertProps, getVariantLabel, getVariantIcon } from "./logic";
import {
  Info,
  WarningCircle,
  XCircle,
  CheckCircle,
} from "@phosphor-icons/react";

describe("Alert Logic", () => {
  describe("getAlertProps", () => {
    it("returns assertive alert role for critical variant", () => {
      const props = getAlertProps("critical");
      expect(props.ariaRole).toBe("alert");
      expect(props.ariaLive).toBe("assertive");
    });

    it("returns assertive alert role for warning variant", () => {
      const props = getAlertProps("warning");
      expect(props.ariaRole).toBe("alert");
      expect(props.ariaLive).toBe("assertive");
    });

    it("returns polite status role for info variant", () => {
      const props = getAlertProps("info");
      expect(props.ariaRole).toBe("status");
      expect(props.ariaLive).toBe("polite");
    });

    it("returns polite status role for neutral variant", () => {
      const props = getAlertProps("neutral");
      expect(props.ariaRole).toBe("status");
      expect(props.ariaLive).toBe("polite");
    });
  });

  describe("getVariantLabel", () => {
    it("returns correct label for neutral", () => {
      expect(getVariantLabel("neutral")).toBe("Notice");
    });

    it("returns correct label for info", () => {
      expect(getVariantLabel("info")).toBe("Information");
    });

    it("returns correct label for warning", () => {
      expect(getVariantLabel("warning")).toBe("Warning");
    });

    it("returns correct label for critical", () => {
      expect(getVariantLabel("critical")).toBe("Critical");
    });
  });

  describe("getVariantIcon", () => {
    it("returns Info icon for neutral variant", () => {
      expect(getVariantIcon("neutral")).toBe(Info);
    });

    it("returns CheckCircle icon for info variant", () => {
      expect(getVariantIcon("info")).toBe(CheckCircle);
    });

    it("returns WarningCircle icon for warning variant", () => {
      expect(getVariantIcon("warning")).toBe(WarningCircle);
    });

    it("returns XCircle icon for critical variant", () => {
      expect(getVariantIcon("critical")).toBe(XCircle);
    });
  });
});
