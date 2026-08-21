import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Badge from "./index";
import { Star, CheckCircle } from "@phosphor-icons/react";

describe("Badge", () => {
  it("renders badge text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders neutral variant by default", () => {
    const { container } = render(<Badge>Test</Badge>);
    expect(container.querySelector(".badge-neutral")).toBeInTheDocument();
  });

  it("renders primary variant", () => {
    const { container } = render(<Badge variant="primary">Primary</Badge>);
    expect(container.querySelector(".badge-primary")).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    const { container } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(container.querySelector(".badge-secondary")).toBeInTheDocument();
  });

  it("renders tertiary variant", () => {
    const { container } = render(<Badge variant="tertiary">Tertiary</Badge>);
    expect(container.querySelector(".badge-tertiary")).toBeInTheDocument();
  });

  it("renders quaternary variant", () => {
    const { container } = render(
      <Badge variant="quaternary">Quaternary</Badge>,
    );
    expect(container.querySelector(".badge-quaternary")).toBeInTheDocument();
  });

  it("renders with left icon", () => {
    const { container } = render(<Badge leftIcon={Star}>Favorite</Badge>);
    expect(container.querySelector(".badge-icon-left")).toBeInTheDocument();
    expect(screen.getByText("Favorite")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    const { container } = render(
      <Badge rightIcon={CheckCircle}>Verified</Badge>,
    );
    expect(container.querySelector(".badge-icon-right")).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("renders with both left and right icons", () => {
    const { container } = render(
      <Badge leftIcon={Star} rightIcon={CheckCircle}>
        Featured
      </Badge>,
    );
    expect(container.querySelector(".badge-icon-left")).toBeInTheDocument();
    expect(container.querySelector(".badge-icon-right")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("renders without icons", () => {
    const { container } = render(<Badge>Plain</Badge>);
    expect(container.querySelector(".badge-icon")).not.toBeInTheDocument();
  });

  it("applies custom icon size", () => {
    const { container } = render(
      <Badge leftIcon={Star} iconSize={24}>
        Large Icon
      </Badge>,
    );
    const icon = container.querySelector(".badge-icon-left");
    expect(icon).toBeInTheDocument();
  });

  it("applies custom icon weight", () => {
    const { container } = render(
      <Badge leftIcon={Star} iconWeight="fill">
        Filled Icon
      </Badge>,
    );
    const icon = container.querySelector(".badge-icon-left");
    expect(icon).toBeInTheDocument();
  });

  it("renders complex children", () => {
    render(
      <Badge>
        <span>Complex</span> Content
      </Badge>,
    );
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("has aria-hidden on icons", () => {
    const { container } = render(
      <Badge leftIcon={Star} rightIcon={CheckCircle}>
        Test
      </Badge>,
    );
    const leftIcon = container.querySelector(".badge-icon-left");
    const rightIcon = container.querySelector(".badge-icon-right");
    expect(leftIcon).toHaveAttribute("aria-hidden", "true");
    expect(rightIcon).toHaveAttribute("aria-hidden", "true");
  });

  it("renders dismissible badge with close button", () => {
    const mockDismiss = jest.fn();
    render(
      <Badge dismissible onDismiss={mockDismiss}>
        Dismissible
      </Badge>,
    );
    expect(screen.getByLabelText("Dismiss badge")).toBeInTheDocument();
  });

  it("calls onDismiss when close button is clicked", async () => {
    const user = userEvent.setup();
    const mockDismiss = jest.fn();
    render(
      <Badge dismissible onDismiss={mockDismiss}>
        Click to dismiss
      </Badge>,
    );

    const closeButton = screen.getByLabelText("Dismiss badge");
    await user.click(closeButton);

    expect(mockDismiss).toHaveBeenCalledTimes(1);
  });

  it("does not render close button when dismissible is false", () => {
    const mockDismiss = jest.fn();
    render(<Badge onDismiss={mockDismiss}>Not dismissible</Badge>);
    expect(screen.queryByLabelText("Dismiss badge")).not.toBeInTheDocument();
  });

  it("does not render close button when onDismiss is not provided", () => {
    render(<Badge dismissible>No handler</Badge>);
    expect(screen.queryByLabelText("Dismiss badge")).not.toBeInTheDocument();
  });
});
