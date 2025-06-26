import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EstateType } from "../../_components/EstateType";

describe("Summary integration test", () => {
  beforeEach(() => {
    render(
      <EstateType
        setEstateType={() => {}}
        estateType={{ name: "", value: "" }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
  });

  it("Renders error", async () => {
    const element = screen.getByText("Pokračovat");
    await userEvent.click(element);
    screen.debug();
    const errorElement = await screen.getByText(
      "Vyberte některý z typů nemovitosti"
    );
    expect(errorElement).toBeInTheDocument();
  });
});
