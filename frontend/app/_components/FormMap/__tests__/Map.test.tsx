import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Map } from "../_components/Map";

describe("Map rendering", () => {
  render(
    <Map
      regionData={{ name: "region", value: "regionValue" }}
      setRegionData={() => {}}
      setDistrictData={() => {}}
    />
  );
  it("Renders correct regions", async () => {
    screen.debug();
    const regions = await screen.queryAllByTestId("region");
    expect(regions).toHaveLength(14);
  });
});
