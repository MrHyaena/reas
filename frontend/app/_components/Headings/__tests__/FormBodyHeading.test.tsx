import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormBodyHeading } from "../_components/FormBodyHeading";

describe("FormBodyHeading text rendering", () => {
  beforeEach(() => {
    render(<FormBodyHeading text="heading" />);
  });

  it("Correct text rendering", () => {
    const paragraphElement = screen.getByTestId("heading");
    expect(paragraphElement).toBeInTheDocument();
  });
});
