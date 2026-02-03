import { IconPointFilled } from "@tabler/icons-react";
import React from "react";
import { ResponsiveHeading } from "../constant/commonConfig";

function ListInCard({
  title = null,
  subTitle = null,
  contentList = [],
  contentListIcon = <IconPointFilled size={25} className="text-blue-400" />,
}) {
  return (
    <section className="bg-blue-50 flex flex-col gap-3 rounded-xl border-2 border-blue-200 p-5">
      <header className="flex flex-col gap-2">
        <h1 className={`${ResponsiveHeading} font-semibold text-blue-500`}>{title}</h1>
        {subTitle && (
          <p className="text-slate-400 font-medium text-xl">{subTitle}</p>
        )}
      </header>
      <section
        className="
        grid grid-cols-1 gap-2
        md:grid-cols-2 gap-2
        "
      >
        {contentList?.map((content, index) => (
          <div className="flex gap-1" key={index}>
            {contentListIcon && contentListIcon}
            <div className="flex flex-col">
              {content?.title && (
                <h1 className="font-semibold text-md">{content?.title}</h1>
              )}
              {content?.subTitle && (
                <p className="text-slate-400 font-medium text-md">
                  {content?.subTitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default ListInCard;
