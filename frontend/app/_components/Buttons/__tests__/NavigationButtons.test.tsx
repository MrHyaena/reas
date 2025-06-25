import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavigationButton } from "../_components/NavigationButtons";

describe("Navigation button rendering", () => {
  it("Navigation button text", () => {
    render(<NavigationButton text="navigation" onClick={() => {}} />);
    const element = screen.getByTestId("navigationButton");
    expect(element).toHaveTextContent("navigation");
  });
});
