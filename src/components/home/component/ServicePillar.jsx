import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import { IconCpu, IconCloud, IconGitBranch, IconPointFilled, IconCheck, IconArrowRight } from "@tabler/icons-react";

const iconConfig = {
  size: 30,
  className: "text-blue-600",
};

const servicePillars = [
  {
    cardHeader: {
      iconConfig: {
      Icon: IconCpu,
      iconBg: "bg-white",
      iconColor: "text-blue-500"
      }
    },
    cardTitles: {
      title: "Technology & Digital",
    },
    content: [
      "Software & Product Engineering",
      "Cloud, AI & Data Analytics",
      "Cybersecurity & Digital Trust",
      "Integration & API Management",
    ],
  },
  {
    cardHeader: {
      iconConfig: {
      Icon: IconCloud,
      iconBg: "bg-white",
      iconColor: "text-blue-500"
      }
    },
    cardTitles: {
      title: "SAP Public Cloud & BTP",
    },
    content: [
      "GROW with SAP (S/4HANA)",
      "Clean-Core ERP Strategy",
      "SAP BTP Extensions & Automation",
      "Analytics & Data Intelligence",
    ],
  },
  {
    cardHeader: {
      iconConfig: {
      Icon: IconGitBranch,
      iconBg: "bg-white",
      iconColor: "text-blue-500"
      }
    },
    cardTitles: {
      title: "Project Management",
    },
    content: [
      "Program & Portfolio Governance",
      "PMO Setup & Optimization",
      "Agile & Hybrid Delivery",
      "Project Recovery Engagements",
    ],
  },
];

function ServicePillar() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        {/* <Title title="Strategic Service Pillars" /> */}
        <div
          className="
                grid gap-4
              sm:grid-cols-1
              md:grid-cols-3 md:gap-8 
              lg:grid-cols-3 md:gap-8
              "
        >
          {servicePillars?.map((service, index) => (
            <DynamicCard {...service} contentIcon={<IconArrowRight size={16} className="text-blue-500" />} key={index} />
          ))}
        </div>
      </section>
    </ContentLayout>
  );
}

export default ServicePillar;
