import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import SimpleCard from "../../SimpleCard";

import {
  IconBriefcase,
  IconChartBar,
  IconCode,
  IconPointFilled,
  IconSettingsAutomation,
  IconShieldLock,
} from "@tabler/icons-react";

const whatWeDo = [
  {
    title: "Enterprise Technology & Software Solutions",
    iconConfig: {
      Icon: IconCode,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Custom software, digital platforms, and SaaS solutions",
      "Cloud adoption, application modernization, and product engineering",
    ],
  },
  {
    title: "Data, Analytics & Artificial Intelligence",
    iconConfig: {
      Icon: IconChartBar,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Business intelligence, predictive analytics, and real-time insights",
      "AI/ML solutions, generative AI applications, and data-driven decision support",
    ],
  },
  {
    title: "Automation & Intelligent Operations",
    iconConfig: {
      Icon: IconSettingsAutomation,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Workflow automation, RPA, and process orchestration",
      "API management, enterprise integration, and connected ecosystems",
      "Portfolio, program, and project delivery excellence",
    ],
  },
  {
    title: "Cybersecurity & Digital Trust",
    iconConfig: {
      Icon: IconShieldLock,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Security architecture, identity & access management, and threat detection",
      "Risk management, compliance, and DevSecOps",
      "Protection of cloud, enterprise, and critical infrastructure systems",
    ],
  },
  {
    title: "Advisory, Implementation & Managed Services",
    iconConfig: {
      Icon: IconBriefcase,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Strategic consulting, solution roadmaps, and SAP/MS/Cloud advisory",
      "End-to-end implementation, integration, and managed services",
      "Centers of excellence for AI, cybersecurity, and advanced computing",
    ],
  },
];

function WhatWeDo() {
  return (
    <ContentLayout>
      <section className="flex flex-col gap-8">
        <Title
          title="What We Do"
          subTitle="We provide end-to-end technology and digital solutions across strategy, implementation, and managed services"
        />

        <div
          className="
            grid gap-4
            sm:grid-cols-1
            md:grid-cols-2
            md:gap-8
          "
        >
          {whatWeDo.map((item, index) => {
            const isLast = index === whatWeDo.length - 1;
            const isOdd = whatWeDo.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`
        w-full
        ${isOdd && isLast ? "md:col-span-2" : ""}
      `}
              >
                <div
                  className={`
          h-full
          ${isOdd && isLast ? "mx-auto md:max-w-[900px]" : ""}
        `}
                >
                  <SimpleCard {...item} />
                </div>
              </div>
            );
          })}

          {/* {whatWeDo.map((item, index) => {
            const isLast = index === whatWeDo.length - 1;

            return (
              <div
                key={index}
                className={
                  isOdd && isLast ? "md:col-span-2 flex justify-center" : ""
                }
              >
                <div
                  className={
                    isOdd && isLast ? "w-full md:max-w-[900px]" : "w-full"
                  }
                >
                  <SimpleCard {...item} key={index} />
                </div>
              </div>
            );
          })} */}
        </div>
      </section>
    </ContentLayout>
  );
}

export default WhatWeDo;

// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import { IconBriefcase, IconChartBar, IconCode, IconPointFilled, IconRocket, IconSettingsAutomation, IconShieldLock } from "@tabler/icons-react";
// import Title from "../../Title";
// import SimpleCard from "../../SimpleCard";

// const whatWeDo = [
//   {
//       title: "Enterprise Technology & Software Solutions",
//     iconConfig: {
//       Icon: IconCode,
//       iconBg: "bg-white",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Custom software, digital platforms, and SaaS solutions",
//       "Cloud adoption, application modernization, and product engineering",
//     ],
//   },
//   {
//       title: "Data, Analytics & Artificial Intelligence",
//     iconConfig: {
//       Icon: IconChartBar,
//       iconBg: "bg-white",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Business intelligence, predictive analytics, and real-time insights",
//       "AI/ML solutions, generative AI applications, and data-driven decision support",
//     ],
//   },
//   {
//       title: "Automation & Intelligent Operations",
//     iconConfig: {
//       Icon: IconSettingsAutomation,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Workflow automation, RPA, and process orchestration",
//       "API management, enterprise integration, and connected ecosystems",
//       "Portfolio, program, and project delivery excellence",
//     ],
//   },
//   {
//       title: "Cybersecurity & Digital Trust",
//     iconConfig: {
//       Icon: IconShieldLock,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Security architecture, identity & access management, and threat detection",
//       "Risk management, compliance, and DevSecOps",
//       "Protection of cloud, enterprise, and critical infrastructure systems",
//     ],
//   },
//   {
//       title: "Advisory, Implementation & Managed Services",
//     iconConfig: {
//       Icon: IconBriefcase,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Strategic consulting, solution roadmaps, and SAP/MS/Cloud advisory",
//       "End-to-end implementation, integration, and managed services",
//       "Centers of excellence for AI, cybersecurity, and advanced computing",
//     ],
//   },
// ];

