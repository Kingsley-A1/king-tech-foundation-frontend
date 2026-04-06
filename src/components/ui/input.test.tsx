import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with a label", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("generates id from label", () => {
    render(<Input label="First Name" />);
    const input = screen.getByLabelText("First Name");
    expect(input.id).toBe("first-name");
  });

  it("uses custom id over generated one", () => {
    render(<Input label="Email" id="custom-email" />);
    const input = screen.getByLabelText("Email");
    expect(input.id).toBe("custom-email");
  });

  it("renders error message with alert role", () => {
    render(<Input label="Email" error="Invalid email" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Invalid email");
  });

  it("sets aria-invalid when error is present", () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("does not set aria-invalid without error", () => {
    render(<Input label="Email" />);
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
  });

  it("renders hint text", () => {
    render(<Input label="Email" hint="We'll never share your email" />);
    expect(
      screen.getByText("We'll never share your email"),
    ).toBeInTheDocument();
  });

  it("hides hint when error is shown", () => {
    render(<Input label="Email" hint="Helper" error="Error" />);
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("applies error styling to input border", () => {
    render(<Input error="Invalid" />);
    expect(screen.getByRole("textbox").className).toContain("border-ktf-error");
  });

  it("sets aria-describedby to error id", () => {
    render(<Input label="Email" error="Required" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-describedby", "email-error");
  });

  it("sets aria-describedby to hint id when no error", () => {
    render(<Input label="Email" hint="Help" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-describedby", "email-hint");
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("passes through native input props", () => {
    render(<Input placeholder="Enter email" type="email" required />);
    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toBeRequired();
  });
});
