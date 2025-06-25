import { FaHouseChimney, FaShop, FaVectorSquare } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { PiHouseLineFill } from "react-icons/pi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RealEstateButtonType } from "@/app/_types/FormularTypes";

//One button for realEstate category

export function RealEstateCategoryButton({
  name,
  value,
  selected,
  onClick,
}: RealEstateButtonType) {
  const shadow: string | null = selected ? "shadow-[5px_5px_0px_0px]" : null;
  const color = selected ? "bg-primary" : "bg-slate-700";

  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className={`flex items-center gap-2 justify-center p-3 ${color} ${shadow} rounded-sm text-textLight font-oswald text-xl cursor-pointer hover:bg-primary hover:shadow-[5px_5px_0px_0px] shadow-white transition-all ease-in-out`}
      >
        {value == "flat" && <FaHouseChimney />}
        {value == "house" && <MdApartment />}
        {value == "parcel" && <FaVectorSquare />}
        {value == "commerce" && <FaShop />}
        {value == "cabin" && <PiHouseLineFill />}
        {value == "other" && <BsQuestionSquareFill />}

        {name}
      </button>
    </>
  );
}
