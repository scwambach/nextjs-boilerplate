import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageGallery from "./index";
import type { GalleryImage } from "./logic";

const mockImages: GalleryImage[] = [
  { src: "/image1.jpg", alt: "Image 1" },
  { src: "/image2.jpg", alt: "Image 2" },
  { src: "/image3.jpg", alt: "Image 3" },
];

describe("ImageGallery", () => {
  it("renders all thumbnails", () => {
    render(<ImageGallery images={mockImages} />);
    expect(screen.getByLabelText("View Image 1")).toBeInTheDocument();
    expect(screen.getByLabelText("View Image 2")).toBeInTheDocument();
    expect(screen.getByLabelText("View Image 3")).toBeInTheDocument();
  });

  it("applies custom columns", () => {
    const { container } = render(<ImageGallery images={mockImages} columns={4} />);
    const gallery = container.querySelector(".image-gallery");
    expect(gallery).toHaveStyle({ gridTemplateColumns: "repeat(4, 1fr)" });
  });

  it("uses 3 columns by default", () => {
    const { container } = render(<ImageGallery images={mockImages} />);
    const gallery = container.querySelector(".image-gallery");
    expect(gallery).toHaveStyle({ gridTemplateColumns: "repeat(3, 1fr)" });
  });

  it("opens lightbox when thumbnail is clicked", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    const thumbnail = screen.getByLabelText("View Image 1");
    await user.click(thumbnail);

    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument();
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("closes lightbox when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 1"));
    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Close lightbox"));
    expect(screen.queryByLabelText("Close lightbox")).not.toBeInTheDocument();
  });

  it("closes lightbox when backdrop is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 1"));
    
    const backdrop = container.querySelector(".lightbox-backdrop");
    if (backdrop) {
      await user.click(backdrop);
    }

    expect(screen.queryByLabelText("Close lightbox")).not.toBeInTheDocument();
  });

  it("navigates to next image", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 1"));
    expect(screen.getByText("1 / 3")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Next image"));
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("navigates to previous image", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 2"));
    expect(screen.getByText("2 / 3")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Previous image"));
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("does not show previous button on first image", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 1"));
    expect(screen.queryByLabelText("Previous image")).not.toBeInTheDocument();
  });

  it("does not show next button on last image", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 3"));
    expect(screen.queryByLabelText("Next image")).not.toBeInTheDocument();
  });

  it("displays image caption in lightbox", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 1"));
    expect(screen.getByText("Image 1")).toBeInTheDocument();
  });

  it("displays image counter", async () => {
    const user = userEvent.setup();
    render(<ImageGallery images={mockImages} />);

    await user.click(screen.getByLabelText("View Image 2"));
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });
});
