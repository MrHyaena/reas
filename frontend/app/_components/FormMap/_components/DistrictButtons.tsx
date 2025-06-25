import { mapData } from "@/app/_data/mapData";
import { DistrictType, RegionType } from "@/app/_types/FormularTypes";

export function DistrictButtons({
  regionData,
  districtData,
  onClick,
}: {
  regionData: RegionType;
  districtData: DistrictType;
  onClick: React.Dispatch<React.SetStateAction<DistrictType>>;
}) {
  const regionObject = mapData.find((regionitem) => {
    return regionitem.value == regionData.value;
  });

  const array = regionObject?.districts.map((district) => {
    const selected = district.value == districtData.value ? true : false;

    const shadow: string | null = selected ? "shadow-[5px_5px_0px_0px]" : "";
    const color = selected ? "bg-primary" : "bg-slate-700";

    return (
      <button
        key={district.name}
        onClick={() => {
          onClick({ name: district.name, value: district.value });
        }}
        className={`md:p-3 p-2 ${color} ${shadow} text-nowrap rounded-sm text-textLight font-oswald md:text-lg cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
      >
        {district.name}
      </button>
    );
  });

  return array;
}
