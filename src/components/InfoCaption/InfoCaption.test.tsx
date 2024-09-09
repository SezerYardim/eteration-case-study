import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import "@testing-library/jest-dom";
import InfoCaption from "./InfoCaption";

describe("InfoCaption", () => {
  const caption = "Test caption!";
  beforeEach(() => {
    render(<InfoCaption caption={caption} />);
  });

  it("should render caption prop", () => {
    const captionText = screen.getByTestId("info-caption");
    expect(captionText).toHaveTextContent(caption);
  });
});
