import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "@testing-library/react";
import { DesktopHeader } from "../_components/DesktopHeader";

describe("DesktopHeader links rendering", () => {
  beforeEach(() => {
    render(<DesktopHeader />);
  });

  it("Correct links rendering", async () => {
    const linkOne = screen.getByTestId("link0");
    expect(linkOne).toBeInTheDocument();

    const linkTwo = screen.getByTestId("link1");
    expect(linkTwo).toBeInTheDocument();

    const linkThree = screen.getByTestId("link2");
    expect(linkThree).toBeInTheDocument();
  });
});