// function WhatWeDo() {
//   return (
//     <ContentLayout>
//       <section className="flex flex-col gap-8">
//         <Title
//           title="What We Do"
//           subTitle="We provide end-to-end technology and digital solutions across strategy, implementation, and managed services"
//         />
//         <div
//           className="
//                         grid gap-4
//                       sm:grid-cols-1
//                       md:grid-cols-2 md:gap-8
//                       lg:grid-cols-2 md:gap-8
//                       "
//         >
//           {whatWeDo?.map((item, index) => (
//             <SimpleCard {...item} key={index} />
//           ))}
//         </div>
//       </section>
//     </ContentLayout>
//   );
// }

// export default WhatWeDo;

// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import {
//   IconRocket,
//   IconHierarchy,
//   IconBuilding,
//   IconPointFilled,
// } from "@tabler/icons-react";
// import DynamicCard from "../../DynamicCard";

// const iconConfig = {
//   size: 22,
//   className: "text-blue-600",
// };

// export const coreService = [
//   {
//     id: "portfolio-management",
//     cardHeader: {
//       iconConfig: {
//         Icon: IconRocket,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     cardTitles: {
//       title: "Portfolio Management",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Align strategy, investment, and execution across the enterprise.",
//       "Portfolio strategy alignment & prioritization",
//       "Investment planning & demand management",
//       "Executive dashboards & governance frameworks",
//       "Benefits realization & performance tracking",
//       "Capacity, dependency & resource management",
//     ],
//   },
//   {
//     cardHeader: {
//       iconConfig: {
//         Icon: IconHierarchy,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     cardTitles: {
//       title: "Program Management",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),

//     content: [
//       "Lead complex, multi-project programs with coordinated execution.",
//       "End-to-end program governance & leadership",
//       "Integrated planning & roadmap management",
//       "Cross-project dependency & risk management",
//       "Stakeholder & change management",
//       "Program health checks & assurance",
//     ],
//   },
//   {
//     cardHeader: {
//       iconConfig: {
//         Icon: IconBuilding,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     cardTitles: {
//       title: "Project Management",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),

//     content: [
//       "Deliver initiatives with predictable outcomes and strong controls.",
//       "Full lifecycle project delivery",
//       "Scope, schedule, cost & quality management",
//       "Risk, issue & change control",
//       "Executive reporting & stakeholder communication",
//       "Project recovery & turnaround engagements",
//     ],
//   },
//   {
//     cardHeader: {
//       iconConfig: {
//         Icon: IconBuilding,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     cardTitles: {
//       title: "PMO Establishment & Optimization",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),

//     content: [
//       "Build PMOs that drive consistency, visibility, and decision-making.",
//       "Enterprise / Portfolio / Program / Project PMO design",
//       "Governance frameworks & delivery standards",
//       "Tool selection & reporting automation",
//       "PMO maturity assessments & roadmaps",
//     ],
//   },
// ];

// function WhatWeDo() {
//   return (
//     <>
//       <ContentLayout cardBg="bg-white">
//         <section
//         className="flex flex-col gap-8 bg-slate-50 p-5"
//         >
//           <Title title="Overview" />
//           <p>
//             AlphaHelion Global partners with organizations to deliver
//             mission-critical initiatives with confidence. Our Delivery
//             Excellence services span Portfolio, Program, and Project Management,
//             grounded in strong governance, disciplined execution, and measurable
//             business outcomes. We help leadership teams translate strategy into
//             execution while improving transparency, predictability, and value
//             realization across complex initiatives.
//           </p>
//         </section>
//       </ContentLayout>

//       <ContentLayout cardBg="bg-white">
//         <section className="flex flex-col gap-8">
//           <Title title="Our Service Offerings" />
//           <section
//             className="
//                         grid gap-4
//                       md:grid-cols-1 md:gap-10
//                       lg:grid-cols-2 md:gap-8
//                       "
//           >
//             {coreService?.map((service, index) => (
//               <DynamicCard {...service} key={index} />
//             ))}
//           </section>
//         </section>
//       </ContentLayout>
//     </>
//   );
// }

// export default WhatWeDo;
