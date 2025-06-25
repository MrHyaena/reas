import React from "react";
import { beforeEach, describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RealEstateCategoryButton } from "../_components/RealEstateCategoryButton";

describe("RealEstateCategoryButton rendering", () => {
  beforeEach(() => {
    render(
      <RealEstateCategoryButton
        name="byt"
        value="flat"
        selected={true}
        onClick={() => {}}
      />
    );
  });

  it("Render correct text in button", () => {
    const element = screen.getByText("byt");
    expect(element).toBeInTheDocument();
  });
});
