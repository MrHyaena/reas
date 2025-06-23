"use client";

import { useState } from "react";
import { RealEstateCategoryType } from "../../_types/FormularTypes";
import { FaHouseChimney, FaShop, FaVectorSquare } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { PiHouseLineFill } from "react-icons/pi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { Heading } from "../Headings/FormBodyHeading";
import { headings } from "@/app/_data/formBodyHeadings";
import { realEstateData } from "@/app/_data/realEstate";
import { ErrorMessage } from "../ErrorMessages/ErrorMessage";

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
  const [type, setType] = useState<{ name: string; value: string }>(
    realEstateCategory
  );
  const [error, setError] = useState<string | null>(null);

  function NextStep() {
    if (type.name.length == 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("Vyberte některý z typů nemovitosti");
    } else {
      setFormBodyPart(formBodyPart + 1);
      setRealEstateCategory(type);
    }
  }

  function RealEstateButton({ text, value }: { text: string; value: string }) {
    let shadow: string | null = null;
    let color = "bg-slate-700";
    if (value == type.value) {
      color = "bg-primary";
      shadow = "shadow-[5px_5px_0px_0px]";
    }

    return (
      <>
        <button
          onClick={() => {
            setError(null);
            setType({ name: text, value: value });
          }}
          className={`flex items-center gap-2 justify-center p-3 ${color} ${shadow} rounded-sm text-textLight font-oswald text-xl cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
        >
          {value == "flat" && <FaHouseChimney />}
          {value == "house" && <MdApartment />}
          {value == "parcel" && <FaVectorSquare />}
          {value == "commerce" && <FaShop />}
          {value == "cabin" && <PiHouseLineFill />}
          {value == "other" && <BsQuestionSquareFill />}

          {text}
        </button>
      </>
    );
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
                key={item.text}
                text={item.text}
                value={item.value}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
          <button
            onClick={() => {
              setFormBodyPart(formBodyPart - 1);
              setRealEstateCategory(type);
            }}
            className="buttonBasics md:px-4 p-2 md:py-3   hover:scale-105"
          >
            Zpět
          </button>
          <button
            onClick={() => {
              NextStep();
            }}
            className="buttonBasics md:px-4 p-2 md:py-3  hover:scale-105"
          >
            Pokračovat
          </button>
        </div>
      </div>
    </>
  );
}
