import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import { IconPointFilled } from "@tabler/icons-react";

const SAP_Ariba_Solution = [
  {
    cardTitles: {
      title: "SAP Ariba Sourcing",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Automates strategic sourcing events (RFIs, RFPs, RFQs) and supports supplier negotiation and award analysis.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Accelerates sourcing cycles, improves competitiveness, and drives measurable cost savings.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Ariba Contracts",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Provides centralized contract lifecycle management with secure storage, workflow automation, and compliance tracking.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Ensures consistent creation, management, and enforcement of contracts while mitigating risk.",
      ],
    },
  },
  {
    cardTitles: {
      title: "Ariba Buying & Invoicing (Procure-to-Pay)",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Streamlines procurement and accounts-payable operations with guided requisitioning, automated invoice matching, approvals, and policy-driven workflows.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Enhances compliance, reduces processing time, and minimizes manual effort.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Ariba Supplier Management",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Supports supplier onboarding, qualification, evaluation, and segmentation with continuous performance and risk monitoring.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Strengthens supplier collaboration, improves compliance, and increases supply chain resilience.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Ariba Spend Analysis",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Aggregates and analyzes spend data across categories, suppliers, and regions to identify savings opportunities and control non-compliant spending.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Drives data-informed procurement strategies and optimized spend management.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Ariba Catalog & Guided Buying",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Delivers a structured, policy-driven procurement experience for users to identify and order approved goods and services efficiently.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Enforces compliance, reduces maverick spend, and increases procurement efficiency.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Ariba Central Procurement",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Provides enterprise-wide visibility and governance over purchasing and requisitions across multiple ERP systems.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Consolidates procurement processes, improves operational control, and enhances transparency.",
      ],
    },
  },
  {
    cardTitles: {
      title: "SAP Business Network",
    },
    contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
    content: [
      "Connects buyers and suppliers on a global trading network for seamless exchange of orders, confirmations, invoices, and payments.",
    ],
    section: {
      title: "Benefits",
      content: [
        "Expands sourcing opportunities for buyers and provides suppliers with access to a broad customer ecosystem.",
      ],
    },
  },
];

function SAPAriba() {
  return (
    <ContentLayout>
      <section className="flex flex-col gap-8">
        <Title
          title="SAP Ariba"
          subTitle="SAP Ariba Offerings Cloud Procurement & Spend Management with Supply Chain Collaboration SAP Ariba is a comprehensive cloud-based procurement and spend management platform that enables organizations to transform how they source, procure, manage suppliers, and control spending. By connecting buyers and suppliers through the SAP Business Network, it facilitates real-time collaboration, process automation, and end-to-end visibility across the entire procurement lifecycle—from sourcing to payment."
        />

        <section className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Core SAP Ariba Solutions</h1>
          <section
            className="
                grid grid-cols-1 gap-4
                md:grid-cols-2 md:gap-6
                "
          >
            {SAP_Ariba_Solution?.map((item, index) => (
              <DynamicCard {...item} cardType="section" key={index} />
            ))}
          </section>
        </section>
      </section>
    </ContentLayout>
  );
}

export default SAPAriba;
