"use client";

import { useState } from "react";
import { RealEstateCategoryType } from "../../../_types/FormularTypes";

import { headings } from "@/app/_data/formBodyHeadings";
import { realEstateData } from "@/app/_data/realEstate";
import { Heading } from "../../Headings/_components/FormBodyHeading";
import { ErrorMessage } from "../../ErrorMessages/_components/ErrorMessage";
import { RealEstateButton } from "./RealEstateCategoryButton";
import { NavigationButton } from "../../Buttons/_components/NavigationButtons";

export function RealEstateCategory({
  setRealEstateCategory,
  realEstateCategory,
  setFormBodyPart,
  formBodyPart,
}: {
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
  formBodyPart: number;
  realEstateCategory: RealEstateCategoryType;
  setRealEstateCategory: React.Dispatch<
    React.SetStateAction<{ name: string; value: string }>
  >;
}) {
  const [type, setType] = useState<RealEstateCategoryType>(realEstateCategory);
  const [error, setError] = useState<string | null>(null);

  function NextStep() {
    if (!type.name) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("Vyberte některý z typů nemovitosti");
      return;
    }

    setFormBodyPart(formBodyPart + 1);
    setRealEstateCategory(type);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full">
        <Heading text={headings[formBodyPart]} />
        {error != null && <ErrorMessage text={error} />}

        <div className="grid md:grid-cols-3 md:gap-8 gap-3 max-w-[700px] w-full">
          {realEstateData.map((item) => {
            return (
              <RealEstateButton
                key={item.name}
                name={item.name}
                value={item.value}
                selected={type.value === item.value}
                onClick={() => {
                  setError(null);
                  setType({ name: item.name, value: item.value });
                }}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
          <NavigationButton
            text="Zpět"
            onClick={() => {
              setFormBodyPart(formBodyPart - 1);
              setRealEstateCategory(type);
            }}
          />
          <NavigationButton
            text="Pokračovat"
            onClick={() => {
              NextStep();
            }}
          />
        </div>
      </div>
    </>
  );
}
