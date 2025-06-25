import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormIntroduction } from "../../_components/FormIntroduction";
import { formIntroductionTexts } from "@/app/_data/formIntroductionsTexts";

describe("FormIntroduction integration test", () => {
  beforeEach(() => {
    render(<FormIntroduction setformPart={() => {}} />);
  });

  screen.debug();

  it("Workflow from start to last part", async () => {
    //Has continue button
    const continueButton = screen.queryAllByTestId("continue");
    expect(continueButton).toHaveLength(2);

    //Heading matches first step
    const headingOne = screen.getByText(formIntroductionTexts[0]);
    expect(headingOne).toBeInTheDocument();

    //Back button does not exist in first step
    const backButton = await screen.queryAllByTestId("back");
    expect(backButton).toHaveLength(0);

    //User clicks continue button
    await userEvent.click(continueButton[0]);

    //Heading matches next step
    const headingTwo = screen.getByText(formIntroductionTexts[1]);
    expect(headingTwo).toBeInTheDocument();

    //Back button now exist in following steps
    const backButtonExists = await screen.queryAllByTestId("back");
    expect(backButtonExists).toHaveLength(1);

    //User clicks continue button
    await userEvent.click(continueButton[0]);

    //Heading matches next step
    const headingThree = screen.getByText(formIntroductionTexts[2]);
    expect(headingThree).toBeInTheDocument();

    //User clicks continue button
    await userEvent.click(continueButton[0]);

    //Heading matches next step
    const headingFour = screen.getByText(formIntroductionTexts[3]);
    expect(headingFour).toBeInTheDocument();

    //User clicks continue button
    await userEvent.click(continueButton[0]);

    //Heading matches next step
    const headingFive = screen.getByText(formIntroductionTexts[4]);
    expect(headingFive).toBeInTheDocument();

    //User clicks continue button
    await userEvent.click(continueButton[0]);

    //Heading matches next step
    const headingSix = screen.getByText(formIntroductionTexts[5]);
    expect(headingSix).toBeInTheDocument();

    //No continue button in last step
    const continueButtonLast = screen.queryAllByTestId("continue");
    expect(continueButtonLast).toHaveLength(0);
  });
});
