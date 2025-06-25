import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Summary } from "../_components/Summary";

describe("Summary rendering", () => {
  beforeEach(() => {
    function setFormBodyPart() {
      return 3;
    }

    render(
      <Summary
        formBodyPart={3}
        realEstateCategory={{ name: "category", value: "categoryValue" }}
        region={{ name: "region", value: "regionValue" }}
        district={{ name: "district", value: "districtValue" }}
        personalInfo={{
          firstName: "first",
          secondName: "second",
          email: "email",
          phone: "phone",
        }}
        setFormBodyPart={setFormBodyPart}
      />
    );
  });

  it("Render innitial summary block", () => {
    const element = screen.getByTestId("summaryBlock");
    expect(element).toBeInTheDocument();
  });

  it("Correct realEstateType text", () => {
    const element = screen.getByText("category");
    expect(element).toBeInTheDocument();
  });

  it("Correct region text", () => {
    const element = screen.getByText("region");
    expect(element).toBeInTheDocument();
  });

  it("Correct district text", () => {
    const element = screen.getByText("district");
    expect(element).toBeInTheDocument();
  });

  it("Correct firstName text", () => {
    const element = screen.getByText("first");
    expect(element).toBeInTheDocument();
  });

  it("Correct secondName text", () => {
    const element = screen.getByText("second");
    expect(element).toBeInTheDocument();
  });

  it("Correct email text", () => {
    const element = screen.getByText("email");
    expect(element).toBeInTheDocument();
  });

  it("Correct phone text", () => {
    const element = screen.getByText("phone");
    expect(element).toBeInTheDocument();
  });

  it("Correct back button text", () => {
    const element = screen.getByText("Zpet");
    expect(element).toBeInTheDocument();
  });

  it("Correct send button text", () => {
    const element = screen.getByText("Odeslat");
    expect(element).toBeInTheDocument();
  });

  it("Shows error", async () => {
    const sendButton = await screen.getByText("Odeslat");
    await userEvent.click(sendButton);
    const errorDiv = await screen.getByText(
      "Chyba je na naší straně. Zkuste to prosím později."
    );

    expect(errorDiv).toBeInTheDocument();
  });
});
