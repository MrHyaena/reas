import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EstateType } from "../_components/EstateType";
import { estateTypeData } from "@/app/_data/realEstate";

describe("RealEstateCategory rendering", () => {
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

  it(`Render correct realEstateCategory button with text ${estateTypeData[0].name}`, () => {
    screen.debug();
    const element = screen.getByText(estateTypeData[0].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${estateTypeData[1].name}`, () => {
    const element = screen.getByText(estateTypeData[1].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${estateTypeData[2].name}`, () => {
    const element = screen.getByText(estateTypeData[2].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${estateTypeData[3].name}`, () => {
    const element = screen.getByText(estateTypeData[3].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${estateTypeData[4].name}`, () => {
    const element = screen.getByText(estateTypeData[4].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${estateTypeData[5].name}`, () => {
    const element = screen.getByText(estateTypeData[5].name);
    expect(element).toBeInTheDocument();
  });
});
