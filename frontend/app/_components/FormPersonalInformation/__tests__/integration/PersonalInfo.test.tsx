import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PersonalInfo } from "../../_components/PersonalInfo";

describe("PersonalInfo integration test", () => {
  it("Render correct error with no data", async () => {
    render(
      <PersonalInfo
        setPersonalInfo={() => {}}
        personalInfo={{ firstName: "", secondName: "", email: "", phone: "" }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
    const nextButton = await screen.getByText("Pokračovat");
    await userEvent.click(nextButton);
    const error = await screen.findByText("Chybí jméno nebo příjmení");
    expect(error).toBeInTheDocument();
  });

  it("Render correct error with no email phone", async () => {
    render(
      <PersonalInfo
        setPersonalInfo={() => {}}
        personalInfo={{
          firstName: "name",
          secondName: "second",
          email: "",
          phone: "",
        }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
    const nextButton = await screen.getByText("Pokračovat");
    await userEvent.click(nextButton);
    const error = await screen.findByText("Zadejte platný email");
    expect(error).toBeInTheDocument();
  });

  it("Render correct error with no phone", async () => {
    render(
      <PersonalInfo
        setPersonalInfo={() => {}}
        personalInfo={{
          firstName: "name",
          secondName: "second",
          email: "email@gmail.com",
          phone: "",
        }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
    const nextButton = await screen.getByText("Pokračovat");
    await userEvent.click(nextButton);
    const error = await screen.findByText(
      "Zadejte platný telefon bez předvolby"
    );
    expect(error).toBeInTheDocument();
  });

  it("Render no error", async () => {
    render(
      <PersonalInfo
        setPersonalInfo={() => {}}
        personalInfo={{
          firstName: "name",
          secondName: "second",
          email: "email@gmail.com",
          phone: "999999999",
        }}
        setFormBodyPart={() => {}}
        formBodyPart={2}
      />
    );
    const nextButton = await screen.getByText("Pokračovat");
    await userEvent.click(nextButton);
    const error = await screen.queryByTestId("Zadejte platný email");
    expect(error).not.toBeInTheDocument();
  });
});
