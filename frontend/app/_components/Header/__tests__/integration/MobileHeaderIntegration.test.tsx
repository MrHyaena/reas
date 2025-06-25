import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileHeader } from "../../_components/MobileHeader";

describe("MobileHeader links rendering", () => {
  beforeEach(() => {
    render(<MobileHeader />);
  });

  it("Rendering buttons after clicking on toggle", async () => {
    const toggleButtonElement = await screen.getByTestId(
      "mobileHeaderToggleButton"
    );

    await userEvent.click(toggleButtonElement);

    const linkOne = screen.getByTestId("link0");
    expect(linkOne).toBeInTheDocument();

    const linkTwo = screen.getByTestId("link1");
    expect(linkTwo).toBeInTheDocument();

    const linkThree = screen.getByTestId("link2");
    expect(linkThree).toBeInTheDocument();
  });
});
