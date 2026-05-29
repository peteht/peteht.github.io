import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Work from "@/app/work/page";
import Skills from "@/app/skills/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Home page", () => {
  it("renders bio text", () => {
    render(<Home />);
    expect(screen.getByText(/senior front-end engineer/i)).toBeInTheDocument();
  });

  it("renders Work and Skills links", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skills/i })).toBeInTheDocument();
  });
});

describe("Work page", () => {
  it("renders Selected Work heading", () => {
    render(<Work />);
    expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
  });

  it("renders all projects", () => {
    render(<Work />);
    expect(screen.getByText("Oregon Gridiron")).toBeInTheDocument();
    expect(screen.getByText("Super Top Secret")).toBeInTheDocument();
    expect(screen.getByText("Marcus Mariota Road to the Heisman")).toBeInTheDocument();
  });

  it("renders award links with data-award attribute", () => {
    render(<Work />);
    const awardLinks = document.querySelectorAll("[data-award]");
    expect(awardLinks.length).toBeGreaterThan(0);
  });
});

describe("Skills page", () => {
  it("renders Skills heading", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: /^skills$/i })).toBeInTheDocument();
  });

  it("renders both skill groups", () => {
    render(<Skills />);
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Leadership")).toBeInTheDocument();
  });
});
