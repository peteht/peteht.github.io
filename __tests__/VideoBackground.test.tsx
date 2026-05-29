import { render, screen } from "@testing-library/react";
import VideoBackground from "@/components/VideoBackground";

describe("VideoBackground", () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined);
  });

  it("renders a video with the correct src", () => {
    render(<VideoBackground src="/ambient-blue.mp4" />);
    const video = screen.getByRole("generic", { hidden: true }) as HTMLVideoElement ||
      document.querySelector("video");
    expect(document.querySelector("video")).not.toBeNull();
    expect(document.querySelector("video")?.getAttribute("src")).toBe("/ambient-blue.mp4");
  });

  it("has the correct video attributes", () => {
    render(<VideoBackground src="/ambient-blue.mp4" />);
    const video = document.querySelector("video")!;
    expect(video).toHaveAttribute("autoplay");
    expect((video as HTMLVideoElement).muted).toBe(true);
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("playsinline");
    expect(video).toHaveAttribute("data-era-only", "2016");
  });

  it("calls play() on mount", () => {
    render(<VideoBackground src="/ambient-blue.mp4" />);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
