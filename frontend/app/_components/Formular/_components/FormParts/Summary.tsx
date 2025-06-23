"use client";

import { headings } from "@/app/_data/formBodyHeadings";
import { Heading } from "../../../Headings/_components/FormBodyHeading";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import {
  DataForSubmitType,
  DistrictType,
  PersonalInfoType,
  RealEstateCategoryType,
  RegionType,
} from "../../_types/FormularTypes";
import { useState } from "react";

export function Summary({
  formBodyPart,
  realEstateCategory,
  region,
  district,
  personalInfo,
  setFormBodyPart,
}: {
  formBodyPart: number;
  realEstateCategory: RealEstateCategoryType;
  region: RegionType;
  district: DistrictType;
  personalInfo: PersonalInfoType;
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [dataOk, setDataOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function SubmitForm() {
    const dataForSubmit: DataForSubmitType = {
      personalInfo: personalInfo,
      realEstateCategory: realEstateCategory.value,
      region: region.value,
      district: district.value,
    };

    const response = await fetch("http://localhost:4000/lead", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForSubmit),
    });
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      setDataOk(true);
    }

    if (!response.ok) {
      setError(json.message);
    }
  }

  return (
    <>
      {dataOk ? (
        <>
          <div className="flex flex-col items-center justify-center gap-10 w-full overflow-hidden h-full">
            <h5 className="text-textLight">
              Děkujeme za důvěru, bzdy se Vám ozveme!
            </h5>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-10 w-full overflow-hidden">
          <Heading text={headings[formBodyPart]} />
          <div className="flex flex-col gap-5 w-full md:min-w-[50%] md:w-auto">
            <div className="animate-fallFromLeft bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 md:p-5 p-3">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <FaHouseChimney className="text-primary" />
                <h5 className="">Nemovitost</h5>
              </div>
              <div className="text-base">
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Typ nemovitosti:</p>
                  <p>{realEstateCategory.name}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Kraj:</p>
                  <p>{region.name}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Okres:</p>
                  <p>{district.name}</p>
                </div>
              </div>
            </div>
            <div className="animate-fallFromRight bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 md:p-5 p-3">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <IoMdContact className="text-primary" />
                <h5 className="">Kontaktní údaje</h5>
              </div>
              <div className="text-base">
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Křestní jméno:</p>
                  <p>{personalInfo.firstName}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Příjmení:</p>
                  <p>{personalInfo.secondName}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Email:</p>
                  <p>{personalInfo.email}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Telefon:</p>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
              }}
              className="buttonBasics md:px-4 p-2 md:py-3   hover:scale-105"
            >
              Zpět
            </button>
            <button
              onClick={() => {
                SubmitForm();
              }}
              className="buttonBasics md:px-4 p-2 md:py-3  hover:scale-105"
            >
              Odeslat
            </button>
          </div>
        </div>
      )}
    </>
  );
}
