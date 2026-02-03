import React from "react";
import ContentLayout from "./ContentLayout";
import { IconPointFilled } from "@tabler/icons-react";

export default function CommonHero({
  data = {},
  cardBg = "bg-gradient-to-l from-blue-400 via-blue-300 to-white-100",
  floatingCard = false,
}) {
  return (
    <ContentLayout cardBg={cardBg}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="h-full">
          {/* Badge */}
          {data?.badge?.content && (
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
              {data?.badge?.icon}
              {data?.badge?.content?.toUpperCase()}
            </div>
          )}

          <h1
            className="
            mt-5 text-4xl font-bold leading-tight text-slate-900
            lg:text-5xl 
            "
            dangerouslySetInnerHTML={{ __html: data?.heading }}
          />
          {data?.tagline && (
            <p className="text-md text-blue-600">{data?.tagline}</p>
          )}

          <p
            className="mt-6 text-xl text-slate-800"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          {data?.keypoints?.length > 0 && (
            <section className="flex flex-col gap-3 mt-6">
              {data.keypoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <IconPointFilled className="text-blue-500" />
                  <p className="text-xl text-slate-600">{point}</p>
                </div>
              ))}
            </section>
          )}

          {/* <p className="mt-6 max-w-xl text-xl text-slate-600"
          >
            {data.description}
          </p> */}

          {/* Buttons */}
          {data?.actionButtons?.length > 0 && (
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:gap-4 md:justify-start">
              {data.actionButtons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  className={`
          w-full sm:w-auto
          rounded-lg px-4 py-3
          text-base font-semibold text-center
          transition-all duration-300
          shadow-md hover:shadow-lg active:scale-95
          ${btn?.styles?.base}
          ${btn?.styles?.hover}
          ${btn?.styles?.border}
        `}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}

          {/* {data?.actionButtons?.length && (
            <div className="mt-8 flex flex-wrap gap-4">
              {data?.actionButtons?.map((btn, index) => {
                const isGhost = btn?.bgNone;
                return (
                  <a
                    key={index}
                    href={btn?.href}
                    className={`
                      rounded-md px-6 py-3 text-md font-semibold transition cursor-pointer shadow-md
                      ${
                        isGhost
                          ? "border border-slate-300 text-slate-700 bg-transparent hover:bg-slate-200"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                  >
                    {btn?.label}
                  </a>
                );
              })}
            </div>
          )} */}
        </div>

        {/* RIGHT IMAGE */}
        {data?.sectionImage && (
          <div className="relative">
            <img
              src={data?.sectionImage?.src}
              alt="Enterprise Office"
              className="h-[460px] w-full rounded-2xl object-cover shadow-2xl"
            />

            {/* {floatingCard && (
              <div className="absolute bottom-[-25px] left-[-25px] flex items-center gap-4 rounded-xl bg-white px-10 py-5 shadow-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Clean Core Ready
                  </p>
                  <p className="text-xs text-slate-500">
                    SAP S/4HANA Public Cloud
                  </p>
                </div>
              </div>
            )} */}
          </div>
        )}
      </div>
    </ContentLayout>
  );
}

// import React from "react";
// import companyImage from "../../../assets/company-image.png";
// import ContentLayout from "../../ContentLayout";

// const data = {
//   badge: {
//     icon: null,
//     content: "ENTERPRISE GRADE EXCELLENCE",
//   },
//   heading: `Enterprise Technology,
//             <br />
//             <span className="text-blue-600">SAP Public Cloud</span> &<br />
//             Delivery Excellence`,
// };

// export default function CommonHero() {
//   return (
//     <ContentLayout>
//       <div
//         className={`mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}
//       >
//         {/* LEFT CONTENT */}
//         <div>
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-600">
//             ENTERPRISE GRADE EXCELLENCE
//           </div>

//           {/* <!-- Heading --> */}
//           <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
//             Enterprise Technology,
//             <br />
//             <span className="text-blue-600">SAP Public Cloud</span> &<br />
//             Delivery Excellence
//           </h1>

//           {/* Description */}
//           <p className="mt-6 max-w-xl text-xl text-slate-600">
//             We help organizations modernize ERP, enable clean-core innovation,
//             and deliver strategic initiatives with confidence.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow cursor-pointer hover:bg-slate-800 transition">
//               Explore Services
//             </button>

//             <button className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition">
//               Our Methodology
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <img
//             src={companyImage.src}
//             alt="Enterprise Office"
//             className="h-[460px] w-full rounded-2xl object-cover shadow-2xl"
//           />

//           {/* Floating Card */}
//           <div className="absolute bottom-[-25px] left-[-25px] flex items-center gap-4 rounded-xl bg-white px-10 py-5 shadow-2xl">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
//               ✓
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-slate-900">
//                 Clean Core Ready
//               </p>
//               <p className="text-xs text-slate-500">SAP S/4HANA Public Cloud</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ContentLayout>
//   );
// }
