import { render, screen, fireEvent } from "@testing-library/react";
import Dialog, { DialogTrigger } from "./index";
import { useState } from "react";

const DialogWithTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DialogTrigger onClick={() => setIsOpen(true)}>Open Dialog</DialogTrigger>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Dialog"
      >
        <p>Dialog content goes here</p>
      </Dialog>
    </>
  );
};

describe("Dialog", () => {
  it("does not render when closed", () => {
    render(
      <Dialog isOpen={false} onClose={() => {}} title="Test">
        Content
      </Dialog>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog">
        Content
      </Dialog>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Dialog isOpen={true} onClose={onClose} title="Test">
        Content
      </Dialog>,
    );

    const closeButton = screen.getByLabelText("Close dialog");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    render(
      <Dialog isOpen={true} onClose={onClose} title="Test">
        Content
      </Dialog>,
    );

    const backdrop = screen.getByRole("presentation");
    fireEvent.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not close when dialog content is clicked", () => {
    const onClose = jest.fn();
    render(
      <Dialog isOpen={true} onClose={onClose} title="Test">
        Content
      </Dialog>,
    );

    const dialog = screen.getByRole("dialog");
    fireEvent.click(dialog);

    expect(onClose).not.toHaveBeenCalled();
  });

  it("has proper ARIA attributes", () => {
    render(
      <Dialog isOpen={true} onClose={() => {}} title="Test Dialog">
        Content
      </Dialog>,
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby", "dialog-title");
  });

  it("renders without title", () => {
    render(
      <Dialog isOpen={true} onClose={() => {}}>
        Content without title
      </Dialog>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.queryByText("dialog-title")).not.toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(
      <Dialog isOpen={true} onClose={() => {}} size="small">
        Content
      </Dialog>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("dialog-small");

    rerender(
      <Dialog isOpen={true} onClose={() => {}} size="medium">
        Content
      </Dialog>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("dialog-medium");

    rerender(
      <Dialog isOpen={true} onClose={() => {}} size="large">
        Content
      </Dialog>,
    );
    expect(screen.getByRole("dialog")).toHaveClass("dialog-large");
  });
});

describe("DialogTrigger", () => {
  it("renders trigger button", () => {
    const onClick = jest.fn();
    render(<DialogTrigger onClick={onClick}>Open</DialogTrigger>);

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<DialogTrigger onClick={onClick}>Open</DialogTrigger>);

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const onClick = jest.fn();
    render(
      <DialogTrigger onClick={onClick} className="custom-class">
        Open
      </DialogTrigger>,
    );

    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("passes additional props to button", () => {
    const onClick = jest.fn();
    render(
      <DialogTrigger
        onClick={onClick}
        additionalProps={{ "aria-label": "Open modal" }}
      >
        Open
      </DialogTrigger>,
    );

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Open modal",
    );
  });

  it("works with Dialog component", () => {
    render(<DialogWithTrigger />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open Dialog" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
