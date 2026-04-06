import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./modal";

describe("Modal", () => {
  it("does not render when closed", () => {
    render(
      <Modal open={false} onClose={vi.fn()}>
        <p>Modal Content</p>
      </Modal>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders dialog when open", () => {
    render(
      <Modal open onClose={vi.fn()}>
        <p>Modal Content</p>
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <Modal open onClose={vi.fn()} title="My Title">
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <Modal open onClose={vi.fn()} title="Title" description="Desc text">
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByText("Desc text")).toBeInTheDocument();
  });

  it("has aria-modal attribute", () => {
    render(
      <Modal open onClose={vi.fn()}>
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose}>
        <p>Content</p>
      </Modal>,
    );

    await user.click(screen.getByLabelText("Close dialog"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose on Escape key", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose}>
        <p>Content</p>
      </Modal>,
    );

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("locks body scroll when open", () => {
    const { unmount } = render(
      <Modal open onClose={vi.fn()}>
        <p>Content</p>
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("");
  });

  it("renders close button with accessible label", () => {
    render(
      <Modal open onClose={vi.fn()}>
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByLabelText("Close dialog")).toBeInTheDocument();
  });
});
