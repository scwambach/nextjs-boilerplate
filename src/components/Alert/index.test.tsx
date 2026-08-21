import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./index";

describe("Alert", () => {
  it("renders alert message", () => {
    render(<Alert>This is an alert message</Alert>);
    expect(screen.getByText("This is an alert message")).toBeInTheDocument();
  });

  it("renders with title", () => {
    render(<Alert title="Alert Title">Message content</Alert>);
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Message content")).toBeInTheDocument();
  });

  it("renders neutral variant by default", () => {
    render(<Alert>Default alert</Alert>);
    const alert = screen.getByRole("status");
    expect(alert).toHaveClass("alert-neutral");
  });

  it("renders info variant", () => {
    render(<Alert variant="info">Info alert</Alert>);
    const alert = screen.getByRole("status");
    expect(alert).toHaveClass("alert-info");
  });

  it("renders warning variant with alert role", () => {
    render(<Alert variant="warning">Warning alert</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("alert-warning");
    expect(alert).toHaveAttribute("aria-live", "assertive");
  });

  it("renders critical variant with alert role", () => {
    render(<Alert variant="critical">Critical alert</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("alert-critical");
    expect(alert).toHaveAttribute("aria-live", "assertive");
  });

  it("does not render close button when not dismissible", () => {
    render(<Alert>Non-dismissible alert</Alert>);
    expect(screen.queryByLabelText("Close alert")).not.toBeInTheDocument();
  });

  it("renders close button when dismissible", () => {
    const onClose = jest.fn();
    render(
      <Alert dismissible onClose={onClose}>
        Dismissible alert
      </Alert>,
    );
    expect(screen.getByLabelText("Close alert")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Alert dismissible onClose={onClose}>
        Dismissible alert
      </Alert>,
    );

    const closeButton = screen.getByLabelText("Close alert");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not render close button when dismissible but no onClose", () => {
    render(<Alert dismissible>Dismissible without handler</Alert>);
    expect(screen.queryByLabelText("Close alert")).not.toBeInTheDocument();
  });

  it("has proper aria-live for info variant", () => {
    render(<Alert variant="info">Info message</Alert>);
    const alert = screen.getByRole("status");
    expect(alert).toHaveAttribute("aria-live", "polite");
  });

  it("has proper aria-live for neutral variant", () => {
    render(<Alert variant="neutral">Neutral message</Alert>);
    const alert = screen.getByRole("status");
    expect(alert).toHaveAttribute("aria-live", "polite");
  });
});
