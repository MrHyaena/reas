"use client";

import { useState } from "react";

export function FormBody() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-textLight">Osobní údaje</h2>
        <div className="grid grid-cols-2 gap-5">
          <input className="bg-slate-600 p-2 text-textLight text-xl font-semibold rounded-sm"></input>
          <input className="bg-slate-600 p-2 text-textLight text-xl font-semibold rounded-sm"></input>
          <input className="bg-slate-600 p-2 text-textLight text-xl font-semibold rounded-sm"></input>
          <input className="bg-slate-600 p-2 text-textLight text-xl font-semibold rounded-sm"></input>
        </div>
        <button className="buttonBasics px-4 py-3 text-lg font-semibold hover:scale-105">
          Pokračovat
        </button>
      </div>
    </>
  );
}
