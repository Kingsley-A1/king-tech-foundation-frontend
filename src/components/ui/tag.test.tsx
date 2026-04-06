import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "./tag";

describe("Tag", () => {
  it("renders children text", () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies filled variant by default", () => {
    const { container } = render(<Tag>Filled</Tag>);
    const span = container.querySelector("span");
    expect(span?.className).toContain("bg-ktf-blue/8");
  });

  it("applies outline variant", () => {
    const { container } = render(<Tag variant="outline">Outline</Tag>);
    const span = container.querySelector("span");
    expect(span?.className).toContain("border");
  });

  it("renders remove button when onRemove is provided", () => {
    render(<Tag onRemove={vi.fn()}>Removable</Tag>);
    expect(screen.getByLabelText("Remove")).toBeInTheDocument();
  });

  it("does not render remove button without onRemove", () => {
    render(<Tag>Static</Tag>);
    expect(screen.queryByLabelText("Remove")).not.toBeInTheDocument();
  });

  it("calls onRemove when remove button is clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    render(<Tag onRemove={onRemove}>Removable</Tag>);

    await user.click(screen.getByLabelText("Remove"));
    expect(onRemove).toHaveBeenCalledOnce();
  });

  it("merges custom className", () => {
    const { container } = render(<Tag className="extra">Styled</Tag>);
    expect(container.querySelector("span")).toHaveClass("extra");
  });
});
