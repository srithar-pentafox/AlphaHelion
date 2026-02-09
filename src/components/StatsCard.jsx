import { IconCheck } from "@tabler/icons-react";
import React from "react";

function StatsCard({ iconConfig = {}, title = null, subTitle = null, key }) {
  const Icon = iconConfig?.Icon;
  return (
    <section
      className="
  flex flex-col gap-4 px-3 py-5 bg-white rounded-xl border-2 border-slate-200 text-center
  "
      key={key}
    >
      <section className="flex justify-center">
        <div
          className={`
              flex jusify-center align-center ${iconConfig?.singleColor ? `bg-${iconConfig?.singleColor}-50` : iconConfig?.iconBg ? iconConfig?.iconBg : "bg-blue-100"} p-3 rounded-4xl
              `}
        >
          {Icon ? (
            <Icon
              size={`${iconConfig?.size ? iconConfig?.size : 28}`}
              stroke={1.5}
              className={`${iconConfig?.singleColor ? `text-${iconConfig?.singleColor}-400` : iconConfig?.iconColor}`}
            />
          ) : <IconCheck className="text-blue-400" />}
        </div>
      </section>
      <section className="flex flex-col gap-2 text-center">
        <h1 className="font-medium text-xl">{title}</h1>
        {subTitle && <p className="text-slate-600 font-normal">{subTitle}</p>}
      </section>
    </section>
  );
}

export default StatsCard;
