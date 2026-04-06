import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders with aria-hidden", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("applies animate-pulse class", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("animate-pulse");
  });

  it("renders text variant by default", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("h-4", "rounded");
  });

  it("renders circular variant", () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("renders rectangular variant", () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    expect(container.firstChild).toHaveClass("rounded-lg");
  });

  it("applies custom width and height", () => {
    const { container } = render(<Skeleton width={200} height={40} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("200px");
    expect(el.style.height).toBe("40px");
  });

  it("applies string width and height", () => {
    const { container } = render(<Skeleton width="50%" height="2rem" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("50%");
    expect(el.style.height).toBe("2rem");
  });

  it("renders multiple lines for text variant", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const lines = container.querySelectorAll(".animate-pulse");
    expect(lines.length).toBe(3);
  });

  it("makes last line shorter in multi-line mode", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const lines = container.querySelectorAll(".animate-pulse");
    expect(lines[2]).toHaveClass("w-3/4");
    expect(lines[0]).not.toHaveClass("w-3/4");
  });

  it("wraps multi-line in a container with aria-hidden", () => {
    const { container } = render(<Skeleton lines={3} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("merges custom className", () => {
    const { container } = render(<Skeleton className="my-custom" />);
    expect(container.firstChild).toHaveClass("my-custom");
  });
});
