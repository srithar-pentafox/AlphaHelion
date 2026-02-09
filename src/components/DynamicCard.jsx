import {
  IconArrowNarrowRight,
  IconCheck,
  IconCircleCheckFilled,
  IconPointFilled,
} from "@tabler/icons-react";
import React from "react";
import { ResponsiveHeading } from "../constant/commonConfig";

const THEME_COLORS = {
  blue: {
    border: "border-blue-200",
    borderHover: "md:hover:border-blue-500",
    title: "text-blue-500",
    iconBg: "bg-blue-100",
    iconText: "text-blue-400",
    dot: "text-blue-400",
    cardBg: "bg-blue-50",
    hr: "border-blue-500",
  },
  red: {
    border: "border-red-200",
    borderHover: "md:hover:border-red-500",
    title: "text-red-500",
    iconBg: "bg-red-100",
    iconText: "text-red-400",
    dot: "text-red-400",
    cardBg: "bg-red-50",
    hr: "border-red-500",
  },
  green: {
    border: "border-green-200",
    borderHover: "md:hover:border-green-500",
    title: "text-green-500",
    iconBg: "bg-green-100",
    iconText: "text-green-400",
    dot: "text-green-400",
    cardBg: "bg-green-50",
    hr: "border-green-500",
  },
  violet: {
    border: "border-violet-200",
    borderHover: "md:hover:border-violet-500",
    title: "text-violet-500",
    iconBg: "bg-violet-100",
    iconText: "text-violet-400",
    dot: "text-violet-400",
    cardBg: "bg-violet-50",
    hr: "border-violet-500",
  },
  orange: {
    border: "border-orange-200",
    borderHover: "md:hover:border-orange-500",
    title: "text-orange-500",
    iconBg: "bg-orange-100",
    iconText: "text-orange-400",
    dot: "text-orange-400",
    cardBg: "bg-orange-50",
    hr: "border-orange-500",
  },
};

const DEFAULT = {
  border: "border-blue-200",
  title: "text-blue-500",
  cardBg: "bg-blue-50", // bg-slate-50
  hr: "border-slate-400",
};

const headingColor = "text-blue-500"; // text-slate-800
const subTitleColor = "text-slate-600";
const contentColor = "text-slate-800"; // font-semibold, text-slate-400

const responsiveSectionHeading = "text-sm md:text-md";

