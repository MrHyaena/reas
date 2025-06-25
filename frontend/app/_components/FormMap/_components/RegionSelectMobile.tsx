import { mapData } from "@/app/_data/mapData";
import { DistrictType, RegionType } from "@/app/_types/FormularTypes";

//Region select for mobile users

export function RegionSelectMobile({
  regionData,
  setRegionData,
  setDistrictData,
}: {
  regionData: RegionType;
  setRegionData: React.Dispatch<React.SetStateAction<RegionType>>;
  setDistrictData: React.Dispatch<React.SetStateAction<DistrictType>>;
}) {
  return (
    <select
      value={regionData.value}
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
          setDistrictData({ name: "", value: "" });
          setRegionData(regionValue);
        }
      }}
    >
      <option value="">-- Vyberte kraj --</option>
      {mapData.map((regionItem) => {
        return (
          <option key={"select" + regionItem.name} value={regionItem.value}>
            {regionItem.name}
          </option>
        );
      })}
    </select>
  );
}
