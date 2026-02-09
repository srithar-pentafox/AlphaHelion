import React from "react";
import CommonHero from "../../CommonHero";
import DataScienceHeroImage from "../../../assets/DataScience-hero.png";
import {
  IconBrain,
  IconChartBar,
  IconCompass,
  IconCpu,
  IconDatabase,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import ContentLayout from "../../ContentLayout";
import ContactForm from "../../contactForm/ContactForm";

export const heroData = {
  heading: `Data Science & Analytics`,
  tagline: "Accelerate | Innovate | Transform",
  description: `We help organizations design, build, and scale modern data, analytics, and AI capabilities that drive measurable business outcomes.
From strategy and platforms to advanced analytics, automation, and enablement, we partner with you across the entire data & AI journey.`,
  sectionImage: DataScienceHeroImage,
};

const dataScience = [
  {
    cardTitles: {
      iconConfig: {
        Icon: IconCompass,
        iconColor: "text-blue-400",
        // size: 32
      },
      title: "Data & Analytics Strategy Advisory",
    },
    contentHeading:
      "We help organizations strategize their data and analytics ambitions into a clear, executable roadmap.",
    content: [
      "Define enterprise data and analytics vision aligned to business outcomes",
      "Assess current-state data maturity, platforms, skills, and governance",
      "Create a prioritized roadmap covering quick wins and long-term capabilities",
      "Define processed, establish operating model, KPIs, and value realization plan",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconTarget,
        iconColor: "text-blue-400",
      },
      title: "Analytics Use Case Design & Value Realization",
    },
    contentHeading:
      "We help organizations prioritize analytics initiatives and drive measurable business value.",
    content: [
      "Identify and prioritize high-value analytics and AI use cases",
      "Define business problems, success metrics, and ROI expectations",
      "Run pilots and proofs of value before large-scale rollout",
      "Track benefits realization and continuously optimize outcomes",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconBrain,
        iconColor: "text-blue-400",
      },
      title: "Advanced Analytics & Data Science Solutions",
    },
    contentHeading:
      "We help organizations turn data into predictive and intelligent decision-making.",
    content: [
      "Develop predictive, prescriptive, and AI/ML models for key use cases",
      "Apply statistical, machine learning, and optimization techniques",
      "Embed models into business processes and applications",
      "Monitor model performance, bias, drift, and business impact",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconDatabase,
        iconColor: "text-blue-400",
      },
      title: "Modern Data Platform & Engineering Services",
    },
    contentHeading:
      "We help organizations build scalable, secure, and trusted data platforms.",
    content: [
      "Design and implement scalable cloud and hybrid data architectures",
      "Build robust data pipelines for batch, streaming, and real-time analytics",
      "Enable data quality, lineage, security, and governance by design",
      "Optimize performance, cost, and reliability of data platforms",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconUsers,
        iconColor: "text-blue-400",
      },
      title: "Analytics, Data & AI Capability Enablement (Training & CoE)",
    },
    contentHeading:
      "We help organizations develop skills, governance, and culture to sustain analytics success.",
    content: [
      "Upskill teams across data engineering, analytics, visualization, and AI",
      "Deliver role-based training for leaders, analysts, engineers, and scientists",
      "Establish analytics Center of Excellence (CoE)",
      "Coach teams on tools, governance, and sustainable adoption",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconCpu,
        iconColor: "text-blue-400",
      },
      title: "Intelligent Automation & AI-Driven Process Transformation",
    },
    contentHeading:
      "We help organizations automate and optimize business processes using AI and intelligent automation.",
    content: [
      "Identify and prioritize high-impact automation opportunities across functions",
      "Design and implement AI-driven automation using RPA, ML, NLP, and GenAI",
      "Integrate automation with data platforms, analytics, and core systems",
      "Measure efficiency gains, cost savings, and business impact at scale",
    ],
  },
  {
    cardTitles: {
      iconConfig: {
        Icon: IconChartBar,
        iconColor: "text-blue-400",
      },
      title: "Business Intelligence & Data Visualization",
    },
    contentHeading:
      "We help organizations make insights accessible, actionable, and easy to understand.",
    content: [
      "Design intuitive dashboards and self-service analytics experiences",
      "Translate complex data into actionable insights for decision-makers",
      "Standardized metrics, definitions, and reporting across the organization",
      "Enable storytelling with data for executives and operational teams",
    ],
  },
];

function DataScienceAnalytics() {
  return (
    <section>
      <CommonHero data={heroData} />
      <ContentLayout>
        <section className="flex flex-col gap-8">
          <Title title="Data Science & Analytics" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataScience?.map((item, index) => {
              // Add offset for odd-numbered cards (0-indexed, so even indices)
              if (index % 2 === 0 && index === dataScience.length - 1) {
                // Last card when odd total count
                return (
                  <div
                    key={index}
                    className="md:col-span-2 md:w-1/2 md:mx-auto"
                  >
                    <DynamicCard {...item} />
                  </div>
                );
              }

              // Regular cards
              return (
                <div key={index}>
                  <DynamicCard {...item} />
                </div>
              );
            })}
          </div>
        </section>
      </ContentLayout>

      <ContentLayout cardBg="bg-slate-50">
        <ContactForm />
      </ContentLayout>
    </section>
  );
}

