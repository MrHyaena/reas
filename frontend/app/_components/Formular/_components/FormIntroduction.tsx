"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FormPart } from "./FormCarousel";

type FormIntroduction = {
  setformPart: React.Dispatch<React.SetStateAction<FormPart>>;
};

export function FormIntroduction({ setformPart }: FormIntroduction) {
  const [text, setText] = useState<number>(0);

  const textsArray: string[] = [
    "Jak to bude probíhat",
    "Formulář má dvě části",
    "Nejprve vyplníte osobní údaje, abychom s vámi měli spojení",
    "Následně nám popíšete vaši nemovitost",
    "A to je všechno! Teď už jen chvílku počkáte na vytvoření účtu a můžeme společně prodávat",
    "Pojďme společně na to",
  ];

  return (
    <>
      <div className="grid grid-cols-[1fr_4fr_1fr] items-center justify-items-center w-[80%]">
        {text != 0 && (
          <>
            <div className="p-2 bg-primary rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out">
              <FaChevronLeft
                className="text-textLight text-2xl "
                onClick={() => {
                  setText(text - 1);
                }}
              />
            </div>
          </>
        )}
        <div className="col-start-2 flex flex-col items-center gap-5">
          <h2 className="text-textLight  text-center leading-[80px]">
            {textsArray[text]}
          </h2>
          {text == textsArray.length - 1 && (
            <button
              onClick={() => {
                setformPart(2);
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Přejít na formulář
            </button>
          )}
        </div>
        {text < textsArray.length - 1 && (
          <>
            <div className="p-2 bg-primary rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out col-start-3">
              <FaChevronRight
                className="text-textLight text-2xl "
                onClick={() => {
                  console.log(text);
                  console.log(textsArray.length);
                  if (text < textsArray.length - 1) {
                    setText(text + 1);
                  }
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
