import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import {
  IconArrowRight,
  IconCircleCheckFilled,
  IconCompass,
  IconPointFilled,
  IconRocket,
} from "@tabler/icons-react";
import ListInCard from "../../ListInCard";
import QASimpleRender from "../../QASimpleRender";

const Icons = {
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  sectionIcon: (
    <IconCircleCheckFilled className="text-blue-400" size={17} stroke={1.5} />
  ),
};

const privateCloudData = [
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconCompass size={32} className="text-blue-400" />
        </div>
      ),
      title: "Starter Package – Private Cloud Readiness & Roadmap",
      subTitle:
        "Our Starter Package assesses your current IT landscape and readiness for SAP S/4HANA Private Cloud, defining a clear roadmap for adoption.",
    },
    contentHeading: "What We Deliver",
    contentIcon: Icons?.contentIcon,
    content: [
      "Infrastructure & landscape assessment -- Evaluate on-premises systems, hybrid cloud compatibility, and network architecture.",
      "Business & Technical Readiness Assessment -- Review processes, customizations, and adoption approach for fit-to-standard S/4HANA implementation.",
      "Integration & Dependency Assessment -- Assess SAP and non-SAP integrations, dependencies, and middleware requirements.",
      "Target Architecture Advisory -- Define SAP Private Cloud architecture, including S/4HANA core, SAP BTP extensions, and security controls.",
    ],
    sectionIcon: Icons?.sectionIcon,
    section: {
      title: "Business Outcomes",
      content: [
        "Clear adoption roadmap tailored for private cloud deployment",
        "Defined scope, risks, and dependencies",
        "Alignment with SAP clean-core and cloud-first strategy",
        "Secure, enterprise-ready SAP landscape",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconRocket size={32} className="text-blue-400" />
        </div>
      ),
      title: "Implementation Package – SAP S/4HANA Private Cloud",
      subTitle:
        "Our Implementation Package ensures end-to-end deployment of SAP S/4HANA Private Cloud with minimal disruption and predictable outcomes.",
    },
    contentIcon: Icons?.contentIcon,
    contentHeading: "What We Deliver",
    content: [
      "SAP S/4HANA Private Cloud Implementation -- Fit-to-standard or controlled-fit implementation covering configuration, data migration, testing, training, and go-live.",
      "Integration Enablement -- Implementation of SAP and non-SAP integrations aligned with enterprise standards and SAP-recommended patterns.",
      "Cloud Operations & Hypercare Support -- Post go-live support, incident resolution, and knowledge transfer.",
      "Security & Compliance Management -- Governance of roles, access, and data protection aligned with regulatory requirements.",
    ],
    sectionIcon: Icons?.sectionIcon,
    section: {
      title: "Business Outcomes",
      content: [
        "Fully operational, secure SAP S/4HANA Private Cloud system",
        "Standardized, upgrade-safe ERP core",
        "Predictable deployment with minimal business disruption",
        "Full control over infrastructure, integrations, and compliance",
      ],
    },
  },
];

const privateReason = {
  heading: "Why AlphaHelion Global for SAP S/4HANA Private Cloud?",
  content: [
    "Expertise in private cloud deployment and hybrid landscapes",
    "Alignment with SAP clean-core and enterprise best practices",
    "End-to-end advisory, implementation, and managed support",
    "Secure, scalable, and future-ready SAP landscapes",
  ],
};

function PrivateCloud() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        <Title
          title="SAP S/4HANA Private Cloud Services"
          subTitle="AlphaHelion Global helps organizations adopt SAP S/4HANA Private Cloud with a tailored, secure, and scalable approach. Our services combine SAP best practices, clean-core strategies, and enterprise-grade cloud management to enable transformation while maintaining control, flexibility, and compliance."
        />
        <div
          className="
          grid grid-cols-1 gap-4
          md:grid-cols-2 gap-6
          "
        >
          {privateCloudData?.map((item, index) => (
            <DynamicCard {...item} cardType="section" key={index} />
          ))}
        </div>

        <QASimpleRender withContentBar={true} {...privateReason} />
      </section>
    </ContentLayout>
  );
}

export default PrivateCloud;
// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import DynamicCard from "../../DynamicCard";
// import {
//   IconArrowRight,
//   IconCircleCheckFilled,
//   IconCompass,
//   IconRocket,
// } from "@tabler/icons-react";

// const privateCloudData = [
//   {
//     cardTitles: {
//       titleIcon: (
//         <div className="bg-blue-500 rounded-sm p-1">
//           <IconCompass size={29} className="text-white" />
//         </div>
//       ),
//       title: "Starter Package – Readiness & Roadmap",
//     },
//     contentHeading: "WHAT WE DELIVER",
//     contentIcon: <IconArrowRight size={17} className="text-blue-400" />,
//     content: [
//       "Infrastructure & landscape assessment",
//       "GROW with SAP readiness assessment",
//       "Integration readiness analysis",
//       "Target cloud architecture definition",
//     ],
//     sectionIcon: (
//       <IconCircleCheckFilled className="text-green-400" size={20} stroke={3} />
//     ),
//     section: {
//       title: "Business Outcomes",
//       content: [
//         "Clear adoption roadmap",
//         "Risk and dependency visibility",
//         "Alignment with Clean Core principles",
//       ],
//     },
//   },

//   {
//     cardTitles: {
//       titleIcon: (
//         <div className="bg-black rounded-sm p-1">
//           <IconRocket size={29} className="text-white" />
//         </div>
//       ),
//       title: "Implementation Package – End-to-End Delivery",
//     },
//     contentIcon: <IconArrowRight size={17} className="text-slate-600" />,
//     contentHeading: "WHAT WE DELIVER",
//     content: [
//       "Fit-to-standard SAP S/4HANA Public Cloud implementation",
//       "Data migration, testing, and user training",
//       "Go-live execution and hypercare support",
//     ],
//     sectionIcon: (
//       <IconCircleCheckFilled className="text-green-400" size={20} stroke={3} />
//     ),
//     section: {
//       title: "Business Outcomes",
//       content: [
//         "Live public cloud ERP",
//         "Upgrade-safe, standardized core",
//         "Faster time-to-value",
//       ],
//     },
//   },
// ];

// function PrivateCloud() {
//   return (
//     <ContentLayout cardBg="bg-white">
//       <section className="flex flex-col gap-8">
//         <Title
//           title="SAP S/4HANA Public Cloud (GROW with SAP)"
//           subTitle="Enterprise-ready cloud ERP with standardized processes and continuous innovation"
//         />
//         <div
//           className="
//           grid gap-4 grid-cols-1
//           md:grid-cols-2 gap-10
//           "
//         >
//           {privateCloudData?.map((item, index) => (
//             <DynamicCard {...item} cardType="stack" key={index} />
//           ))}
//         </div>
//       </section>
//     </ContentLayout>
//   );
// }

// export default PrivateCloud;
