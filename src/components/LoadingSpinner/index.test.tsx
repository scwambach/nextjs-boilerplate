import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./index";

describe("LoadingSpinner", () => {
  it("renders with status role", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<LoadingSpinner />);
    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("renders medium size by default", () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.querySelector(".loading-spinner.medium")).toBeInTheDocument();
  });

  it("renders small size", () => {
    const { container } = render(<LoadingSpinner size="small" />);
    expect(container.querySelector(".loading-spinner.small")).toBeInTheDocument();
  });

  it("renders large size", () => {
    const { container } = render(<LoadingSpinner size="large" />);
    expect(container.querySelector(".loading-spinner.large")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<LoadingSpinner className="custom-class" />);
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("has sr-only text for screen readers", () => {
    render(<LoadingSpinner />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
