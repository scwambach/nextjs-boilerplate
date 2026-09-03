import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "./index";

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("switches between light and dark mode", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    const toggle = screen.getByRole("button", { name: "Switch to dark mode" });
    await user.click(toggle);

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");
    expect(toggle).toHaveAccessibleName("Switch to light mode");
  });

  it("restores a saved dark mode preference", () => {
    window.localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);

    expect(
      screen.getByRole("button", { name: "Switch to light mode" }),
    ).toBeInTheDocument();
  });
});
