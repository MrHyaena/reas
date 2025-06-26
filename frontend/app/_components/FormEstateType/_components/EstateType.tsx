"use client";

import { useState } from "react";

import { headings } from "@/app/_data/formBodyHeadings";
import { FormBodyHeading } from "../../Headings/_components/FormBodyHeading";
import { ErrorMessage } from "../../ErrorMessages/_components/ErrorMessage";
import { NavigationButton } from "../../Buttons/_components/NavigationButtons";
import { EstateTypeButton } from "./EstateTypeButton";
import { estateTypeData } from "@/app/_data/realEstate";
import { EstateTypeType } from "@/app/_types/FormularTypes";

//Component for Form. Allowes user to pick realEstate category

export function EstateType({
  setEstateType,
  estateType,
  setFormBodyPart,
  formBodyPart,
}: {
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
  formBodyPart: number;
  estateType: EstateTypeType;
  setEstateType: React.Dispatch<
    React.SetStateAction<{ name: string; value: string }>
  >;
}) {
  const [type, setType] = useState<EstateTypeType>(estateType);
  const [error, setError] = useState<string | null>(null);

  function NextStep() {
    if (!type.name) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("Vyberte některý z typů nemovitosti");
      return;
    }

    setFormBodyPart(formBodyPart + 1);
    setEstateType(type);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full">
        <FormBodyHeading text={headings[formBodyPart]} />
        {error != null && <ErrorMessage text={error} />}

        <div className="grid md:grid-cols-3 md:gap-8 gap-3 max-w-[700px] w-full">
          {estateTypeData.map((item) => {
            return (
              <EstateTypeButton
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
              setEstateType(type);
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
