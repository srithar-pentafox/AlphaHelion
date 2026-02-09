import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import {
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

const PublicCloudData = [
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconCompass size={32} className="text-blue-400" />
        </div>
      ),
      title: "Starter Package – Public Cloud Readiness & Roadmap",
      subTitle:
        "Our Starter Package enables organizations to assess readiness and define a clear roadmap for SAP S/4HANA Public Cloud (GROW with SAP) adoption.",
    },
    contentHeading: "What We Deliver",
    contentIcon: Icons?.contentIcon,
    content: [
      "Infrastructure & Landscape Assessment -- Evaluate existing IT systems, data quality, and cloud compatibility.",
      "GROW with SAP Readiness Assessment -- Comprehensive business and technical assessment to define scope, timeline, fit-to-standard alignment, and adoption approach.",
      "Integration Readiness Assessment -- Review SAP and non-SAP integrations, dependencies, and target-state integration strategy.",
      "Target Cloud Architecture Advisory -- High-level SAP Public Cloud architecture including S/4HANA and SAP BTP touchpoints.",
    ],
    sectionIcon: Icons?.sectionIcon,
    section: {
      title: "Business Outcomes",
      content: [
        "Clear, actionable SAP Public Cloud adoption roadmap",
        "Defined scope, risks, and dependencies",
        "Alignment with SAP clean-core and cloud-first strategy",
        "Reduced implementation uncertainty through early technical and validation"
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
      title: "Implementation Package – SAP S/4HANA Public Cloud",
      subTitle:
        "Our Implementation Package focuses on end-to-end deployment of SAP S/4HANA Public Cloud using SAP-recommended best practices.",
    },
    contentIcon: Icons?.contentIcon,
    contentHeading: "What We Deliver",
    content: [
      "SAP S/4HANA Public Cloud Implementation (GROW with SAP)",
      "Fit-to-standard implementation covering configuration, data migration, testing, training, and go-live.",
      "Integration Enablement",
      "Deployment of required SAP and non-SAP integrations aligned with SAP-recommended integration patterns.",
      "Go-Live & Hypercare Support",
      "Post go-live stabilization, issue resolution, and structured knowledge transfer.",
    ],
    sectionIcon: Icons?.sectionIcon,
    section: {
      title: "Business Outcomes",
      content: [
        "Fully operational SAP S/4HANA Public Cloud system",
        "Standardized, upgrade-safe ERP core",
        "Faster time-to-value with predictable, high-confidence outcomes",
        "Full control over infrastructure, integrations, and compliance",
      ],
    },
  },
];

const publicReason = {
  heading: "Why Choose AlphaHelion Global for SAP S/4HANA Public Cloud?",
  content: [
    "SAP clean-core, cloud-first strategy alignment",
    "Expertise in GROW with SAP methodology",
    "End-to-end advisory, implementation, and support services",
    "Scalable, low-risk approach to digital transformation",
  ],
};

function PublicCloud() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        <Title
          title="SAP S/4HANA Public Cloud Services"
          subTitle="We help organizations adopt, implement, and optimize SAP S/4HANA Public Cloud with structured, low-risk approaches that align with SAP best practices and clean-core principles. Our services are designed to accelerate cloud adoption, ensure scalability, and deliver measurable business outcomes."
        />
        <div
          className="
          grid grid-cols-1 gap-4
          md:grid-cols-2 gap-6
          "
        >
          {PublicCloudData?.map((item, index) => (
            <DynamicCard {...item} cardType="section" key={index} />
          ))}
        </div>

        <QASimpleRender 
        withContentBar
        {...publicReason}
        />
      </section>
    </ContentLayout>
  );
}

export default PublicCloud;
