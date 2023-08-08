"use client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};

function CategoryInput({ icon: Icon, label, selected, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(label)}
      className={` rounded-xl border-2 p-4 flex flex-col gap-3 transition cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected ? "border-blue-500 text-blue-500" : "border-neutral-200"
      }`}
    >
      <Icon size={30}/>
      <div className="font-semibold">{label}</div>
    </div>
  );
}

export default CategoryInput;