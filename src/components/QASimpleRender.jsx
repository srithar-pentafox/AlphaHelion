import { IconPointFilled } from "@tabler/icons-react";
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
  cardBg: "bg-blue-100", // bg-slate-50
  hr: "border-slate-400",
};

const contentColor = "text-slate-800";

function QASimpleRender({
  heading,
  content = null,
  contentIcon = <IconPointFilled size={18} className="text-slate-600" />,
  withContentBar = false,
  themeColor = null,
}) {
  return (
    <section className="flex flex-col gap-4 w-full">
      {heading && (
        <h1 className={`${ResponsiveHeading} font-semibold`}>{heading}</h1>
      )}

      {/* ===== CONTENT BAR MODE (Screenshot Style) ===== */}

      {withContentBar && Array.isArray(content) && (
        <section
          className="grid grid-cols-1 gap-4
        md:grid-cols-2
        "
        >
          {content.map((item, index) => {
            const parts = item?.split("--");
            const title = parts.length === 2 ? parts[0] : null;
            const description = parts.length === 2 ? parts[1] : parts[0];

            return (
              <div
                key={index}
                className="
                  relative rounded-lg px-5 py-4
                  border-l-4 border-blue-400 bg-blue-50
                "
              >
                <div className="flex flex-col gap-1">
                  <p className="font-semibold font-2xl text-slate-900">
                    {title}
                  </p>
                  {description && (
                    <p className="text-slate-600">{description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* ===== DEFAULT MODE (Existing behavior) ===== */}
      {!withContentBar && Array.isArray(content) && (
        <section className="flex flex-col gap-3">
          {content.map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              {contentIcon && <div className="mt-1">{contentIcon}</div>}

              {item.split("--").length === 1 ? (
                <p className={`${contentColor}`}>{item}</p>
              ) : (
                <div className="flex flex-col gap-1">
                  <p className={`${contentColor} font-medium`}>
                    {item.split("--")[0]}
                  </p>
                  <p className="text-slate-600">{item.split("--")[1]}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ===== STRING CONTENT ===== */}
      {!Array.isArray(content) && content && (
        <p className={contentColor}>{content}</p>
      )}
    </section>
  );
}

export default QASimpleRender;

// import { IconPointFilled } from "@tabler/icons-react";
// import React from "react";

// const contentColor = "text-slate-800"; // text-slate-400

// function QASimpleRender({
//   heading,
//   content = null,
//   contentIcon = <IconPointFilled size={18} className="text-slate-600" />,
//   withContentBar = false,
//   key,
// }) {
//   return (
//     <section className="flex flex-col gap-3" key={key}>
//       <h1 className="font-semibold text-xl">{heading}</h1>
//       {Array.isArray(content) ? (
//         content?.map((item, index) => (
//           <div className="flex gap-1 align-start">
//             {contentIcon && (
//               <div>
//                 <div className="p-1 rounded-xl">{contentIcon}</div>
//               </div>
//             )}
//             {item?.split("--")?.length === 1 ? (
//               <p key={index} className={`${contentColor} font-normal`}>
//                 {item}
//               </p>
//             ) : (
//               <div className="flex flex-col gap-1">
//                 <p key={index} className={`${contentColor} font-normal`}>
//                   {item?.split("--")[0]}
//                 </p>
//                 <p key={index} className={`text-slate-700 font-normal`}>
//                   {item?.split("--")[1]}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))
//       ) : typeof content !== "object" && content ? (
//         <p>{content}</p>
//       ) : null}
//     </section>
//   );
// }

// export default QASimpleRender;
