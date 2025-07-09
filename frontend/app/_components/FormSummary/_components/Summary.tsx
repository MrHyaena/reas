"use client";

import { headings } from "@/app/_data/formBodyHeadings";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import {
  DataForSubmitType,
  DistrictType,
  EstateTypeType,
  PersonalInfoType,
  RegionType,
} from "../../../_types/FormularTypes";
import { useState } from "react";
import { ErrorMessage } from "@/app/_components/ErrorMessages/_components/ErrorMessage";
import { AiOutlineLoading } from "react-icons/ai";
import { FormBodyHeading } from "../../Headings/_components/FormBodyHeading";
import { NavigationButton } from "../../Buttons/_components/NavigationButtons";

//Component for summarizing whole form and allowes user to send data

export function Summary({
  formBodyPart,
  estateType,
  region,
  district,
  personalInfo,
  setFormBodyPart,
}: {
  formBodyPart: number;
  estateType: EstateTypeType;
  region: RegionType;
  district: DistrictType;
  personalInfo: PersonalInfoType;
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [dataOk, setDataOk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Submit function for sending data to server
  async function submitForm() {
    setLoading(true);

    const dataForSubmit: DataForSubmitType = {
      personalInfo: personalInfo,
      estateType: estateType.value,
      region: region.value,
      district: district.value,
    };

    const API_URL = process.env.NEXT_PUBLIC_SERVER ?? "http://localhost:4000";

    try {
      const response = await fetch(`${API_URL}/lead`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForSubmit),
      });
      const json = await response.json();

      if (response.ok) {
        setDataOk(true);
      }

      if (!response.ok) {
        setError(json.message ?? "Něco se pokazilo. Zkuste to prosím později.");
      }
    } catch (err) {
      console.log(err);
      setError("Chyba je na naší straně. Zkuste to prosím později.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <>
          <div className="fixed top-0 w-screen h-screen bg-slate-950/80 z-60 flex flex-col gap-5 items-center justify-center">
            <AiOutlineLoading className="animate-spin text-textLight text-5xl" />
            <p className="text-2xl text-textLight font-oswald uppercase">
              Už na tom pracujeme
            </p>
          </div>
        </>
      )}
      {dataOk ? (
        <>
          <div className="flex flex-col items-center justify-center gap-10 w-full h-full">
            <h5 className="text-textLight">
              Děkujeme za důvěru, brzy se Vám ozveme!
            </h5>
          </div>
        </>
      ) : (
        <div
          data-testid="summaryBlock"
          className="flex flex-col items-center gap-10 w-full"
        >
          <FormBodyHeading text={headings[formBodyPart]} />
          {error && <ErrorMessage text={error} />}

          <div className="flex flex-col gap-5 w-full md:min-w-[50%] md:w-auto">
            <div className="animate-scaleUp bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 md:p-5 p-3">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <FaHouseChimney className="text-primary" />
                <h5 className="">Nemovitost</h5>
              </div>
              <div className="md:text-base text-sm">
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Typ nemovitosti:</p>
                  <p data-testid="category">{estateType.name}</p>
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
            <div className="animate-scaleUp bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 md:p-5 p-3">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <IoMdContact className="text-primary" />
                <h5 className="">Kontaktní údaje</h5>
              </div>
              <div className="md:text-base text-sm">
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
                  <p className="break-all">{personalInfo.email}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Telefon:</p>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
            <NavigationButton
              text="Zpět"
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
              }}
            />
            <NavigationButton
              text="Odeslat"
              onClick={() => {
                submitForm();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
