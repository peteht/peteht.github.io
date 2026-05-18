import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

const { usePathname } = jest.requireMock("next/navigation");

describe("Nav", () => {
  it("renders all nav links", () => {
    usePathname.mockReturnValue("/");
    render(<Nav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("applies active class to current route", () => {
    usePathname.mockReturnValue("/work");
    render(<Nav />);
    const workLink = screen.getByText("Work").closest("a");
    const homeLink = screen.getByText("Home").closest("a");
    expect(workLink?.className).toContain("active");
    expect(homeLink?.className).not.toContain("active");
  });
});
