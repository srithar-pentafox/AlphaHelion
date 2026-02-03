import React from "react";
import CommonHero from "../../CommonHero";
import { IconCloudFilled, IconCompass } from "@tabler/icons-react";
import SAPSolutionsHeroImage from "../../../assets/sap-solution-hero.jpg";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import ContentLayout from "../../ContentLayout";
import {
  IconRocket,
  IconPlug,
  IconChartBar,
  IconSettings,
  IconBriefcase,
  IconChecklist,
} from "@tabler/icons-react";
import ContactForm from "../../contactForm/ContactForm";

export const heroData = {
  heading: `
    SalesForce
  `,
  tagline: "Accelerate | Innovate | Transform",
  description: `
  Driving Customer-Centric Growth with Salesforce
We help organizations maximize the value of Salesforce by designing, implementing, and optimizing solutions that improve customer experience, sales effectiveness, and operational efficiency. Our Salesforce services combine deep platform expertise with strong delivery governance to ensure scalable, secure, and business-aligned outcomes.
From strategy and implementation to optimization and managed support, we deliver Salesforce solutions that grow with your business.`,
  actionButtons: [
    {
      label: "Talk to an Salesforce Expert",
      href: "/company",
      styles: {
        base: "bg-blue-500 text-white",
        hover: "hover:bg-blue-600",
        border: "",
      },
    },
  ],
  sectionImage: SAPSolutionsHeroImage,
};

const salesForceData = [
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconRocket size={32} stroke={1.5} className="text-blue-400" />
        </div>
      ),
      title: "End-to-End Salesforce Delivery",
    },
    contentHeading: "Full Lifecycle Salesforce Implementation",
    content:
      "We deliver full lifecycle Salesforce implementations using best practices and proven delivery frameworks.",
    section: {
      title: "What We Offer",
      content: [
        "Salesforce Sales Cloud implementation",
        "Service Cloud and customer support solutions",
        "Marketing Cloud and customer engagement journeys",
        "Experience Cloud (customer & partner portals)",
        "Custom configuration and development",
        "Lightning migration and enhancements",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconBriefcase size={32} stroke={1.5} className="text-blue-500" />
        </div>
      ),
      title: "Salesforce Project Experience",
    },
    contentHeading: "Typical Salesforce Projects We Deliver",
    content: "",
    section: {
      title: "Key Project Types",
      content: [
        "Sales Cloud Implementations – Improving pipeline visibility, forecasting accuracy, and sales productivity.",
        "Service Cloud Transformations – Enabling omni-channel customer support, case management, and service analytics.",
        "CRM Modernization Programs – Replacing legacy CRM systems with scalable Salesforce platforms.",
        "Customer & Partner Portals – Delivering Experience Cloud solutions for self-service and collaboration.",
        "Marketing Automation Enablement – Implementing Marketing Cloud for personalized customer journeys and campaigns.",
        "Salesforce Integrations – Connecting Salesforce with ERP, finance, data platforms, and analytics tools.",
        "Data Migration & Cleanup Initiatives – Ensuring accurate, trusted CRM data during platform transitions.",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconSettings size={32} stroke={1.5} className="text-blue-500" />
        </div>
      ),
      title: "Salesforce Optimization & Managed Services",
    },
    contentHeading: "Continuous Improvement and Stability",
    content:
      "We provide ongoing support to enhance platform performance, user adoption, and business value.",
    section: {
      title: "What We Offer",
      content: [
        "Application support and enhancements",
        "Release and change management",
        "Performance optimization",
        "User adoption and training",
        "Managed services and AMS models",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconChartBar size={32} stroke={1.5} className="text-blue-500" />
        </div>
      ),
      title: "Salesforce Analytics & Reporting",
    },
    contentHeading: "Insight-Driven CRM",
    content:
      "We enable data-driven decision-making through powerful Salesforce analytics and reporting.",
    section: {
      title: "What We Offer",
      content: [
        "Salesforce Reports and Dashboards",
        "CRM Analytics (Tableau CRM)",
        "Sales and service performance KPIs",
        "Executive and operational dashboards",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconPlug size={32} stroke={1.5} className="text-blue-500" />
        </div>
      ),
      title: "Salesforce Integration & Data Management",
    },
    contentHeading: "Connected Systems, Trusted Data",
    content:
      "We integrate Salesforce with enterprise systems to enable seamless data flow and a unified customer view.",
    section: {
      title: "What We Offer",
      content: [
        "Integration with ERP, billing, and legacy systems",
        "API and middleware-based integrations",
        "Data migration, cleansing, and validation",
        "Master data and data quality management",
      ],
    },
  },
  {
    cardTitles: {
      titleIcon: (
        <div className="bg-white rounded-sm p-1 shadow-md">
          <IconChecklist size={32} stroke={1.5} className="text-blue-500" />
        </div>
      ),
      title: "Our Delivery Approach",
    },
    contentHeading: "How We Deliver Salesforce Success",
    content: "",
    section: {
      title: "Key Principles",
      content: [
        "Business-first solution design",
        "Strong program and project governance",
        "Agile and hybrid delivery models",
        "Focus on adoption, value realization, and scalability",
      ],
    },
  },
];

// const salesForceData = [
//   {
//     cardTitles: {
//       titleIcon: (
//         <div className="bg-white rounded-sm p-1 shadow-md">
//           <IconCompass size={32} className="text-blue-400" />
//         </div>
//       ),
//       title: "Salesforce Strategy & Advisory",
//     },
//     contentHeading: "Aligning Salesforce with Business Objectives",
//     // contentIcon: Icons?.contentIcon,
//     content:
//       "We help organizations define a clear Salesforce vision and roadmap aligned to sales, service, marketing, and digital transformation goals.",
//     // sectionIcon: Icons?.sectionIcon,
//     section: {
//       title: "What We Offer",
//       content: [
//         "Salesforce capability and maturity assessments",
//         "CRM strategy and roadmap development",
//         "Use-case identification and prioritization",
//         "Architecture and solution design",
//         "Governance and adoption strategy",
//       ],
//     },
//   },
// ];

function SalesForce() {
  return (
    <section>
      <CommonHero data={heroData} />
      <ContentLayout>
        <section className="flex flex-col gap-8">
          <Title title="Salesforce Capabilities" />
          <div
            className="
                grid grid-cols-1 gap-4
                md:grid-cols-2 gap-6
                "
          >
            {salesForceData?.map((item, index) => (
              <DynamicCard {...item} cardType="section" key={index} />
            ))}
          </div>
        </section>
      </ContentLayout>

      <ContentLayout cardBg="bg-slate-50">
        <ContactForm />
      </ContentLayout>
    </section>
  );
}

export default SalesForce;