export default function DynamicCard({
  id,
  themeColor = "blue",
  cardHeader = {},
  cardTitles = {},
  contentIcon = (
    <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
  ),
  contentHeading = null,
  content = null,
  section = {},
  sectionIcon = (
    <IconCircleCheckFilled className="text-blue-400" size={20} stroke={1.5} />
  ),
  key,
  cardType = "simple",
  hoverEffect = false,
}) {
  const Icon = cardHeader?.iconConfig?.Icon;
  const TitleIcon = cardTitles?.iconConfig?.Icon;

  switch (cardType) {
    case "simple":
      return (
        <section
          className={`
        group h-full
         ${THEME_COLORS?.[themeColor]?.cardBg ? THEME_COLORS?.[themeColor]?.cardBg : DEFAULT?.cardBg}  flex flex-col flex-grow gap-4 p-5 rounded-xl border-2 
         ${THEME_COLORS?.[themeColor]?.border ? THEME_COLORS?.[themeColor]?.border : DEFAULT?.border} transition-colors duration-200
        ${
          hoverEffect &&
          `sm:hover:bg-slate-50 sm:hover:border-gray-200
        md:hover:bg-white md:hover:border-blue-500 md:hover:cursor-pointer`
        }
      `}
          id={id}
          key={key}
        >
          {/* headers */}
          <section className="w-full flex justify-between">
            {Icon && (
              <div
                className={`
                  flex jusify-center align-center ${cardHeader?.iconConfig?.singleColor ? `bg-${cardHeader?.iconConfig?.singleColor}-100` : cardHeader?.iconConfig?.iconBg ? cardHeader?.iconConfig?.iconBg : "bg-white"} p-3 rounded-lg transition-all duration-200
                    shadow-lg
                  ${
                    hoverEffect &&
                    `
                    sm:group-hover:bg-white
                    md:group-hover:bg-blue-100 md:group-hover:shadow-none`
                  }
                  h-11 w-11
                  `}
              >
                <Icon
                  size={`${cardHeader?.iconConfig?.size ? cardHeader?.iconConfig?.size : 30}`}
                  stroke={1.5}
                  className={`${cardHeader?.iconConfig?.singleColor ? `text-${cardHeader?.iconConfig?.singleColor}-400` : cardHeader?.iconConfig?.iconColor}`}
                />
              </div>
            )}
            <div
              className={`flex flex-col ${cardHeader?.content && cardHeader?.badge ? "justify-center" : "justify-start"} align-center`}
            >
              {cardHeader?.content && (
                <h1
                  className={`${responsiveSectionHeading} font-semibold ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : cardTitles?.color ? cardTitles?.color : DEFAULT?.title}`}
                >
                  {cardHeader?.content?.toUpperCase()}
                </h1>
              )}
              {cardHeader?.badge && (
                <p className="bg-blue-100 py-[3px] px-5 text-blue-400 font-bold rounded-full scale-80 text-center">
                  {cardHeader?.badge?.toUpperCase()}
                </p>
              )}
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <div className="flex gap-4 align-center">
              {TitleIcon && (
                <div
                  className={`
                  flex jusify-center align-center ${cardTitles?.iconConfig?.singleColor ? `bg-${cardTitles?.iconConfig?.singleColor}-100` : cardTitles?.iconConfig?.iconBg ? cardTitles?.iconConfig?.iconBg : "bg-white"} p-3 rounded-lg transition-all duration-200
                  shadow-lg
                  ${
                    hoverEffect &&
                    `
                    shadow-lg
                    sm:group-hover:bg-white
                    md:group-hover:bg-blue-100 md:group-hover:shadow-none`
                  }
                  h-13 w-13
                  `}
                >
                  <TitleIcon
                    size={`${cardTitles?.iconConfig?.size ? cardTitles?.iconConfig?.size : 30}`}
                    stroke={1.5}
                    className={`${cardTitles?.iconConfig?.singleColor ? `text-${cardTitles?.iconConfig?.singleColor}-400` : cardTitles?.iconConfig?.iconColor}`}
                  />
                </div>
              )}
              {/* headings */}
              <div className="flex flex-col justify-center">
                <h1
                  className={`${ResponsiveHeading} font-semibold ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : cardTitles?.color ? cardTitles?.color : DEFAULT?.title}`}
                >
                  {cardTitles?.title}
                </h1>

                {cardTitles?.subTitle && (
                  <p className={`${subTitleColor} font-medium`}>
                    {cardTitles?.subTitle}
                  </p>
                )}
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            {contentHeading && <p>{contentHeading}</p>}
            {Array.isArray(content) ? (
              content?.map((item, index) => (
                <div className="flex gap-1 align-start">
                  {contentIcon && (
                    <div>
                      <div className="p-1 rounded-xl">{contentIcon}</div>
                    </div>
                  )}
                  <p
                    key={index}
                    className={`${contentColor} font-normal text-md`}
                  >
                    {item}
                  </p>
                </div>
              ))
            ) : typeof content !== "object" && content ? (
              <p>{content}</p>
            ) : null}
          </section>
        </section>
      );
    case "section":
      return (
        <section
          className={`
        h-full
        flex flex-col
        gap-4
        rounded-xl
        border-2
        ${THEME_COLORS?.[themeColor]?.border ?? DEFAULT.border}
        ${THEME_COLORS?.[themeColor]?.cardBg ?? DEFAULT.cardBg}
        p-5
      `}
        >
          {/* ================= Header ================= */}
          <section className="flex flex-col gap-1">
            <header className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                {cardTitles?.titleIcon && <div>{cardTitles.titleIcon}</div>}
                <h1
                  className={`${ResponsiveHeading} font-semibold ${
                    THEME_COLORS?.[themeColor]?.title ?? DEFAULT.title
                  }`}
                >
                  {cardTitles?.title}
                </h1>
              </div>

              {cardHeader?.badge && (
                <span className="rounded-full bg-blue-100 text-blue-400 px-3 py-1 text-xs font-bold">
                  {cardHeader.badge}
                </span>
              )}
            </header>

            {cardTitles?.subTitle && (
              <p className="text-md font-medium text-slate-800">
                {cardTitles.subTitle}
              </p>
            )}
          </section>

          {/* ================= Main Content (GROWS) ================= */}
          <section className="flex flex-col gap-3 flex-grow">
            {contentHeading && (
              <p
                className={`text-md font-bold capitalize ${
                  THEME_COLORS?.[themeColor]?.title ?? DEFAULT.title
                }`}
              >
                {contentHeading}
              </p>
            )}

            {Array.isArray(content) ? (
              content?.map((item, index) => (
                <div className="flex gap-1 align-start">
                  {contentIcon && (
                    <div>
                      <div className="p-1 rounded-xl">{contentIcon}</div>
                    </div>
                  )}
                  {item?.split("--")?.length === 1 ? (
                    <p key={index} className={`${contentColor} font-normal`}>
                      {item}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <p
                        key={index}
                        className={`${contentColor} font-semibold`}
                      >
                        {item?.split("--")[0]}
                      </p>
                      <p key={index} className={`text-slate-700 font-normal`}>
                        {item?.split("--")[1]}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : typeof content !== "object" && content ? (
              <p>{content}</p>
            ) : null}
          </section>

          {/* ================= Business Outcomes (BOTTOM ALIGNED) ================= */}
          <section
            className="
          mt-auto
          flex flex-col gap-3
          bg-white
          p-4
          border-2
          border-blue-100
          rounded-md
        "
          >
            <p
              className={`text-md font-bold capitalize ${
                THEME_COLORS?.[themeColor]?.title ?? DEFAULT.title
              }`}
            >
              {section?.title}
            </p>

            {Array.isArray(section?.content) &&
              section.content.map((item, index) => (
                <div className="flex gap-2 items-start" key={index}>
                  {sectionIcon && (
                    <div className="p-1 rounded-xl">{sectionIcon}</div>
                  )}
                  <p className="text-slate-800 font-normal">{item}</p>
                </div>
              ))}
          </section>
        </section>
      );

    // case "section":
    //   return (
    //     <section
    //       className={`h-full flex flex-col gap-3 flex-grow rounded-xl border-2 ${THEME_COLORS?.[themeColor]?.border ? THEME_COLORS?.[themeColor]?.border : DEFAULT?.border} ${THEME_COLORS?.[themeColor]?.cardBg ? THEME_COLORS?.[themeColor]?.cardBg : DEFAULT?.cardBg} p-5`}
    //     >
    //       {/* Header */}
    //       <section className="flex flex-col gap-1">
    //         <header className="flex items-start justify-between">
    //           <div
    //             className={`flex justify-center align-center ${cardTitles?.titleIcon ? "gap-2" : "gap-0"}`}
    //           >
    //             <div>{cardTitles?.titleIcon && cardTitles?.titleIcon}</div>
    //             <h1
    //               className={`${ResponsiveHeading} font-semibold ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : cardTitles?.color ? cardTitles?.color : DEFAULT?.title}`}
    //             >
    //               {cardTitles?.title}
    //             </h1>
    //           </div>
    //           {cardHeader?.badge && (
    //             <span className="rounded-full bg-blue-100 text-blue-400 px-3 py-1 text-xs font-bold">
    //               {cardHeader?.badge}
    //             </span>
    //           )}
    //         </header>

    //         {cardTitles?.subTitle && (
    //           <p className="text-md font-medium text-slate-800">
    //             {cardTitles?.subTitle}
    //           </p>
    //         )}
    //       </section>

    //       {/* Checklist */}
    //       <section className="flex flex-col gap-3">
    //         {contentHeading && (
    //           <p
    //             className={`text-md font-bold capitalize ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}`}
    //           >
    //             {contentHeading}
    //           </p>
    //         )}
    //         {Array.isArray(content) ? (
    //           content?.map((item, index) => (
    //             <div className="flex gap-1 align-start">
    //               {contentIcon && (
    //                 <div>
    //                   <div className="p-1 rounded-xl">{contentIcon}</div>
    //                 </div>
    //               )}
    //               {item?.split("--")?.length === 1 ? (
    //                 <p key={index} className={`${contentColor} font-normal`}>
    //                   {item}
    //                 </p>
    //               ) : (
    //                 <div className="flex flex-col gap-1">
    //                   <p
    //                     key={index}
    //                     className={`${contentColor} font-semibold`}
    //                   >
    //                     {item?.split("--")[0]}
    //                   </p>
    //                   <p key={index} className={`text-slate-700 font-normal`}>
    //                     {item?.split("--")[1]}
    //                   </p>
    //                 </div>
    //               )}
    //             </div>
    //           ))
    //         ) : typeof content !== "object" && content ? (
    //           <p>{content}</p>
    //         ) : null}
    //       </section>

    //       <section className="flex flex-col gap-3 bg-white p-4 border-2 border-blue-100 rounded-md">
    //         <section className="flex flex-col gap-3">
    //           <p
    //             className={`text-md font-bold capitalize ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}`}
    //           >
    //             {section?.title}
    //           </p>
    //           {Array.isArray(section?.content) ? (
    //             section?.content?.map((item, index) => (
    //               <div className="flex gap-1 align-start">
    //                 {sectionIcon && (
    //                   <div>
    //                     <div className="p-1 rounded-xl">{sectionIcon}</div>
    //                   </div>
    //                 )}
    //                 <p key={index} className={`${contentColor} font-normal`}>
    //                   {item}
    //                 </p>
    //               </div>
    //             ))
    //           ) : typeof section?.content !== "object" && section?.content ? (
    //             <p>{section?.content}</p>
    //           ) : null}
    //         </section>
    //       </section>
    //     </section>
    //   );
    case "stack":
      return (
        <section
          className={`h-full flex flex-col gap-3 flex-grow rounded-xl border-2 ${THEME_COLORS?.[themeColor]?.border ? THEME_COLORS?.[themeColor]?.border : DEFAULT?.border} ${THEME_COLORS?.[themeColor]?.cardBg ? THEME_COLORS?.[themeColor]?.cardBg : DEFAULT?.cardBg} p-5`}
        >
          {/* Header */}
          <section className="flex flex-col gap-1">
            <header className="flex items-start justify-between">
              <div
                className={`flex justify-center align-center ${cardTitles?.titleIcon ? "gap-2" : "gap-0"}`}
              >
                <div>{cardTitles?.titleIcon && cardTitles?.titleIcon}</div>
                <h1
                  className={`${ResponsiveHeading} font-semibold ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : cardTitles?.color ? cardTitles?.color : DEFAULT?.title}`}
                >
                  {cardTitles?.title}
                </h1>
              </div>
              {cardHeader?.badge && (
                <span className="rounded-full bg-blue-100 text-blue-400 px-3 py-1 text-xs font-bold">
                  {cardHeader?.badge}
                </span>
              )}
            </header>

            {cardTitles?.subTitle && (
              <p className="text-md font-medium text-slate-800">
                {cardTitles?.subTitle}
              </p>
            )}
          </section>

          {/* Checklist */}
          <section className="flex flex-col gap-3">
            {contentHeading && (
              <p
                className={`text-sm font-bold uppercase tracking-widest ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}`}
              >
                {contentHeading}
              </p>
            )}
            {Array.isArray(content) ? (
              content?.map((item, index) => (
                <div className="flex gap-1 align-start">
                  {contentIcon && (
                    <div>
                      <div className="p-1 rounded-xl">{contentIcon}</div>
                    </div>
                  )}
                  {item?.split("--")?.length === 1 ? (
                    <p key={index} className={`${contentColor} font-normal`}>
                      {item}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <p
                        key={index}
                        className={`${contentColor} font-semibold`}
                      >
                        {item?.split("--")[0]}
                      </p>
                      <p key={index} className={`text-slate-700 font-normal`}>
                        {item?.split("--")[1]}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : typeof content !== "object" && content ? (
              <p>{content}</p>
            ) : null}
          </section>

          {/* Divider */}
          {section?.title && (
            <hr
              className={`my-3 ${THEME_COLORS?.[themeColor]?.hr ? THEME_COLORS?.[themeColor]?.hr : DEFAULT?.hr}`}
            />
          )}

          <section className="flex flex-col gap-3">
            <p
              className={`text-xs font-bold uppercase tracking-widest ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}`}
            >
              {section?.title}
            </p>
            {Array.isArray(section?.content) ? (
              section?.content?.map((item, index) => (
                <div className="flex gap-1 align-start">
                  {sectionIcon && (
                    <div>
                      <div className="p-1 rounded-xl">{sectionIcon}</div>
                    </div>
                  )}
                  {item?.split("--")?.length === 1 ? (
                    <p key={index} className={`${contentColor} font-normal`}>
                      {item}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <p key={index} className={`${contentColor} font-normal`}>
                        {item?.split("--")[0]}
                      </p>
                      <p key={index} className={`text-slate-700 font-normal`}>
                        {item?.split("--")[1]}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : typeof section?.content !== "object" && section?.content ? (
              <p>{section?.content}</p>
            ) : null}
          </section>
        </section>
      );
    default:
      return null;
  }
}
