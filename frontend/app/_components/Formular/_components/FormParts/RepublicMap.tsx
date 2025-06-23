import { useState } from "react";
import { KrajType, OkresType } from "../../_types/FormularTypes";
import { mapData } from "@/app/_data/mapData";
import { Heading } from "../../../Headings/_components/FormBodyHeading";
import { headings } from "@/app/_data/formBodyHeadings";
import { ErrorMessage } from "../../../ErrorMessages/_components/ErrorMessage";

export function RepublicMap({
  setOkres,
  setKraj,
  okres,
  kraj,
  setFormBodyPart,
  formBodyPart,
}: {
  setOkres: React.Dispatch<React.SetStateAction<OkresType>>;
  setKraj: React.Dispatch<React.SetStateAction<KrajType>>;
  okres: OkresType;
  kraj: KrajType;
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
  formBodyPart: number;
}) {
  const [okresName, setOkresName] = useState<OkresType>(okres);
  const [krajName, setKrajName] = useState<KrajType>(kraj);

  const [error, setError] = useState<string | null>(null);

  function SaveData() {
    setOkres(okresName);
    setKraj(krajName);
  }

  function GenerateKrajMapPart({
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
        <div className="hidden md:block">
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
                  <GenerateKrajMapPart
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

  function GenerateKrajMobile() {
    return (
      <>
        <select
          defaultValue={krajName.value}
          name="kraj"
          id="kraj"
          className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600 text-white w-full md:hidden"
          onChange={(e) => {
            const krajData = mapData.find(
              (krajItem) => krajItem.value == e.target.value
            );

            if (krajData) {
              const krajValue: KrajType = {
                name: krajData.name,
                value: krajData.value,
              };
              setKrajName(krajValue);
            }
          }}
        >
          {mapData.map((krajItem) => {
            return (
              <option key={"select" + krajItem.name} value={krajItem.value}>
                {krajItem.name}
              </option>
            );
          })}
        </select>
      </>
    );
  }

  function GenerateOkresButtons() {
    const krajObject = mapData.find((kraj) => {
      return kraj.value == krajName.value;
    });
    console.log(krajObject);
    const array = krajObject?.okresy.map((okres) => {
      return (
        <GenerateOneOkresButton
          key={okres.name}
          name={okres.name}
          value={okres.value}
        />
      );
    });

    return array;
  }

  function GenerateOneOkresButton({ name, value }: OkresType) {
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
              name: name,
              value: value,
            });
          }}
          className={`md:p-3 p-2 ${color} ${shadow} text-nowrap rounded-sm text-textLight font-oswald md:text-lg cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
        >
          {name}
        </button>
      </>
    );
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
        {error != null && <ErrorMessage text={error} />}

        <div className="md:grid flex flex-col grid-cols-2 gap-10 w-full items-start">
          <GenerateKrajMobile />
          <GenerateMap />
          <div className="flex items-center">
            <div className="flex gap-5 flex-wrap">
              <GenerateOkresButtons />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
          <button
            onClick={() => {
              setFormBodyPart(formBodyPart - 1);
              SaveData();
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
