import { render, screen } from "@testing-library/react";
import Avatar from "./index";

describe("Avatar", () => {
  it("renders initials for a name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders single initial for one name", () => {
    render(<Avatar name="Madonna" />);
    expect(screen.getByText("M")).toBeInTheDocument();
  });

  it("renders first and last initials for multiple names", () => {
    render(<Avatar name="John Michael Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders image when src is provided", () => {
    render(<Avatar name="John Doe" src="/avatar.jpg" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/avatar.jpg");
    expect(image).toHaveAttribute("alt", "John Doe");
  });

  it("uses custom alt text when provided", () => {
    render(<Avatar name="John Doe" src="/avatar.jpg" alt="Custom Alt" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Custom Alt");
  });

  it("applies small size class", () => {
    const { container } = render(<Avatar name="John Doe" size="small" />);
    expect(container.querySelector(".avatar-small")).toBeInTheDocument();
  });

  it("applies medium size class by default", () => {
    const { container } = render(<Avatar name="John Doe" />);
    expect(container.querySelector(".avatar-medium")).toBeInTheDocument();
  });

  it("applies large size class", () => {
    const { container } = render(<Avatar name="John Doe" size="large" />);
    expect(container.querySelector(".avatar-large")).toBeInTheDocument();
  });

  it("has aria-label for initials avatar", () => {
    const { container } = render(<Avatar name="John Doe" />);
    const avatar = container.querySelector(".avatar");
    expect(avatar).toHaveAttribute("aria-label", "Avatar for John Doe");
  });

  it("applies background color for initials", () => {
    const { container } = render(<Avatar name="John Doe" />);
    const avatar = container.querySelector(".avatar");
    expect(avatar).toHaveStyle({ backgroundColor: expect.any(String) });
  });

  it("does not show initials when image is provided", () => {
    render(<Avatar name="John Doe" src="/avatar.jpg" />);
    expect(screen.queryByText("JD")).not.toBeInTheDocument();
  });

  it("handles empty string gracefully", () => {
    render(<Avatar name="" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("handles whitespace-only name", () => {
    render(<Avatar name="   " />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("uppercases initials", () => {
    render(<Avatar name="john doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });
});
