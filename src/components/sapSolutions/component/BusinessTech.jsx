import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import StatsCard from "../../StatsCard";
import {
  IconChartBar,
  IconLink,
  IconPlugConnected,
  IconPointFilled,
  IconPuzzle,
  IconRefresh,
  IconRocket,
  IconSettingsAutomation,
  IconShieldCheck,
  IconStack,
  
} from "@tabler/icons-react";
import QASimpleRender from "../../QASimpleRender";
import DynamicCard from "../../DynamicCard";
import { ResponsiveHeading } from "../../../constant/commonConfig";

const iconConfigSize = {
  size: 28,
};

const QAquestions = [
  {
    heading: "What is SAP BTP?",
    content:
      "SAP Business Technology Platform (BTP) is an integrated platform-as-a-service (PaaS) that brings together data management, analytics, application development, automation, integration and AI capabilities in one unified environment.",
  },
  {
    heading: "Key Highlights",
    content: [
      "Cloud-native platform for building and extending SAP solutions",
      "Seamlessly connects SAP and non-SAP systems",
      "Enables rapid innovation with low-code/no-code tools",
      "Enterprise-grade security and compliance built-in",
    ],
  },
];

const sapBenefits = [
  {
    cardTitles: {
      // titleIcon: (
      //   <div className="bg-white rounded-sm p-1 shadow-md">
      //     <IconCompass size={32} className="text-green-400" />
      //   </div>
      // ),
      title: "For Your Business",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Accelerated Innovation -- Build and deploy applications 70% faster with low-code tools.",
      "Reduced TCO -- Consolidate technology stack and leverage cloud economics.",
      "Future-Ready Architecture -- Stay current with continuous updates and innovations.",
      "Enhanced Agility -- Respond quickly to changing business requirements.",
    ],
  },
  {
    cardTitles: {
      // titleIcon: (
      //   <div className="bg-white rounded-sm p-1 shadow-md">
      //     <IconCompass size={32} className="text-green-400" />
      //   </div>
      // ),
      title: "Technical Advantages",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Unified Platform -- One platform for all your development, integration, and data needs.",
      "Open & Extensible -- Integrate with any system using open standards and APIs.",
      "Scalable Infrastructure -- Auto-scaling capabilities to handle any workload.",
      "Multi-Cloud Support -- Deploy on AWS, Azure, Google Cloud, or SAP infrastructure.",
    ],
  },
];

const coreStrategy = [
  {
    heading: "SAP BTP & Clean Core Strategy",
    content:
      "SAP BTP is central to achieving and maintaining a Clean Core approach in your SAP landscape.",
  },
  {
    heading: "What is Clean Core?",
    content:
      "Clean Core means keeping your SAP ERP system stable, standardized, and upgrade-ready by moving customizations and extensions to SAP BTP.",
  },
];

const howBtpClearCore = [
  {
    iconConfig: {
      Icon: IconStack,
      singleColor: "green",
    },
    title: "Side-by-Side Extensions",
    subTitle:
      "Build custom applications on BTP without modifying core SAP systems",
  },
  {
    iconConfig: {
      Icon: IconPlugConnected,
      singleColor: "green",
    },
    title: "Non-Invasive Integrations",
    subTitle: "Connect systems via APIs instead of custom code in ERP",
  },
  {
    iconConfig: {
      Icon: IconRefresh,
      singleColor: "green",
    },
    title: "Seamless Upgrades",
    subTitle:
      "Keep your SAP core clean for smooth S/4HANA migrations and updates",
  },
  {
    iconConfig: {
      Icon: IconShieldCheck,
      singleColor: "green",
    },
    title: "Future-Proof Customizations",
    subTitle: " Extensions built on BTP remain compatible across SAP updates",
  },
];