export default DataScienceAnalytics;
// import React from "react";
// import CommonHero from "../../CommonHero";
// import DataScienceHeroImage from "../../../assets/sap-solution-hero.jpg";
// import {
//   IconBrain,
//   IconChartBar,
//   IconCompass,
//   IconCpu,
//   IconDatabase,
//   IconTarget,
//   IconUsers,
// } from "@tabler/icons-react";
// import Title from "../../Title";
// import DynamicCard from "../../DynamicCard";
// import ContentLayout from "../../ContentLayout";

// export const heroData = {
//   heading: `Data Science & Analytics`,
//   sectionImage: DataScienceHeroImage,
// };

// const dataScience = [
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconCompass,
//         iconColor: "text-blue-400",
//       },
//       title: "Data & Analytics Strategy Advisory",
//     },
//     contentHeading:
//       "We help organizations strategize their data and analytics ambitions into a clear, executable roadmap.",
//     content: [
//       "Define enterprise data and analytics vision aligned to business outcomes",
//       "Assess current-state data maturity, platforms, skills, and governance",
//       "Create a prioritized roadmap covering quick wins and long-term capabilities",
//       "Define processed, establish operating model, KPIs, and value realization plan",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconTarget,
//         iconColor: "text-blue-400",

//         // iconColor: "text-green-500",
//       },
//       title: "Analytics Use Case Design & Value Realization",
//     },
//     contentHeading:
//       "We help organizations prioritize analytics initiatives and drive measurable business value.",
//     content: [
//       "Identify and prioritize high-value analytics and AI use cases",
//       "Define business problems, success metrics, and ROI expectations",
//       "Run pilots and proofs of value before large-scale rollout",
//       "Track benefits realization and continuously optimize outcomes",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconCpu,
//         iconColor: "text-blue-400",

//         // iconColor: "text-purple-500",
//       },
//       title: "Intelligent Automation & AI-Driven Process Transformation",
//     },
//     contentHeading:
//       "We help organizations automate and optimize business processes using AI and intelligent automation.",
//     content: [
//       "Identify and prioritize high-impact automation opportunities across functions",
//       "Design and implement AI-driven automation using RPA, ML, NLP, and GenAI",
//       "Integrate automation with data platforms, analytics, and core systems",
//       "Measure efficiency gains, cost savings, and business impact at scale",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconBrain,
//         iconColor: "text-blue-400",

//         // iconColor: "text-orange-500",
//       },
//       title: "Advanced Analytics & Data Science Solutions",
//     },
//     contentHeading:
//       "We help organizations turn data into predictive and intelligent decision-making.",
//     content: [
//       "Develop predictive, prescriptive, and AI/ML models for key use cases",
//       "Apply statistical, machine learning, and optimization techniques",
//       "Embed models into business processes and applications",
//       "Monitor model performance, bias, drift, and business impact",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconDatabase,
//         iconColor: "text-blue-400",

//         // iconColor: "text-cyan-500",
//       },
//       title: "Modern Data Platform & Engineering Services",
//     },
//     contentHeading:
//       "We help organizations build scalable, secure, and trusted data platforms.",
//     content: [
//       "Design and implement scalable cloud and hybrid data architectures",
//       "Build robust data pipelines for batch, streaming, and real-time analytics",
//       "Enable data quality, lineage, security, and governance by design",
//       "Optimize performance, cost, and reliability of data platforms",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconChartBar,
//         iconColor: "text-blue-400",

//         // iconColor: "text-pink-500",
//       },
//       title: "Business Intelligence & Data Visualization",
//     },
//     contentHeading:
//       "We help organizations make insights accessible, actionable, and easy to understand.",
//     content: [
//       "Design intuitive dashboards and self-service analytics experiences",
//       "Translate complex data into actionable insights for decision-makers",
//       "Standardized metrics, definitions, and reporting across the organization",
//       "Enable storytelling with data for executives and operational teams",
//     ],
//   },
//   {
//     cardTitles: {
//       iconConfig: {
//         Icon: IconUsers,
//         iconColor: "text-blue-400",
//         // iconColor: "text-indigo-500",
//       },
//       title: "Analytics, Data & AI Capability Enablement (Training & CoE)",
//     },
//     contentHeading:
//       "We help organizations develop skills, governance, and culture to sustain analytics success.",
//     content: [
//       "Upskill teams across data engineering, analytics, visualization, and AI",
//       "Deliver role-based training for leaders, analysts, engineers, and scientists",
//       "Establish analytics Center of Excellence (CoE)",
//       "Coach teams on tools, governance, and sustainable adoption",
//     ],
//   },
// ];

// function DataScienceAnalytics() {
//   return (
//     <section>
//       <CommonHero data={heroData} />
//       <ContentLayout>
//         <section className="flex flex-col gap-8">
//           <Title title="Data Science & Analytics" />
//           <div
//             className="
//                 grid grid-cols-1 gap-4
//                 md:grid-cols-2 gap-6
//                 "
//           >
//             {dataScience?.map((item, index) => (
//               <DynamicCard {...item} key={index} />
//             ))}
//           </div>
//         </section>
//       </ContentLayout>
//     </section>
//   );
// }

// export default DataScienceAnalytics;
