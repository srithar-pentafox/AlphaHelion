import React, { useEffect } from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import { IconRocket, IconHierarchy, IconBuilding } from "@tabler/icons-react";
import DynamicCard from "../../DynamicCard";

/* =========================
   DATA SETS
========================= */

export const coreService = [
  {
    id: "portfolio-management",
    cardTitles: {
      title: "Portfolio Management",
      iconConfig: {
        Icon: IconRocket,
        iconBg: "bg-white",
        iconColor: "text-blue-400",
      },
    },
    content: [
      "Align strategy, investment, and execution across the enterprise.",
      "Portfolio strategy alignment & prioritization",
      "Investment planning & demand management",
      "Executive dashboards & governance frameworks",
      "Benefits realization & performance tracking",
      "Capacity, dependency & resource management",
    ],
  },
  {
    id: "program-management",
    cardTitles: {
      title: "Program Management",
      iconConfig: {
        Icon: IconHierarchy,
        iconBg: "bg-white",
        iconColor: "text-blue-400",
      },
    },
    content: [
      "Lead complex, multi-project programs with coordinated execution.",
      "End-to-end program governance & leadership",
      "Integrated planning & roadmap management",
      "Cross-project dependency & risk management",
      "Stakeholder & change management",
      "Program health checks & assurance",
    ],
  },
  {
    id: "project-management",
    cardTitles: {
      title: "Project Management",
      iconConfig: {
        Icon: IconBuilding,
        iconBg: "bg-white",
        iconColor: "text-blue-400",
      },
    },
    content: [
      "Deliver initiatives with predictable outcomes and strong controls.",
      "Full lifecycle project delivery",
      "Scope, schedule, cost & quality management",
      "Risk, issue & change control",
      "Executive reporting & stakeholder communication",
      "Project recovery & turnaround engagements",
    ],
  },
  {
    id: "pmo-establishment",
    cardTitles: {
      title: "PMO Establishment & Optimization",
      iconConfig: {
        Icon: IconBuilding,
        iconBg: "bg-white",
        iconColor: "text-blue-400",
      },
    },
    content: [
      "Build PMOs that drive consistency, visibility, and decision-making.",
      "Enterprise / Portfolio / Program / Project PMO design",
      "Governance frameworks & delivery standards",
      "Tool selection & reporting automation",
      "PMO maturity assessments & roadmaps",
    ],
  },
  {
    id: "value-proposition",
    cardTitles: {
      title: "Our Value Proposition",
      iconConfig: {
        Icon: IconBuilding,
        iconBg: "bg-white",
        iconColor: "text-blue-400",
      },
    },
    content: [
      "Strong executive governance & real-time visibility",
      "Proven delivery frameworks & best practices",
      "Flexible engagement & operating models",
      "Focus on business outcomes and benefits realization",
    ],
  },
];


function ServiceOffers() {
  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          element.style.backgroundColor = "#f0f9ff";
          setTimeout(() => {
            element.style.backgroundColor = "";
          }, 2000);
        }, 300);
      }
    }
  }, []);

  return (
    <>
      {/* ================= Overview ================= */}
      <ContentLayout cardBg="bg-white">
        <section className="flex flex-col gap-8">
          <Title title="Overview" />
          <p className="word-spacing-10">
            AlphaHelion Global partners with organizations to deliver
            mission-critical initiatives with confidence. Our Delivery
            Excellence services span Portfolio, Program, and Project Management,
            grounded in strong governance, disciplined execution, and measurable
            business outcomes.
          </p>
        </section>
      </ContentLayout>

      {/* ================= Services ================= */}
      <ContentLayout cardBg="bg-white">
        <section className="flex flex-col gap-8">
          <Title title="Our Service Offerings" />

          <section
            className="
              grid grid-cols-1 gap-4
              lg:grid-cols-2 lg:gap-8
            "
          >
            {coreService.map((item, index) => {
              const isLast = index === coreService.length - 1;
              const isOdd = coreService.length % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className={`w-full ${isOdd && isLast ? "lg:col-span-2" : ""}`}
                >
                  <div
                    className={`h-full ${
                      isOdd && isLast ? "mx-auto lg:max-w-[600px]" : ""
                    }`}
                  >
                    <DynamicCard {...item} hoverEffect={false} />
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </ContentLayout>
    </>
  );
}

export default ServiceOffers;

// import React, { useEffect } from "react";
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
//     cardTitles: {
//       title: "Portfolio Management",
//       iconConfig: {
//         Icon: IconRocket,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
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
//     id: "program-management",
//     cardTitles: {
//       title: "Program Management",
//       iconConfig: {
//         Icon: IconHierarchy,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
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
//     id: "project-management",
//     cardTitles: {
//       title: "Project Management",
//       iconConfig: {
//         Icon: IconBuilding,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
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
//     id: "pmo-establishment",
//     cardTitles: {
//       title: "PMO Establishment & Optimization",
//       iconConfig: {
//         Icon: IconBuilding,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     content: [
//       "Build PMOs that drive consistency, visibility, and decision-making.",
//       "Enterprise / Portfolio / Program / Project PMO design",
//       "Governance frameworks & delivery standards",
//       "Tool selection & reporting automation",
//       "PMO maturity assessments & roadmaps",
//     ],
//   },
// ];

// const Proposition = [
//   {
//     id: "pmo-establishment",
//     cardTitles: {
//       title: "Our Value Proposition",
//       iconConfig: {
//         Icon: IconBuilding,
//         iconBg: "bg-white",
//         iconColor: "text-blue-400",
//       },
//     },
//     content: [
//       "Strong executive governance & real-time visibility",
//       "Proven delivery frameworks & best practices",
//       "Flexible engagement & operating models",
//       "Focus on business outcomes and benefits realization, not just project activity",
//     ],
//   },
// ];

// function ServiceOffers() {
//   // Handle hash on page load
//   useEffect(() => {
//     const hash = window.location.hash.substring(1); // Remove '#'
//     if (hash) {
//       const element = document.getElementById(hash);
//       if (element) {
//         // Small delay to ensure page is loaded
//         setTimeout(() => {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//             inline: "nearest",
//           });

//           element.style.backgroundColor = "#f0f9ff";
//           setTimeout(() => {
//             element.style.backgroundColor = "";
//           }, 2000);
//         }, 300);
//       }
//     }
//   }, []);

//   return (
//     <>
//       <ContentLayout cardBg="bg-white">
//         <section className="flex flex-col gap-8">
//           <Title title="Overview" />
//           <p className="word-spacing-10">
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
//               <DynamicCard {...service} hoverEffect={false} key={index} />
//             ))}
//           </section>

//           {/* <section className="flex justify-center">
//             {Proposition?.map((item, index) => (
//               <div className="flex justify-center w-[100%] md:w-[50%]">

//                 <DynamicCard {...item} hoverEffect={false} key={index} />
//               </div>
//             ))}
//           </section> */}
//         </section>
//       </ContentLayout>
//     </>
//   );
// }

// export default ServiceOffers;
