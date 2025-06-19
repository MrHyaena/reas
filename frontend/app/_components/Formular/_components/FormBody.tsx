"use client";

import { colorScheme } from "@/app/_data/colors";
import { mapData } from "@/app/_data/mapData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

const headings: string[] = ["Osobní údaje", "Typ nemovitosti", "Vyberte okres"];

export function FormBody() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });
  const [realEstateType, setRealEstateType] = useState<string>("");
  const [okres, setOkres] = useState<string>("");
  const [kraj, setKraj] = useState<string>("");

  const [formBodyPart, setFormBodyPart] = useState<number>(0);

  function PersonalInfo({
    setPersonalInfo,
  }: {
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoType>>;
  }) {
    const [firstName, setFirstName] = useState<string>(personalInfo.firstName);
    const [secondName, setSecondName] = useState<string>(
      personalInfo.secondName
    );
    const [email, setEmail] = useState<string>(personalInfo.email);
    const [phone, setPhone] = useState<string>(personalInfo.phone);

    function SaveData() {
      setPersonalInfo({ firstName, secondName, email, phone });
    }

    function Input({
      label,
      value,
      setter,
    }: {
      label: string;
      value: string;
      setter: React.Dispatch<React.SetStateAction<string>>;
    }) {
      return (
        <>
          {" "}
          <label className="flex flex-col text-textLight font-oswald text-xl gap-1 text-center">
            {label}
            <input
              defaultValue={value}
              className="bg-slate-600 p-2  rounded-sm border-2 border-slate-700"
              onBlur={(e) => {
                setter(e.target.value);
              }}
            ></input>
          </label>
        </>
      );
    }
    return (
      <>
        <div className="flex flex-col items-center gap-10 w-full">
          <h3 className="text-textLight">{headings[formBodyPart]}</h3>
          <div className="grid grid-cols-2 gap-5 w-[50%]">
            <Input
              label="Křestní jméno"
              value={firstName}
              setter={setFirstName}
            />
            <Input
              label="Příjmení:"
              value={secondName}
              setter={setSecondName}
            />
            <Input label="Email:" value={email} setter={setEmail} />
            <Input label="Telefon:" value={phone} setter={setPhone} />
          </div>
          <button
            onClick={() => {
              setFormBodyPart(formBodyPart + 1);
              SaveData();
            }}
            className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
          >
            Pokračovat
          </button>
        </div>
      </>
    );
  }

  function RealEstateType({
    setRealEstateType,
  }: {
    setRealEstateType: React.Dispatch<React.SetStateAction<string>>;
  }) {
    const [type, setType] = useState<string>(realEstateType);

    function SaveData() {
      setRealEstateType(type);
    }

    function RealEstateButton({
      text,
      value,
    }: {
      text: string;
      value: string;
    }) {
      let shadow: string | null = null;
      let color = "bg-slate-600";
      if (value == type) {
        color = "bg-primary";
        shadow = "shadow-[5px_5px_0px_0px]";
      }

      return (
        <>
          <button
            onClick={() => {
              setType(value);
            }}
            className={`p-3 ${color} ${shadow} rounded-sm text-textLight font-oswald text-xl cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
          >
            {text}
          </button>
        </>
      );
    }
    return (
      <>
        <div className="flex flex-col items-center gap-10 w-full">
          <h3 className="text-textLight">{headings[formBodyPart]}</h3>
          <div className="grid grid-cols-3 gap-8 w-[50%]">
            <RealEstateButton text="Byt" value="flat" />
            <RealEstateButton text="Dům" value="house" />
            <RealEstateButton text="Pozemek" value="parcel" />
            <RealEstateButton text="Komerční" value="commerce" />
            <RealEstateButton text="Chata" value="cabin" />
            <RealEstateButton text="Ostatní" value="other" />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
                SaveData();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Zpět
            </button>
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart + 1);
                SaveData();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Pokračovat
            </button>
          </div>
        </div>
      </>
    );
  }

  function RepublicMap({
    setOkres,
    setKraj,
  }: {
    setOkres: React.Dispatch<React.SetStateAction<string>>;
    setKraj: React.Dispatch<React.SetStateAction<string>>;
  }) {
    const [okresName, setOkresName] = useState<string>(okres);
    const [krajName, setKrajName] = useState<string>();

    function SaveData() {
      setOkres(okresName);
    }

    function GenerateKraj({ value, d }: { value: string; d: string }) {
      let bgcolor = "fill-slate-500";
      let stroke = "stroke-5";
      if (krajName == value) {
        bgcolor = "fill-primary";
        stroke = "stroke-5";
      }

      return (
        <path
          className={`hover:fill-primary hover:stroke-5 ${bgcolor} cursor-pointer transition-all ease-in-out ${stroke}`}
          onClick={(e) => {
            setKrajName(value);
          }}
          d={d}
          clipRule="evenodd"
          fillRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          stroke="#fff"
          strokeLinejoin="bevel"
          id={value}
        />
      );
    }

    function GenerateMap() {
      return (
        <>
          <div>
            <svg
              width="600"
              height="400"
              version="1.1"
              viewBox="0 0 1412 809"
              id="czechmap"
            >
              <metadata id="metadata96"></metadata>
              <defs id="defs94" />
              <>
                {mapData.map((krajObject) => {
                  return (
                    <GenerateKraj
                      key={krajObject.name}
                      value={krajObject.value}
                      d={krajObject.d}
                    />
                  );
                })}
              </>
            </svg>
          </div>
        </>
      );
    }

    function GenerateOneOkres({
      text,
      value,
    }: {
      text: string;
      value: string;
    }) {
      let shadow: string | null = null;
      let color = "bg-slate-600";
      if (value == okresName) {
        color = "bg-primary";
        shadow = "shadow-[5px_5px_0px_0px]";
      }

      return (
        <>
          <button
            onClick={() => {
              setOkresName(value);
            }}
            className={`p-3 ${color} ${shadow} text-nowrap rounded-sm text-textLight font-oswald text-xl cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
          >
            {text}
          </button>
        </>
      );
    }

    function GenerateOkres() {
      const krajObject = mapData.find((kraj) => {
        return kraj.value == krajName;
      });
      console.log(krajObject);
      const array = krajObject?.okresy.map((okres) => {
        return <GenerateOneOkres text={okres.name} value={okres.value} />;
      });

      return array;
    }

    return (
      <>
        <div className="flex flex-col items-center gap-10 w-full">
          <h3 className="text-textLight">{headings[formBodyPart]}</h3>
          <div className="grid grid-cols-2 w-full">
            <GenerateMap />
            <div className="flex items-center">
              <div className="grid grid-cols-4 gap-5 shrink-0 flex-wrap">
                <GenerateOkres />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
                SaveData();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Zpět
            </button>
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart + 1);
                SaveData();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Pokračovat
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {formBodyPart == 0 && <PersonalInfo setPersonalInfo={setPersonalInfo} />}
      {formBodyPart == 1 && (
        <RealEstateType setRealEstateType={setRealEstateType} />
      )}
      {formBodyPart == 2 && (
        <RepublicMap setOkres={setOkres} setKraj={setKraj} />
      )}
    </>
  );
}
