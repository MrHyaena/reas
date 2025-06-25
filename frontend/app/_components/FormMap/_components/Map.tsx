import { mapData } from "@/app/_data/mapData";
import { DistrictType, RegionType } from "@/app/_types/FormularTypes";
import { OneRegion } from "./OneRegion";

export function Map({
  regionData,
  setRegionData,
  setDistrictData,
}: {
  regionData: RegionType;
  setRegionData: React.Dispatch<React.SetStateAction<RegionType>>;
  setDistrictData: React.Dispatch<React.SetStateAction<DistrictType>>;
}) {
  return (
    <div className="hidden md:block">
      <svg
        className="w-full"
        version="1.1"
        viewBox="0 0 1412 809"
        id="czechmap"
      >
        {mapData.map((regionObject) => {
          return (
            <OneRegion
              key={regionObject.name}
              value={regionObject.value}
              d={regionObject.d}
              name={regionObject.name}
              regionData={regionData}
              setRegionData={setRegionData}
              setDistrictData={setDistrictData}
            />
          );
        })}
      </svg>
    </div>
  );
}
