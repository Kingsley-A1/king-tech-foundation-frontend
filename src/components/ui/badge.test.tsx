import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies default variant styling", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default").className).toContain("bg-ktf-gray-100");
  });

  it("applies success variant", () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success").className).toContain("bg-emerald-50");
  });

  it("applies warning variant", () => {
    render(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByText("Warning").className).toContain("bg-amber-50");
  });

  it("applies error variant", () => {
    render(<Badge variant="error">Error</Badge>);
    expect(screen.getByText("Error").className).toContain("bg-red-50");
  });

  it("applies info variant", () => {
    render(<Badge variant="info">Info</Badge>);
    expect(screen.getByText("Info").className).toContain("bg-blue-50");
  });

  it("applies outline variant", () => {
    render(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText("Outline").className).toContain("bg-transparent");
  });

  it("applies sm size", () => {
    render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small").className).toContain("text-[11px]");
  });

  it("applies md size by default", () => {
    render(<Badge>Medium</Badge>);
    expect(screen.getByText("Medium").className).toContain("text-xs");
  });

  it("is rendered as a span", () => {
    const { container } = render(<Badge>Span</Badge>);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(<Badge className="my-class">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("my-class");
  });
});
