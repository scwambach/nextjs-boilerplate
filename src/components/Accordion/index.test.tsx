import { render, screen, fireEvent } from "@testing-library/react";
import Accordion, { type AccordionItem } from "./index";

const mockItems: AccordionItem[] = [
  {
    id: "1",
    title: "First Item",
    content: "First item content",
  },
  {
    id: "2",
    title: "Second Item",
    content: "Second item content",
  },
  {
    id: "3",
    title: "Third Item",
    content: "Third item content",
  },
];

describe("Accordion", () => {
  it("renders all accordion items", () => {
    render(<Accordion items={mockItems} />);

    expect(screen.getByText("First Item")).toBeInTheDocument();
    expect(screen.getByText("Second Item")).toBeInTheDocument();
    expect(screen.getByText("Third Item")).toBeInTheDocument();
  });

  it("initially collapses all items", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
  });

  it("expands item when clicked", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    fireEvent.click(firstButton);

    expect(firstButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("First item content")).toBeVisible();
  });

  it("collapses item when clicked again", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });

    // Expand
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Collapse
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
  });

  it("allows only one item expanded by default", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    const secondButton = screen.getByRole("button", { name: /Second Item/i });

    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(secondButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(secondButton).toHaveAttribute("aria-expanded", "true");
  });

  it("allows multiple items expanded when allowMultiple is true", () => {
    render(<Accordion items={mockItems} allowMultiple />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    const secondButton = screen.getByRole("button", { name: /Second Item/i });

    fireEvent.click(firstButton);
    fireEvent.click(secondButton);

    expect(firstButton).toHaveAttribute("aria-expanded", "true");
    expect(secondButton).toHaveAttribute("aria-expanded", "true");
  });

  it("has proper ARIA attributes", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    const panelId = firstButton.getAttribute("aria-controls");

    expect(panelId).toBeTruthy();
    const panel = document.getElementById(panelId!);
    expect(panel).toHaveAttribute("role", "region");
    expect(panel).toHaveAttribute("id", panelId!);
  });

  it("toggles icon when expanded/collapsed", () => {
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", { name: /First Item/i });
    const icon = firstButton.querySelector(".accordion-icon");

    expect(icon).toHaveTextContent("+");

    fireEvent.click(firstButton);
    expect(icon).toHaveTextContent("−");

    fireEvent.click(firstButton);
    expect(icon).toHaveTextContent("+");
  });
});