function BusinessTech() {
  return (
    <ContentLayout>
      <section className="flex flex-col gap-8">
        <Title title="SAP BUSINESS TECHNOLOGY PLATFORM (BTP)" />
        {QAquestions?.map((QA, index) => (
          <QASimpleRender {...QA} key={index} />
        ))}

        <section className="flex flex-col gap-5">
          <h1 className={`${ResponsiveHeading} font-semibold`}>
            Benefits of SAP BTP
          </h1>
          <section
            className="
        grid grid-cols-1 gap-4
        md:grid-cols-2 gap-6
        "
          >
            {sapBenefits?.map((item, index) => (
              <DynamicCard {...item} cardType="stack" key={index} />
            ))}
          </section>
        </section>

        {coreStrategy?.map((QA, index) => (
          <QASimpleRender {...QA} key={index} />
        ))}

        <section className="flex flex-col gap-5">
          <h1 className={`${ResponsiveHeading} font-semibold`}>
            How BTP Enables Clean Core
          </h1>
          <section
            className="
        grid grid-cols-1 gap-4
        md:grid-cols-4
        "
          >
            {howBtpClearCore?.map((item, index) => (
              <StatsCard {...item} key={index} />
            ))}
          </section>

          <QASimpleRender
            heading="Result"
            content="Reduce upgrade effort by up to 50% while maintaining business-specific functionality"
          />
        </section>

        {/* <section className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">SAP BTP & Clean Core Strategy</h1>
          <section
            className="
        grid grid-cols-1 gap-4
        md:grid-cols-2
        "
          >
            {sapBenefits?.map((item, index) => (
              <DynamicCard {...item} cardType="stack" key={index} />
            ))}
          </section>
        </section> */}

        {/* <ListInCard
          {...BTPService}
          contentListIcon={
            <IconArrowRight size={18} className="text-blue-400" />
          }
        /> */}
      </section>
    </ContentLayout>
  );
}

export default BusinessTech;
// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import StatsCard from "../../StatsCard";
// import {
//   IconArrowRight,
//   IconChartBar,
//   IconLink,
//   IconPointFilled,
//   IconPuzzle,
//   IconPuzzleFilled,
//   IconRobot,
//   IconSettingsAutomation,
// } from "@tabler/icons-react";
// import ListInCard from "../../ListInCard";

// const iconConfigSize = {
//   size: 28,
// };

// const statsCard = [
//   {
//     iconConfig: {
//       Icon: IconLink,
//       singleColor: "blue",
//       ...iconConfigSize,
//     },
//     title: "Integration & Connectivity",
//     subTitle: "Seamless system connections",
//   },
//   {
//     iconConfig: {
//       Icon: IconPuzzle,
//       iconBg: "bg-violet-100",
//       iconColor: "text-violet-400",
//       ...iconConfigSize,
//     },
//     title: "Side-by-Side Extensions",
//     subTitle: "Clean core customizations",
//   },
//   {
//     iconConfig: {
//       Icon: IconSettingsAutomation,
//       singleColor: "green",
//       ...iconConfigSize,
//     },
//     title: "Automation & AI",
//     subTitle: "Intelligent process automation",
//   },
//   {
//     iconConfig: {
//       Icon: IconChartBar,
//       iconBg: "bg-orange-100",
//       iconColor: "text-orange-400",
//       ...iconConfigSize,
//     },
//     title: "Data & Analytics",
//     subTitle: "Unified data insights",
//   },
// ];

// const BTPService = {
//   title: "Key Services",
//   contentList: [
//     {
//       subTitle: "SAP BTP Application Development",
//     },
//     {
//       subTitle: "SAP BTP Automation & AI",
//     },
//     {
//       subTitle: "SAP BTP Cloud Migration",
//     },
//     {
//       subTitle: "SAP BTP Performance Optimization",
//     },
//     {
//       subTitle: "SAP BTP Integration Services",
//     },
//     {
//       subTitle: "SAP BTP Data & Analytics",
//     },
//     {
//       subTitle: "SAP BTP Security & Compliance",
//     },
//     {
//       subTitle: "SAP BTP Cloud Operations",
//     },
//   ],
// };

// function BusinessTech() {
//   return (
//     <ContentLayout>
//       <section className="flex flex-col gap-8">
//         <Title
//           title="SAP S/4HANA Public Cloud Services"
//           subTitle="Extend, integrate, and innovate on SAP’s unified platform for intelligent enterprise."
//         />
//         <section
//           className="
//         grid grid-cols-1 gap-4
//         md:grid-cols-2
//         lg:grid-cols-4
//         "
//         >
//           {statsCard?.map((stats, index) => (
//             <StatsCard {...stats} key={index} />
//           ))}
//         </section>

//         <ListInCard
//           {...BTPService}
//           contentListIcon={
//             <IconArrowRight size={18} className="text-blue-400" />
//           }
//         />
//       </section>
//     </ContentLayout>
//   );
// }

// export default BusinessTech;
