"use client";

import { colorScheme } from "@/app/_data/colors";
import { mapData } from "@/app/_data/mapData";
import { realEstateData } from "@/app/_data/realEstate";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsQuestionSquare, BsQuestionSquareFill } from "react-icons/bs";
import { FaHouseChimney, FaShop, FaVectorSquare } from "react-icons/fa6";
import { IoIosExit, IoMdContact } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { PiHouseLineFill } from "react-icons/pi";
import { setEnvironmentData } from "worker_threads";
import * as validator from "validator";

export type PersonalInfoType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
};

const headings: string[] = [
  "Osobní údaje",
  "Typ nemovitosti",
  "Vyberte okres",
  "Shrnutí",
];

export function FormBody() {
  //Data from whole formular process ######################################x

  //Personal information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  //Type of real estate state
  const [realEstateType, setRealEstateType] = useState<{
    name: string;
    value: string;
  }>({ name: "", value: "" });

  //Okres State
  const [okres, setOkres] = useState<{
    name: string;
    value: string;
  }>({
    name: "",
    value: "string",
  });

  //Kraj state
  const [kraj, setKraj] = useState<{
    name: string;
    value: string;
  }>({
    name: "string",
    value: "string",
  });

  //Step of the formular
  const [formBodyPart, setFormBodyPart] = useState<number>(0);

  //Form parts ###################################################################

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

      if (!validator.isEmail(email)) {
        errorArray.push("Zadejte platný email");
      }

      if (phone.length < 9) {
        errorArray.push("Zadejte platný telefon bez předvolby");
      }

      if (firstName.length == 0 || secondName.length == 0) {
        errorArray.push("Chybí jméno nebo příjmení");
      }

      if (errorArray.length > 0) {
        setError(errorArray[0]);
      } else if (errorArray.length == 0) {
        setFormBodyPart(formBodyPart + 1);
        SaveData();
      }
    }

    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            NextStep();
          }}
          className="flex flex-col items-center gap-10 w-full"
        >
          <Heading text={headings[formBodyPart]} />
          <div className="grid grid-cols-2 gap-5 w-[50%]">
            <label className="flex flex-col text-textLight font-oswald text-xl gap-1 text-center">
              Křestní jméno:
              <input
                value={firstName}
                className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            </label>
            <label className="flex flex-col text-textLight font-oswald text-xl gap-1 text-center">
              Příjmení:
              <input
                value={secondName}
                className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
                onChange={(e) => {
                  setSecondName(e.target.value);
                }}
              ></input>
            </label>
            <label className="flex flex-col text-textLight font-oswald text-xl gap-1 text-center">
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
            <label className="flex flex-col text-textLight font-oswald text-xl gap-1 text-center">
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
            type="submit"
            className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
          >
            Pokračovat
          </button>
          {error != null && (
            <p className="p-2 bg-rose-950 rounded-sm text-rose-300">{error}</p>
          )}
        </form>
      </>
    );
  }

  function RealEstateType({
    setRealEstateType,
  }: {
    setRealEstateType: React.Dispatch<
      React.SetStateAction<{ name: string; value: string }>
    >;
  }) {
    const [type, setType] = useState<{ name: string; value: string }>(
      realEstateType
    );
    const [error, setError] = useState<string | null>(null);

    function NextStep() {
      if (type.name.length == 0) {
        setError("Vyberte některý z typů nemovitosti");
      } else {
        setFormBodyPart(formBodyPart + 1);
        setRealEstateType(type);
      }
    }

    function RealEstateButton({
      text,
      value,
    }: {
      text: string;
      value: string;
    }) {
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
          <div className="grid grid-cols-3 gap-8 max-w-[700px] w-full">
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
          <div className="flex gap-4">
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
                setRealEstateType(type);
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Zpět
            </button>
            <button
              onClick={() => {
                NextStep();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Pokračovat
            </button>
          </div>
          {error != null && (
            <p className="p-2 bg-rose-950 rounded-sm text-rose-300">{error}</p>
          )}
        </div>
      </>
    );
  }

  function RepublicMap({
    setOkres,
    setKraj,
  }: {
    setOkres: React.Dispatch<
      React.SetStateAction<{
        name: string;
        value: string;
      }>
    >;
    setKraj: React.Dispatch<
      React.SetStateAction<{
        name: string;
        value: string;
      }>
    >;
  }) {
    const [okresName, setOkresName] = useState<{
      name: string;
      value: string;
    }>(okres);
    const [krajName, setKrajName] = useState<{
      name: string;
      value: string;
    }>(kraj);

    const [error, setError] = useState<string | null>(null);

    function SaveData() {
      setOkres(okresName);
      setKraj(krajName);
    }

    function GenerateKraj({
      value,
      d,
      name,
    }: {
      value: string;
      d: string;
      name: string;
    }) {
      let bgcolor = "fill-slate-500";
      let stroke = "stroke-2";
      if (krajName.value == value) {
        bgcolor = "fill-primary";
        stroke = "stroke-2";
      }

      return (
        <path
          className={`hover:fill-primary hover:stroke-2 ${bgcolor} cursor-pointer transition-all ease-in-out ${stroke}`}
          onClick={(e) => {
            setKrajName({
              name: name,
              value: value,
            });
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
              className="w-full"
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
                      name={krajObject.name}
                    />
                  );
                })}
              </>
            </svg>
          </div>
        </>
      );
    }

    function GenerateOkres() {
      function GenerateOneOkres({
        text,
        value,
      }: {
        text: string;
        value: string;
      }) {
        let shadow: string | null = null;
        let color = "bg-slate-600";
        if (value == okresName.value) {
          color = "bg-primary";
          shadow = "shadow-[5px_5px_0px_0px]";
        }

        return (
          <>
            <button
              onClick={() => {
                setOkresName({
                  name: text,
                  value: value,
                });
              }}
              className={`p-3 ${color} ${shadow} text-nowrap rounded-sm text-textLight font-oswald text-lg cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
            >
              {text}
            </button>
          </>
        );
      }

      const krajObject = mapData.find((kraj) => {
        return kraj.value == krajName.value;
      });
      console.log(krajObject);
      const array = krajObject?.okresy.map((okres) => {
        return (
          <GenerateOneOkres
            key={okres.name}
            text={okres.name}
            value={okres.value}
          />
        );
      });

      return array;
    }

    function NextStep() {
      if (okresName.name.length == 0 || krajName.name.length == 0) {
        setError("Vyberte kraj a okres");
      } else {
        setFormBodyPart(formBodyPart + 1);
        setOkres(okresName);
        setKraj(krajName);
      }
    }

    return (
      <>
        <div className="flex flex-col items-center gap-10 w-full">
          <Heading text={headings[formBodyPart]} />
          <div className="grid grid-cols-2 gap-10 w-full items-start">
            <GenerateMap />
            <div className="flex items-center">
              <div className="flex gap-5 flex-wrap">
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
                NextStep();
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Pokračovat
            </button>
          </div>
          {error != null && (
            <p className="p-2 bg-rose-950 rounded-sm text-rose-300">{error}</p>
          )}
        </div>
      </>
    );
  }

  function Heading({ text }: { text: string }) {
    return (
      <>
        <div className="grid grid-cols-[1fr_3fr_1fr] items-center gap-3">
          {" "}
          <a href="/">
            {" "}
            <IoIosExit className="text-2xl text-textLight rotate-180 justify-self-end mt-1 hover:text-rose-300 cursor-pointer transition-all ease-in-out" />
          </a>{" "}
          <h3 className="text-textLight col-start-2">{text}</h3>
        </div>
      </>
    );
  }

  function Summary() {
    return (
      <>
        <div className="flex flex-col items-center gap-10 w-full">
          <Heading text={headings[formBodyPart]} />
          <div className="flex flex-col gap-5">
            <div className=" bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 p-5">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <FaHouseChimney className="text-primary" />
                <h5 className="">Nemovitost</h5>
              </div>
              <div className="">
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Typ nemovitosti:</p>
                  <p>{realEstateType.name}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Kraj:</p>
                  <p>{kraj.name}</p>
                </div>
                <div className="grid grid-cols-2 not-last:border-b pb-1 border-slate-700">
                  <p>Okres:</p>
                  <p>{okres.name}</p>
                </div>
              </div>
            </div>
            <div className=" bg-slate-800/80 text-textLight font-oswald text-xl border rounded-md border-slate-600 p-5">
              <div className="flex items-center pb-2 mb-3 border-b border-slate-600 gap-2">
                <IoMdContact className="text-primary" />
                <h5 className="">Kontaktní údaje</h5>
              </div>
              <div className="">
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
          <div className="flex gap-4">
            <button
              onClick={() => {
                setFormBodyPart(formBodyPart - 1);
              }}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Zpět
            </button>
            <button
              onClick={() => {}}
              className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105"
            >
              Odeslat
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
      {formBodyPart == 3 && <Summary />}
    </>
  );
}
