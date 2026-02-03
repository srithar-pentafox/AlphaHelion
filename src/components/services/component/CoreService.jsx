import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import {
  IconCode,
  IconBrain,
  IconShieldCheck,
  IconPlugConnected,
} from "@tabler/icons-react";

const iconConfig = {
  size: 30,
  className: "text-blue-600",
};

const coreService = [
  {
    cardHeader: {
      iconConfig: {
        Icon: IconCode,
        iconBg: "bg-white",
        iconColor: "text-blue-500",
      },
      content: "Core",
    },
    cardTitles: {
      title: "Software & Product Engineering",
      subTitle:
        "Build enterprise applications and digital products that drive business transformation.",
    },
    content: [
      "Custom application development",
      "Enterprise product engineering",
      "SaaS platforms and modernization",
    ],
  },
  {
    cardHeader: {
      iconConfig: {
        Icon: IconBrain,
        iconBg: "bg-white",
        iconColor: "text-blue-500",
      },
      content: "INTELLIGENCE",
    },
    cardTitles: {
      title: "Cloud, Data & AI",
      subTitle:
        "Harness cloud-native architectures and intelligent automation for competitive advantage.",
    },
    content: [
      "Cloud-native architecture & migration",
      "Data analytics & predictive insights",
      "AI, ML, and automation solutions",
    ],
  },
  {
    cardHeader: {
      iconConfig: {
        Icon: IconPlugConnected,
        iconBg: "bg-white",
        iconColor: "text-blue-500",
      },
      content: "CONNECTIVITY",
    },
    cardTitles: {
      title: "Integration & Digital Platforms",
      subTitle:
        "Unify enterprise ecosystems with seamless integration and workflow automation.",
    },
    content: [
      "API management",
      "Enterprise system integration",
      "Workflow automation",
      "IoT & connected ecosystems",
    ],
  },
  {
    cardHeader: {
      iconConfig: {
        Icon: IconShieldCheck,
        iconBg: "bg-white",
        iconColor: "text-blue-500",
      },
      content: "PROTECTION",
    },
    cardTitles: {
      title: "Cybersecurity & Digital Trust",
      subTitle:
        "Secure your enterprise with comprehensive security architecture and risk management.",
    },
    content: [
      "Security architecture",
      "Identity & access management",
      "Risk, compliance & DevSecOps",
      "Protection of cloud and critical systems",
    ],
  },
];

function CoreService() {
  return (
    <ContentLayout cardBg="bg-white">
      <div className="flex flex-col gap-8">
        <Title title={"Core Service Areas"} />
        <section
          className="
                grid gap-4
              sm:grid-cols-1
              md:grid-cols-2 md:gap-8 
              lg:grid-cols-2 md:gap-8
              "
        >
          {coreService?.map((service, index) => (
            <DynamicCard {...service} key={index} />
          ))}
        </section>
      </div>
    </ContentLayout>
  );
}

export default CoreService;
