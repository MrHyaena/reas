"use client";

import React, { useState } from "react";
import { BsHouseCheckFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

type Props = {};

export default function Header({}: Props) {
  const [menuToggle, setMenuToggle] = useState(false);

  function DesktopHeader() {
    return (
      <>
        <div className="w-wrapper md:flex justify-between items-center hidden">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold font-oswald"
          >
            <BsHouseCheckFill className="text-4xl text-primary" />
            <p className="text-3xl lowercase mt-[-5px] text-textLight">Reas</p>
          </a>
          <ul className="flex gap-10 items-center *:not-last:hover:text-primary *:not-last:transition-all *:not-last:ease-in-out font-oswald text-textLight">
            <li>
              <a href="https://www.reas.cz/prodej/nemovitosti">
                Nabídka nemovitostí
              </a>
            </li>
            <li>
              <a href="https://www.reas.cz/realitni-makleri">
                Přehled realitních makléřů
              </a>
            </li>
            <li>
              <a href="https://www.reas.cz/kontakt">Kontakt</a>
            </li>
            <li>
              <a href="https://www.reas.cz/prihlasit">
                <button className="buttonBasics font-medium p-2 px-4 hover:scale-105 ">
                  uživatelský účet
                </button>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }

  function MobileHeader() {
    return (
      <>
        <div className="flex flex-col gap-10 w-wrapper md:hidden">
          <div className="flex justify-between">
            {" "}
            <a
              href="/"
              className="flex items-center gap-2 font-semibold font-oswald"
            >
              <BsHouseCheckFill className="text-4xl text-primary" />
              <p className="text-3xl lowercase mt-[-5px] text-textLight">
                Reas
              </p>
            </a>
            <button
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
            >
              <TiThMenu className="text-textLight text-2xl" />
            </button>
          </div>
          {menuToggle && (
            <ul className=" flex flex-col gap-10 items-center *:not-last:hover:text-primary *:not-last:transition-all *:not-last:ease-in-out font-oswald text-textLight">
              <li>
                <a href="https://www.reas.cz/prodej/nemovitosti">
                  Nabídka nemovitostí
                </a>
              </li>
              <li>
                <a href="https://www.reas.cz/realitni-makleri">
                  Přehled realitních makléřů
                </a>
              </li>
              <li>
                <a href="https://www.reas.cz/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="https://www.reas.cz/prihlasit">
                  <button className="buttonBasics font-medium p-2 px-4 hover:scale-105 ">
                    uživatelský účet
                  </button>
                </a>
              </li>
            </ul>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="w-full bg-slate-900/90 flex items-center justify-center py-4 fixed top-0 headerPadding z-5">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}
