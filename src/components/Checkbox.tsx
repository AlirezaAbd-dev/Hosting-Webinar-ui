"use client";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { MouseEventHandler, useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>();

  const onClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div
      className="w-6 h-6 border border-text/20 rounded-md flex justify-center items-center"
      onClick={onClickHandler}
    >
      {isChecked && <DoneOutlineOutlinedIcon className="w-4 text-text/50" />}
    </div>
  );
}
