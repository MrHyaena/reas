import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RealEstateCategory } from "../_components/RealEstateCategory";
import { realEstateData } from "@/app/_data/realEstate";

describe("RealEstateCategory rendering", () => {
  beforeEach(() => {
    render(
      <RealEstateCategory
        setRealEstateCategory={() => {}}
        realEstateCategory={{ name: "", value: "" }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[0].name}`, () => {
    screen.debug();
    const element = screen.getByText(realEstateData[0].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[1].name}`, () => {
    const element = screen.getByText(realEstateData[1].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[2].name}`, () => {
    const element = screen.getByText(realEstateData[2].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[3].name}`, () => {
    const element = screen.getByText(realEstateData[3].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[4].name}`, () => {
    const element = screen.getByText(realEstateData[4].name);
    expect(element).toBeInTheDocument();
  });

  it(`Render correct realEstateCategory button with text ${realEstateData[5].name}`, () => {
    const element = screen.getByText(realEstateData[5].name);
    expect(element).toBeInTheDocument();
  });
});
