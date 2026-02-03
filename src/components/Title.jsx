import React from "react";

export default function Title({ title = null, subTitle = null }) {
  if (!title) return null;
  return (
    <div className="w-full flex flex-col gap-6 align-center justify-center text-center">
      <div className="text-black font-semibold text-4xl">{title}</div>
      {subTitle && <p className="text-xl text-slate-500 text-center">{subTitle}</p>}
      {/* <div className=""></div> */}
    </div>
  );
}
