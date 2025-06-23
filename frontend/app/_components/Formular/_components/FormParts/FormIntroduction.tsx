"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FormPart } from "./FormCarousel";
import { formIntroductionTexts } from "@/app/_data/formIntroductionsTexts";

type FormIntroduction = {
  setformPart: React.Dispatch<React.SetStateAction<FormPart>>;
};

export function FormIntroduction({ setformPart }: FormIntroduction) {
  const [text, setText] = useState<number>(0);

  return (
    <>
      <div className="grid md:grid-cols-[1fr_4fr_1fr] grid-cols-2 items-center justify-items-center md:max-w-[80%] md:gap-0 gap-y-5">
        {text != 0 && (
          <>
            <div
              onClick={() => {
                setText(text - 1);
              }}
              className="p-2 md:block hidden row-start-1 mt-10 bg-primary rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out hover:shadow-[4px_4px_0px_0px] shadow-white "
            >
              <FaChevronLeft className="text-textLight text-2xl " />
            </div>
          </>
        )}
        <div className="md:row-start-1 row-start-2 md:col-start-2 col-span-2 md:col-span-1 flex flex-col items-center gap-5">
          <h2 className="text-textLight  text-center md:leading-[80px]">
            {formIntroductionTexts[text]}
          </h2>
          <div className="">
            {text == formIntroductionTexts.length - 1 ? (
              <>
                {" "}
                <button
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
                  onClick={() => {
                    setformPart(2);
                  }}
                  className="hidden md:block text-textLight font-oswald uppercase text-lg cursor-pointer p-2 hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out rounded-sm"
                >
                  Přejít na formulář
                </button>
                <button
                  onClick={() => {
                    setText(text + 1);
                  }}
                  className=" buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105 md:mt-10"
                >
                  Pokračovat
                </button>
              </>
            )}
          </div>
        </div>
        {text < formIntroductionTexts.length - 1 && (
          <>
            <div
              onClick={() => {
                if (text < formIntroductionTexts.length - 1) {
                  setText(text + 1);
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
