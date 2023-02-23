import React from "react";
import Checkbox from "./Checkbox";

export default function TermContainer() {
  return (
    <div className="flex flex-row space-x-2 mt-10 w-full items-center">
      <Checkbox />
      <p className="text-[11px]">
        I have read and agree to the{" "}
        <span className="text-redAccent">Terms & Conditions</span>
      </p>
    </div>
  );
}
