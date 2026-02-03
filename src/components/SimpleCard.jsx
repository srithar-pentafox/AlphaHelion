import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import React from "react";

const THEME_COLORS = {
  slate: {
    border: "border-slate-200",
    borderHover: "md:hover:border-slate-500",
    title: "text-slate-500",
    iconBg: "bg-slate-100",
    iconText: "text-slate-400",
    dot: "text-slate-400",
    cardBg: "bg-slate-50",
  },
  blue: {
    border: "border-blue-200",
    borderHover: "md:hover:border-blue-500",
    title: "text-blue-500",
    iconBg: "bg-blue-100",
    iconText: "text-blue-400",
    dot: "text-blue-400",
    cardBg: "bg-blue-50",
  },
  red: {
    border: "border-red-200",
    borderHover: "md:hover:border-red-500",
    title: "text-red-500",
    iconBg: "bg-red-100",
    iconText: "text-red-400",
    dot: "text-red-400",
    cardBg: "bg-red-50",
  },
  green: {
    border: "border-green-200",
    borderHover: "md:hover:border-green-500",
    title: "text-green-500",
    iconBg: "bg-green-100",
    iconText: "text-green-400",
    dot: "text-green-400",
    cardBg: "bg-green-50",
  },
  violet: {
    border: "border-violet-200",
    borderHover: "md:hover:border-violet-500",
    title: "text-violet-500",
    iconBg: "bg-violet-100",
    iconText: "text-violet-400",
    dot: "text-violet-400",
    cardBg: "bg-violet-50",
  },
  orange: {
    border: "border-orange-200",
    borderHover: "md:hover:border-orange-500",
    title: "text-orange-500",
    iconBg: "bg-orange-100",
    iconText: "text-orange-400",
    dot: "text-orange-400",
    cardBg: "bg-orange-50",
  },
};

const DEFAULT = {
  border: "border-blue-200",
  title: "text-blue-500", // text-slate-700
  cardBg: "bg-blue-100", // bg-slate-50
};

const contentColor = "text-slate-800"; // text-slate-400

function SimpleCard({
  iconConfig = {},
  themeColor = "blue",
  title = null,
  contentIcon = (
    <IconCircleCheckFilled className="text-blue-400" size={20} stroke={3} />
  ),
  contentHeading = null,
  content = [],
  key,
}) {
  const Icon = iconConfig?.Icon;

  return (
    <section
      className={`flex flex-col gap-2 p-3 ${THEME_COLORS?.[themeColor]?.cardBg ? THEME_COLORS?.[themeColor]?.cardBg : DEFAULT?.cardBg} border-2 ${THEME_COLORS?.[themeColor]?.border ? THEME_COLORS?.[themeColor]?.border : DEFAULT?.border} rounded-xl
      md:p-7 md:gap-4
      `}
      key={key}
    >
      <div className="flex align-center gap-3">
        {Icon && (
          <div
            className={`
                  flex jusify-center align-center ${iconConfig?.iconBg ? iconConfig?.iconBg : THEME_COLORS?.[themeColor]?.iconBg ? THEME_COLORS?.[themeColor]?.iconBg  : "bg-white"} p-2 shadow-lg rounded-lg transition-all duration-200
                  h-11 w-11
                  `}
          >
            <Icon
              size={`${iconConfig?.size ? iconConfig?.size : 28}`}
              stroke={1.5}
              className={`${iconConfig?.iconColor ? iconConfig?.iconColor : THEME_COLORS?.[themeColor]?.iconText ? THEME_COLORS?.[themeColor]?.iconText : "text-blue-300"}`}
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <h1
            className={`font-semibold text-lg ${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}
            md:text-2xl
            `}
          >
            {title}
          </h1>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        {contentHeading && (
          <p
            className={`${THEME_COLORS?.[themeColor]?.title ? THEME_COLORS?.[themeColor]?.title : DEFAULT?.title}`}
          >
            {contentHeading}
          </p>
        )}
        {Array.isArray(content) ? (
          content?.map((item, index) => (
            <div className="flex gap-1 align-start" key={index}>
              {contentIcon && (
                <div>
                  <div className="p-1 rounded-xl">{contentIcon}</div>
                </div>
              )}
              <p className={`${contentColor} font-normal text-md`}>{item}</p>
            </div>
          ))
        ) : typeof content !== "object" && content ? (
          <p className={`${contentColor} font-normal text-md`}>{content}</p>
        ) : null}
      </section>
    </section>
  );
}

export default SimpleCard;
// import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
// import React from "react";

// const contentColor = "text-slate-900"   // text-slate-400

// function SimpleCard({
//   iconConfig = {},
//   bgStyle = "bg-white",
//   title = null,
//   contentIcon = (
//     <IconCircleCheckFilled className="text-blue-400" size={20} stroke={3} />
//   ),
//   contentHeading = null,
//   content = [],
//   key,
// }) {
//   const Icon = iconConfig?.Icon;
//   themeColor = 'red'

//   return (
//     <section
//       className={`flex flex-col gap-4 p-7 ${bgStyle} border-2 border-slate-200 rounded-xl`}
//       key={key}
//     >
//       <div className="flex align-center gap-4">
//         {Icon && (
//           <div
//             className={`
//                   flex jusify-center align-center ${iconConfig?.singleColor ? `bg-${iconConfig?.singleColor}-100` : iconConfig?.iconBg ? iconConfig?.iconBg : "bg-white"} p-2 rounded-lg transition-all duration-200

//                   `}
//           >
//             <Icon
//               size={`${iconConfig?.size ? iconConfig?.size : 28}`}
//               stroke={1.5}
//               className={`${iconConfig?.singleColor ? `text-${iconConfig?.singleColor}-400` : iconConfig?.iconColor}`}
//             />
//           </div>
//         )}
//         <h1 className="font-semibold text-xl text-slate-700">{title}</h1>
//       </div>

//       <section className="flex flex-col gap-3">
//         {contentHeading && <p>{contentHeading}</p>}
//         {Array.isArray(content) ? (
//           content?.map((item, index) => (
//             <div className="flex gap-1 align-start" key={index}>
//               {contentIcon && (
//                 <div>
//                   <div className="p-1 rounded-xl">{contentIcon}</div>
//                 </div>
//               )}
//               <p className={`${contentColor} font-normal text-md`}>{item}</p>
//             </div>
//           ))
//         ) : typeof content !== "object" && content ? (
//           <p className={`${contentColor} font-normal text-md`}>{content}</p>
//         ) : null}
//       </section>
//     </section>
//   );
// }

// export default SimpleCard;
