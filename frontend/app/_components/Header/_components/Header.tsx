import React from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

//header component that groups both device headers
export default function Header() {
  return (
    <div className="w-full bg-slate-900/90 flex items-center justify-center py-4 fixed top-0 headerPadding z-50">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}
