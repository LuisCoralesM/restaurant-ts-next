import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("when homepage renders", () => {
  render(<Home />);
  it("renders the title correctly", () => {
    expect(screen.getByText("Get started by editing")).toBeDefined();
  });
});
