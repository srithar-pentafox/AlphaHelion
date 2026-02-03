import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import { IconBulb, IconChartLine, IconCircleCheckFilled, IconRocket, IconSettings } from "@tabler/icons-react";
import StatsCard from "../../StatsCard";

export const engagementModels = [
  {
    iconConfig: {
      Icon: IconBulb,
      singleColor: "blue",
    },
    title: "Delivery Excellence",
    subTitle: "End-to-end governance, execution, and measurable outcomes"
},
{
    iconConfig: {
        Icon: IconRocket,
        singleColor: "blue",
    },
    title: "Innovation at Scale",
    subTitle: "Modern, clean-core, and future-ready technology solutions"
},
{
    iconConfig: {
        Icon: IconSettings,
        singleColor: "blue",
    },
    title: "Trusted Partnerships",
    subTitle: "Long-term collaboration, not just projects"
},
{
    iconConfig: {
        Icon: IconChartLine,
        singleColor: "blue",
    },
    title: "Industry Expertise",
    subTitle: "Deep knowledge across enterprise technology and key sectors"
  },
];

function WhyChooseAlphaHelionGlobal() {
  return (
    <ContentLayout>
      <section className="flex flex-col gap-12">
        <Title title="Why Choose AlphaHelion Global" />

        <section
          className="
                grid gap-4
              sm:grid-cols-1
              md:grid-cols-2 md:gap-8 
              xl:grid-cols-4 md:gap-8
              "
        >
          {engagementModels?.map((model, index) => (
            <StatsCard {...model} key={index} />
          ))}
        </section>
      </section>
    </ContentLayout>
  );
}

export default WhyChooseAlphaHelionGlobal;
// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import { IconCircleCheckFilled } from "@tabler/icons-react";

// const whyChooseData = [
//   {
//     title: "Delivery Excellence",
//     description: "End-to-end governance, execution, and measurable outcomes",
//   },
//   {
//     title: "Innovation at Scale",
//     description:
//       "Modern, clean-core, and future-ready technology solutions",
//   },
//   {
//     title: "Trusted Partnerships",
//     description: " Long-term collaboration, not just projects",
//   },
//   {
//     title: "Industry Expertise",
//     description: "Deep knowledge across enterprise technology and key sectors",
//   },
// ];

// function WhyChooseAlphaHelionGlobal() {
//   return (
//     <ContentLayout>
//       <section className="flex flex-col gap-12">
//         <Title title="Why Choose AlphaHelion Global" />

//         <div
//           className="
//             grid gap-8
//             sm:grid-cols-1
//             md:grid-cols-2
//             lg:grid-cols-4
//           "
//         >
//           {whyChooseData.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 flex flex-col gap-4
//                 rounded-2xl
//                 bg-white
//                 p-6
//                 shadow-sm
//                 border border-slate-100
//               "
//             >
//               <IconCircleCheckFilled size={26} className="text-blue-500" />

//               <h3 className="text-lg text-blue-500">
//                 {item.title}
//               </h3>

//               <p className="font-normal text-md">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </ContentLayout>
//   );
// }

// export default WhyChooseAlphaHelionGlobal;
