import React from "react";
import { beforeEach, describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RepublicMap } from "../../_components/RepublicMap";

describe("RepublicMap integration test", () => {
  beforeEach(() => {
    render(
      <RepublicMap
        setDistrict={() => {}}
        setRegion={() => {}}
        district={{ name: "", value: "" }}
        region={{ name: "", value: "" }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
  });
  it("Renders correct error", async () => {
    const nextButton = screen.getByText("Pokračovat");
    await userEvent.click(nextButton);
    const error = await screen.findByTestId("error");
    expect(error).toBeInTheDocument();
  });

  it("User can change regionData and correct district renders", async () => {
    const selectElement = await screen.findByTestId("selectRegion");
    await userEvent.selectOptions(selectElement, "praha");
    await expect(selectElement).toHaveValue("praha");
    const districtElement = await screen.findAllByTestId("district");
    const district = await districtElement[0];
    expect(district).toHaveTextContent("Hlavní město Praha");
  });
});
