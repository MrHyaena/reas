import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DistrictButtons } from "../_components/DistrictButtons";

describe("DistrictButtons render", () => {
  render(
    <DistrictButtons
      regionData={{ name: "Hlavní město Praha", value: "praha" }}
      districtData={{ name: "district", value: "districtValue" }}
      onClick={() => {}}
    />
  );

  screen.debug();
  it("Renders district button with correct text", async () => {
    const district = await screen.queryAllByTestId("district");
    expect(district).toHaveLength(1);
    expect(district[0]).toHaveTextContent("Hlavní město Praha");
  });
});
