import { useState } from "react";
import { mapData } from "@/app/_data/mapData";
import { Heading } from "../../../Headings/_components/FormBodyHeading";
import { headings } from "@/app/_data/formBodyHeadings";
import { ErrorMessage } from "../../../ErrorMessages/_components/ErrorMessage";
import { DistrictType, RegionType } from "../../_types/FormularTypes";

export function RepublicMap({
  setDistrict,
  setRegion,
  district,
  region,
  setFormBodyPart,
  formBodyPart,
}: {
  setDistrict: React.Dispatch<React.SetStateAction<DistrictType>>;
  setRegion: React.Dispatch<React.SetStateAction<RegionType>>;
  district: DistrictType;
  region: RegionType;
  setFormBodyPart: React.Dispatch<React.SetStateAction<number>>;
  formBodyPart: number;
}) {
  const [districtData, setDistrictData] = useState<DistrictType>(district);
  const [regionData, setRegionData] = useState<RegionType>(region);

  const [error, setError] = useState<string | null>(null);

  function SaveData() {
    setDistrict(districtData);
    setRegion(region);
  }

  function GenerateOneRegion({
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
    if (regionData.value == value) {
      bgcolor = "fill-primary";
      stroke = "stroke-2";
    }

    return (
      <path
        className={`hover:fill-primary hover:stroke-2 ${bgcolor} cursor-pointer transition-all ease-in-out ${stroke}`}
        onClick={() => {
          setRegionData({
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
              {mapData.map((regionObject) => {
                return (
                  <GenerateOneRegion
                    key={regionObject.name}
                    value={regionObject.value}
                    d={regionObject.d}
                    name={regionObject.name}
                  />
                );
              })}
            </>
          </svg>
        </div>
      </>
    );
  }

  function GenerateRegionSelectMobile() {
    return (
      <>
        <select
          defaultValue={regionData.value}
          name="kraj"
          id="kraj"
          className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600 text-white w-full md:hidden"
          onChange={(e) => {
            const newRegionItem = mapData.find(
              (regionObject) => regionObject.value == e.target.value
            );

            if (newRegionItem) {
              const regionValue: RegionType = {
                name: newRegionItem.name,
                value: newRegionItem.value,
              };
              setRegionData(regionValue);
            }
          }}
        >
          {mapData.map((regionItem) => {
            return (
              <option key={"select" + regionItem.name} value={regionItem.value}>
                {regionItem.name}
              </option>
            );
          })}
        </select>
      </>
    );
  }

  function GenerateOkresButtons() {
    const regionObject = mapData.find((regionitem) => {
      return regionitem.value == regionData.value;
    });
    const array = regionObject?.districts.map((district) => {
      return (
        <GenerateOneDistrictButton
          key={district.name}
          name={district.name}
          value={district.value}
        />
      );
    });

    return array;
  }

  function GenerateOneDistrictButton({ name, value }: DistrictType) {
    let shadow: string | null = null;
    let color = "bg-slate-600";
    if (value == districtData.value) {
      color = "bg-primary";
      shadow = "shadow-[5px_5px_0px_0px]";
    }

    return (
      <>
        <button
          onClick={() => {
            setDistrictData({
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
    if (districtData.name.length == 0 || regionData.name.length == 0) {
      setError("Vyberte kraj a okres");
    } else {
      setFormBodyPart(formBodyPart + 1);
      setDistrict(districtData);
      setRegion(regionData);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full">
        <Heading text={headings[formBodyPart]} />
        {error != null && <ErrorMessage text={error} />}

        <div className="md:grid flex flex-col grid-cols-2 gap-10 w-full items-start">
          <GenerateRegionSelectMobile />
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
