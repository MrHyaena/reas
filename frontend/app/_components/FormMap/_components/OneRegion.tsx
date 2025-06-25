import { DistrictType, RegionType } from "@/app/_types/FormularTypes";

//Component for generating one region/part of map as svg

export function OneRegion({
  value,
  d,
  name,
  regionData,
  setRegionData,
  setDistrictData,
}: {
  value: string;
  d: string;
  name: string;
  regionData: RegionType;
  setRegionData: React.Dispatch<React.SetStateAction<RegionType>>;
  setDistrictData: React.Dispatch<React.SetStateAction<DistrictType>>;
}) {
  const fillClass =
    regionData.value === value ? "fill-primary" : "fill-slate-500";

  return (
    <path
      className={`hover:fill-primary hover:stroke-2 ${fillClass} cursor-pointer transition-all ease-in-out stroke-2`}
      onClick={() => {
        setDistrictData({ name: "", value: "" });
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
