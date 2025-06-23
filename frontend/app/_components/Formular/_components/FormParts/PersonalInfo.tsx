"use client";

import { useState } from "react";
import * as validator from "validator";
import { PersonalInfoType } from "../../_types/FormularTypes";
import { Heading } from "../../../Headings/_components/FormBodyHeading";
import { headings } from "@/app/_data/formBodyHeadings";
import { ErrorMessage } from "../../../ErrorMessages/_components/ErrorMessage";

export function PersonalInfo({
  personalInfo,
  setPersonalInfo,
  setFormBodyPart,
  formBodyPart,
}: {
  personalInfo: {
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
  };
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoType>>;
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
  formBodyPart: number;
}) {
  const [firstName, setFirstName] = useState<string>(personalInfo.firstName);
  const [secondName, setSecondName] = useState<string>(personalInfo.secondName);
  const [email, setEmail] = useState<string>(personalInfo.email);
  const [phone, setPhone] = useState<string>(personalInfo.phone);
  const [error, setError] = useState<string | null>(null);

  function SaveData() {
    setPersonalInfo({
      firstName: firstName,
      secondName: secondName,
      email: email,
      phone: phone,
    });
  }

  function NextStep() {
    const errorArray: string[] = [];

    if (firstName.length == 0 || secondName.length == 0) {
      errorArray.push("Chybí jméno nebo příjmení");
    }

    if (!validator.isEmail(email)) {
      errorArray.push("Zadejte platný email");
    }

    if (phone.length < 9) {
      errorArray.push("Zadejte platný telefon bez předvolby");
    }

    if (errorArray.length > 0) {
      setError(errorArray[0]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (errorArray.length == 0) {
      setFormBodyPart(formBodyPart + 1);
      SaveData();
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full">
        <Heading text={headings[formBodyPart]} />
        {error != null && <ErrorMessage text={error} />}

        <div className="grid md:grid-cols-2 md:gap-5 gap-2 md:w-[50%] w-full">
          <label className="flex flex-col text-textLight font-oswald md:text-xl gap-1 text-center w-full">
            Křestní jméno:
            <input
              value={firstName}
              className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
          </label>
          <label className="flex flex-col text-textLight font-oswald md:text-xl gap-1 text-center">
            Příjmení:
            <input
              value={secondName}
              className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
              onChange={(e) => {
                setSecondName(e.target.value);
              }}
            ></input>
          </label>
          <label className="flex flex-col text-textLight font-oswald md:text-xl gap-1 text-center">
            Email:
            <input
              type="email"
              value={email}
              className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <label className="flex flex-col text-textLight font-oswald md:text-xl gap-1 text-center">
            Telefon:
            <input
              value={phone}
              className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
              onChange={(e) => {
                console.log(/^[0-9]{0,9}$/.test(e.target.value));
                if (/^[0-9]{0,9}$/.test(e.target.value)) {
                  setPhone(e.target.value);
                }
              }}
            ></input>
          </label>
        </div>
        <button
          onClick={() => {
            NextStep();
          }}
          className="buttonBasics md:px-4 p-2 md:py-3  hover:scale-105 md:w-auto w-full"
        >
          Pokračovat
        </button>
      </div>
    </>
  );
}
