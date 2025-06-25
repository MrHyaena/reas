import { useState } from "react";
import { FormBodyHeading } from "../../Headings/_components/FormBodyHeading";
import { headings } from "@/app/_data/formBodyHeadings";
import { ErrorMessage } from "../../ErrorMessages/_components/ErrorMessage";
import { DistrictType, RegionType } from "../../../_types/FormularTypes";
import { NavigationButton } from "@/app/_components/Buttons/_components/NavigationButtons";
import { RegionSelectMobile } from "./RegionSelectMobile";
import { Map } from "./Map";
import { DistrictButtons } from "./DistrictButtons";

//Part of form where user picks reagion and district

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

  function saveData() {
    setDistrict(districtData);
    setRegion(regionData);
  }

  function NextStep() {
    if (!districtData.name || !regionData.name) {
      setError("Chybí vybrat kraj a okres");
    } else {
      setError(null);
      setFormBodyPart(formBodyPart + 1);
      saveData();
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full">
        <FormBodyHeading text={headings[formBodyPart]} />
        {error != null && <ErrorMessage text={error} />}

        <div className="md:grid flex flex-col grid-cols-2 gap-10 w-full items-start">
          <RegionSelectMobile
            regionData={regionData}
            setRegionData={setRegionData}
            setDistrictData={setDistrictData}
          />
          <Map
            regionData={regionData}
            setRegionData={setRegionData}
            setDistrictData={setDistrictData}
          />
          <div className="flex items-center">
            <div className="flex gap-5 flex-wrap">
              <DistrictButtons
                regionData={regionData}
                districtData={districtData}
                onClick={setDistrictData}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:text-lg text-md font-semibold w-full md:w-auto">
          <NavigationButton
            text="Zpět"
            onClick={() => {
              setFormBodyPart(formBodyPart - 1);
              saveData();
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
