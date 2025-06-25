import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "../_components/ErrorMessage";

describe("Error rendering", () => {
  it("Error text", () => {
    render(<ErrorMessage text="errorMessage" />);
    const element = screen.getByTestId("error");
    expect(element).toHaveTextContent("error");
  });
});
