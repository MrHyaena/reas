"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { formIntroductionTexts } from "@/app/_data/formIntroductionsTexts";
import { FormPart } from "./FormCarousel";

type FormIntroduction = {
  setformPart: React.Dispatch<React.SetStateAction<FormPart>>;
};

//Introduction to Form

export function FormIntroduction({ setformPart }: FormIntroduction) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <>
      <div className="grid md:grid-cols-[1fr_4fr_1fr] grid-cols-2 items-center justify-items-center md:max-w-[80%] md:gap-0 gap-y-5">
        {currentStep != 0 && (
          <>
            <div
              data-testid="back"
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
              className="p-2 md:block hidden row-start-1 mt-10 bg-primary rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out hover:shadow-[4px_4px_0px_0px] shadow-white "
            >
              <FaChevronLeft className="text-textLight text-2xl " />
            </div>
          </>
        )}
        <div className="md:row-start-1 row-start-2 md:col-start-2 col-span-2 md:col-span-1 flex flex-col items-center gap-5">
          <h2 className="text-textLight  text-center md:leading-[80px]">
            {formIntroductionTexts[currentStep]}
          </h2>
          <div className="">
            {currentStep == formIntroductionTexts.length - 1 ? (
              <>
                {" "}
                <button
                  data-testid="form"
                  onClick={() => {
                    setformPart(2);
                  }}
                  className=" buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105 md:mt-10"
                >
                  Přejít na formulář
                </button>
              </>
            ) : (
              <>
                <button
                  data-testid="form"
                  onClick={() => {
                    setformPart(2);
                  }}
                  className="hidden md:block text-textLight font-oswald uppercase text-lg cursor-pointer p-2 hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out rounded-sm"
                >
                  Přejít na formulář
                </button>
                <button
                  data-testid="continue"
                  onClick={() => {
                    setCurrentStep(currentStep + 1);
                  }}
                  className="md:hidden buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105 md:mt-10"
                >
                  Pokračovat
                </button>
              </>
            )}
          </div>
        </div>
        {currentStep < formIntroductionTexts.length - 1 && (
          <>
            <div
              data-testid="continue"
              onClick={() => {
                if (currentStep < formIntroductionTexts.length - 1) {
                  setCurrentStep(currentStep + 1);
                }
              }}
              className="p-2 md:block hidden col-start-2 row-start-1 mt-10 bg-primary rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out md:col-start-3 hover:shadow-[4px_4px_0px_0px] shadow-white"
            >
              <FaChevronRight className="text-textLight text-2xl " />
            </div>
          </>
        )}
      </div>
    </>
  );
}
