import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EstateTypeButton } from "../_components/EstateTypeButton";

describe("RealEstateCategoryButton rendering", () => {
  beforeEach(() => {
    render(
      <EstateTypeButton
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
