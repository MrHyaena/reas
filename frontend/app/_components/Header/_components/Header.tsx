import React from "react";
import { BsHouseCheckFill, BsHouseFill } from "react-icons/bs";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full  flex items-center justify-center py-4 fixed top-0 shadow-md">
      <div className="w-wrapper flex justify-between items-center">
        <div className="flex items-center gap-2 font-semibold font-oswald">
          <BsHouseCheckFill className="text-4xl text-primary" />
          <p className="text-3xl lowercase mt-[-5px] text-textPrimary">Reas</p>
        </div>
        <ul className="flex gap-10 items-center font-semibold *:not-last:hover:text-primary *:not-last:transition-all *:not-last:ease-in-out font-oswald text-textPrimary">
          <li>
            <a href="/nabidka">Nabídka nemovitostí</a>
          </li>
          <li>
            <a href="/nabidka">Realitní služby</a>
          </li>
          <li>
            <a href="/nabidka">Kontakt</a>
          </li>
          <li>
            <button className="uppercase font-medium p-2 px-4 font-oswald bg-sky-500 rounded-lg text-lg text-white flex shadow-md cursor-pointer hover:scale-105 ease-in-out transition-all">
              Chci prodat nemovitost
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
