import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders as a div by default", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("renders as article when specified", () => {
    const { container } = render(<Card as="article">Content</Card>);
    expect(container.firstChild?.nodeName).toBe("ARTICLE");
  });

  it("renders as section when specified", () => {
    const { container } = render(<Card as="section">Content</Card>);
    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("applies default padding (md)", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass("p-6");
  });

  it("applies custom padding", () => {
    const { container } = render(<Card padding="lg">Content</Card>);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("applies no padding", () => {
    const { container } = render(<Card padding="none">Content</Card>);
    expect(container.firstChild).not.toHaveClass("p-4");
    expect(container.firstChild).not.toHaveClass("p-6");
    expect(container.firstChild).not.toHaveClass("p-8");
  });

  it("merges custom className", () => {
    const { container } = render(<Card className="test-class">Content</Card>);
    expect(container.firstChild).toHaveClass("test-class");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Header Content</CardHeader>);
    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });
});

describe("CardTitle", () => {
  it("renders as h3", () => {
    render(<CardTitle>Title</CardTitle>);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Title");
  });
});

describe("CardDescription", () => {
  it("renders text", () => {
    render(<CardDescription>Description text</CardDescription>);
    expect(screen.getByText("Description text")).toBeInTheDocument();
  });
});

describe("CardContent", () => {
  it("renders children", () => {
    render(<CardContent>Body content</CardContent>);
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });
});

describe("Card composition", () => {
  it("renders full card with all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Card</CardTitle>
          <CardDescription>A description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "My Card",
    );
    expect(screen.getByText("A description")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
