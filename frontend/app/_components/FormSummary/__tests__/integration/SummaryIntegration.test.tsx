import React from "react";
import { beforeEach, describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Summary } from "../../_components/Summary";

describe("Summary integration test", () => {
  beforeEach(() => {
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
        setFormBodyPart={() => {}}
      />
    );
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
