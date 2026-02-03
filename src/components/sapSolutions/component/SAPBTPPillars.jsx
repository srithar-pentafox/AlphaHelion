import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import DynamicCard from "../../DynamicCard";
import { IconPointFilled } from "@tabler/icons-react";

const applicationDevelopment = {
  themeColor: "blue",
  cardTitles: {
    title: "Application Development",
    subTitle:
      "Empower your business with custom applications and extend SAP solutions using modern, cloud-native development tools.",
  },
  contentHeading: "Core Technologies",
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP Build Apps -- Create enterprise applications without coding using drag-and-drop visual development",
    "SAP Build Work Zone -- Design unified digital workspaces that bring together applications, processes, and information in one place",
    "CAP (Cloud Application Programming Model) -- Develop enterprise-grade applications with best practices built-in, supporting Node.js and Java",
    "SAP UI5/Fiori -- Build responsive, user-centric interfaces that work seamlessly across devices",
    "SAP Build Code/Business Application Studio -- Full-featured IDE for SAP development in the cloud",
  ],
  section: {
    title: "Key Benefits",
    content: [
      "Reduce development time by up to 70%",
      "Enable business users to create apps",
      "Ensure consistent user experience",
      "Deploy instantly to cloud",
      "Leverage SAP best practices and templates",
    ],
  },
};

const developmentApproaches = {
  themeColor: "blue",
  cardTitles: {
    title: "Development Approaches",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Low-code/No-code for citizen developers",
    "Pro-code for professional developers",
    "Hybrid approach combining both methodologies",
    "Mobile-first application development",
  ],
};

const applicationUseCases = {
  themeColor: "blue",
  cardTitles: {
    title: "Use Cases",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Custom business applications for unique processes",
    "Employee self-service portals (leave management, expense reporting)",
    "Mobile apps for field technicians and sales teams",
    "Extending SAP S/4HANA with custom functionalities",
    "Partner and supplier collaboration portals",
  ],
};

// Pillar 2: Automation
const automation = {
  // themeColor: "violet",
  cardTitles: {
    title: "Automation",
    subTitle:
      "Transform business operations by automating processes end-to-end, from simple tasks to complex workflows.",
  },
  contentHeading: "Core Technologies",
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP Build Process Automation -- Unified environment combining workflow, RPA, and decision logic",
    "Workflow Management -- Design and orchestrate multi-step approval and business processes",
    "Robotic Process Automation (RPA) -- Automate repetitive tasks across applications without changing existing systems",
    "Decision Logic -- Implement business rules and decision tables for automated decision-making",
    "Task Center -- Centralized inbox for all approval tasks across SAP and non-SAP systems",
  ],
  section: {
    title: "Key Benefits",
    content: [
      "Reduce manual effort by 60-80%",
      "Minimize human errors",
      "Accelerate process cycle times",
      "Ensure compliance and audit trails",
      "Scale operations without headcount increases",
    ],
  },
};

const automationCapabilities = {
  // themeColor: "violet",
  cardTitles: {
    title: "Automation Capabilities",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Visual process modeling with drag-and-drop",
    "Attended and unattended bots",
    "AI-powered intelligent automation",
    "Process mining and optimization",
    "Built-in analytics and monitoring",
  ],
};

const automationUseCases = {
  // themeColor: "violet",
  cardTitles: {
    title: "Use Cases",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Invoice processing and approval workflows",
    "Employee onboarding and offboarding automation",
    "Purchase order to invoice reconciliation",
    "Customer order processing",
    "Data migration and validation tasks",
    "Compliance and regulatory reporting",
  ],
};

// Pillar 3: Integration
const integration = {
  // themeColor: "green",
  cardTitles: {
    title: "Integration",
    subTitle:
      "Create a connected enterprise by seamlessly integrating all applications, systems, and data sources across your landscape.",
  },
  contentHeading: "Core Technologies",
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP Integration Suite -- Complete integration platform for hybrid and multi-cloud scenarios",
    "Cloud Integration -- Connect cloud and on-premise applications with pre-built connectors",
    "API Management -- Design, publish, secure, and monetize APIs",
    "Open Connectors -- Access 170+ third-party applications with standardized APIs",
    "Event Mesh -- Enable real-time, event-driven architecture across your landscape",
    "Integration Advisor -- AI-powered tool for mapping and interface recommendations",
  ],
  section: {
    title: "Key Benefits",
    content: [
      "Single platform for all integration needs",
      "Pre-built content for 2,500+ integration scenarios",
      "Real-time data synchronization",
      "Reduce integration complexity and costs",
      "Monitor and manage all integrations centrally",
    ],
  },
};

const integrationPatterns = {
  // themeColor: "green",
  cardTitles: {
    title: "Integration Patterns",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Point-to-point integrations",
    "Hub-and-spoke architecture",
    "Event-driven messaging",
    "API-first approach",
    "B2B/EDI integrations",
  ],
};

const integrationUseCases = {
  // themeColor: "green",
  cardTitles: {
    title: "Use Cases",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP S/4HANA to Salesforce CRM integration",
    "E-commerce platform to ERP connectivity",
    "IoT device data integration",
    "Multi-system inventory synchronization",
    "Third-party logistics provider integration",
    "Master data synchronization across systems",
  ],
};

// Pillar 4: Data & Analytics
const dataAnalytics = {
  // themeColor: "orange",
  cardTitles: {
    title: "Data & Analytics",
    subTitle:
      "Unify, manage, and analyze data from across your enterprise to drive data-driven decision-making.",
  },
  contentHeading: "Core Technologies",
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP Datasphere -- Unified data fabric that harmonizes data from all sources with built-in governance",
    "SAP HANA Cloud -- In-memory, multi-model database for real-time data processing and analytics",
    "SAP Analytics Cloud -- Comprehensive solution for planning, analytics, and predictive insights",
    "Data Warehouse Cloud -- Enterprise data warehouse in the cloud",
    "Data Intelligence -- Orchestrate and manage complex data pipelines",
  ],
  section: {
    title: "Key Benefits",
    content: [
      "Single source of truth for all business data",
      "Real-time insights for faster decisions",
      "Self-service analytics for business users",
      "Reduced data silos and duplication",
      "Enterprise-grade security and governance",
    ],
  },
};

const dataManagement = {
  // themeColor: "orange",
  cardTitles: {
    title: "Data Management Capabilities",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Data modeling and semantic layers",
    "Data quality and governance",
    "Master data management",
    "Real-time data replication",
    "Data virtualization and federation",
    "Self-service data preparation",
  ],
};

const analyticsFeatures = {
  // themeColor: "orange",
  cardTitles: {
    title: "Analytics Features",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Interactive dashboards and visualizations",
    "Ad-hoc analysis and exploration",
    "Predictive and what-if scenarios",
    "Collaborative planning and forecasting",
    "Mobile analytics",
    "Augmented analytics with NLP",
  ],
};

const dataUseCases = {
  // themeColor: "orange",
  cardTitles: {
    title: "Use Cases",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Real-time financial consolidation and reporting",
    "Sales performance dashboards and forecasting",
    "Supply chain visibility and optimization",
    "Customer 360-degree view",
    "Workforce analytics and planning",
    "Operational intelligence for manufacturing",
  ],
};

// Pillar 5: Artificial Intelligence
const artificialIntelligence = {
  themeColor: "blue",
  cardTitles: {
    title: "Artificial Intelligence (AI)",
    subTitle:
      "Embed intelligent capabilities into business processes with enterprise-ready AI and machine learning services powered by SAP Business AI.",
  },
  contentHeading: "Core Technologies",
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "SAP AI Core -- Scalable AI runtime for training and deploying custom ML models with MLOps capabilities",
    "SAP AI Launchpad -- Central interface for managing AI scenarios, models, and deployments",
    "Generative AI Hub -- Access to multiple large language models (LLMs) with enterprise governance and data privacy",
    "SAP Business AI -- Comprehensive AI strategy embedding intelligence across all SAP solutions",
    "SAP AI Business Services -- Pre-trained, industry-specific AI services for common business scenarios",
  ],
  section: {
    title: "Key Benefits",
    content: [
      "Enterprise-ready AI with built-in governance",
      "Data privacy and security compliance",
      "Faster time-to-value with pre-built services",
      "Industry-specific AI models",
      "Scalable MLOps infrastructure",
    ],
  },
};

const aiCapabilities = {
  themeColor: "blue",
  cardTitles: {
    title: "AI Capabilities",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Machine learning model training and deployment",
    "Natural language processing and understanding",
    "Computer vision and image recognition",
    "Predictive analytics and forecasting",
    "Intelligent document processing",
    "Conversational AI and chatbots",
  ],
};

const aiUseCases = {
  themeColor: "blue",
  cardTitles: {
    title: "Use Cases",
  },
  contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
  content: [
    "Intelligent invoice processing and extraction",
    "Predictive maintenance for equipment",
    "Customer sentiment analysis",
    "Automated product recommendations",
    "Supply chain demand forecasting",
    "AI-powered chatbots for customer service",
  ],
};

function SAPBTPPillars() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-15">
        <Title title="Five Key Pillars of SAP BTP" />

        <section
          className="grid grid-cols-1 gap-4 
        md:grid-cols-2 md:gap-6
        "
        >
          <DynamicCard {...applicationDevelopment} cardType="section" />
          <DynamicCard {...integration} cardType="section" />
          <DynamicCard {...automation} cardType="section" />
          <DynamicCard {...dataAnalytics} cardType="section" />
          <DynamicCard {...artificialIntelligence} cardType="section" />
        </section>
      </section>
    </ContentLayout>
  );
}

export default SAPBTPPillars;
// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import DynamicCard from "../../DynamicCard";
// import {
//   IconCode,
//   IconRobot,
//   IconLink,
//   IconChartBar,
//   IconCpu,
//   IconPointFilled,
// } from "@tabler/icons-react";

// const iconConfigSize = {
//   size: 28,
// };

// // Pillar 1: Application Development
// const applicationDevelopment = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "Application Development",
//     subTitle:
//       "Empower your business with custom applications and extend SAP solutions using modern, cloud-native development tools.",
//   },
//   contentHeading: "Core Technologies",
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP Build Apps -- Create enterprise applications without coding using drag-and-drop visual development",
//     "SAP Build Work Zone -- Design unified digital workspaces that bring together applications, processes, and information in one place",
//     "CAP (Cloud Application Programming Model) -- Develop enterprise-grade applications with best practices built-in, supporting Node.js and Java",
//     "SAP UI5/Fiori -- Build responsive, user-centric interfaces that work seamlessly across devices",
//     "SAP Build Code/Business Application Studio -- Full-featured IDE for SAP development in the cloud",
//   ],
//   section: {
//     title: "Key Benefits",
//     content: [
//       "Reduce development time by up to 70%",
//       "Enable business users to create apps",
//       "Ensure consistent user experience",
//       "Deploy instantly to cloud",
//       "Leverage SAP best practices and templates",
//     ],
//   },
// };

// const developmentApproaches = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "Development Approaches",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Low-code/No-code for citizen developers",
//     "Pro-code for professional developers",
//     "Hybrid approach combining both methodologies",
//     "Mobile-first application development",
//   ],
// };

// const applicationUseCases = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "Use Cases",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Custom business applications for unique processes",
//     "Employee self-service portals (leave management, expense reporting)",
//     "Mobile apps for field technicians and sales teams",
//     "Extending SAP S/4HANA with custom functionalities",
//     "Partner and supplier collaboration portals",
//   ],
// };

// // Pillar 2: Automation
// const automation = {
//   // themeColor: "violet",
//   cardTitles: {
//     title: "Automation",
//     subTitle:
//       "Transform business operations by automating processes end-to-end, from simple tasks to complex workflows.",
//   },
//   contentHeading: "Core Technologies",
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP Build Process Automation -- Unified environment combining workflow, RPA, and decision logic",
//     "Workflow Management -- Design and orchestrate multi-step approval and business processes",
//     "Robotic Process Automation (RPA) -- Automate repetitive tasks across applications without changing existing systems",
//     "Decision Logic -- Implement business rules and decision tables for automated decision-making",
//     "Task Center -- Centralized inbox for all approval tasks across SAP and non-SAP systems",
//   ],
//   section: {
//     title: "Key Benefits",
//     content: [
//       "Reduce manual effort by 60-80%",
//       "Minimize human errors",
//       "Accelerate process cycle times",
//       "Ensure compliance and audit trails",
//       "Scale operations without headcount increases",
//     ],
//   },
// };

// const automationCapabilities = {
//   // themeColor: "violet",
//   cardTitles: {
//     title: "Automation Capabilities",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Visual process modeling with drag-and-drop",
//     "Attended and unattended bots",
//     "AI-powered intelligent automation",
//     "Process mining and optimization",
//     "Built-in analytics and monitoring",
//   ],
// };

// const automationUseCases = {
//   // themeColor: "violet",
//   cardTitles: {
//     title: "Use Cases",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Invoice processing and approval workflows",
//     "Employee onboarding and offboarding automation",
//     "Purchase order to invoice reconciliation",
//     "Customer order processing",
//     "Data migration and validation tasks",
//     "Compliance and regulatory reporting",
//   ],
// };

// // Pillar 3: Integration
// const integration = {
//   // themeColor: "green",
//   cardTitles: {
//     title: "Integration",
//     subTitle:
//       "Create a connected enterprise by seamlessly integrating all applications, systems, and data sources across your landscape.",
//   },
//   contentHeading: "Core Technologies",
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP Integration Suite -- Complete integration platform for hybrid and multi-cloud scenarios",
//     "Cloud Integration -- Connect cloud and on-premise applications with pre-built connectors",
//     "API Management -- Design, publish, secure, and monetize APIs",
//     "Open Connectors -- Access 170+ third-party applications with standardized APIs",
//     "Event Mesh -- Enable real-time, event-driven architecture across your landscape",
//     "Integration Advisor -- AI-powered tool for mapping and interface recommendations",
//   ],
//   section: {
//     title: "Key Benefits",
//     content: [
//       "Single platform for all integration needs",
//       "Pre-built content for 2,500+ integration scenarios",
//       "Real-time data synchronization",
//       "Reduce integration complexity and costs",
//       "Monitor and manage all integrations centrally",
//     ],
//   },
// };

// const integrationPatterns = {
//   // themeColor: "green",
//   cardTitles: {
//     title: "Integration Patterns",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Point-to-point integrations",
//     "Hub-and-spoke architecture",
//     "Event-driven messaging",
//     "API-first approach",
//     "B2B/EDI integrations",
//   ],
// };

// const integrationUseCases = {
//   // themeColor: "green",
//   cardTitles: {
//     title: "Use Cases",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP S/4HANA to Salesforce CRM integration",
//     "E-commerce platform to ERP connectivity",
//     "IoT device data integration",
//     "Multi-system inventory synchronization",
//     "Third-party logistics provider integration",
//     "Master data synchronization across systems",
//   ],
// };

// // Pillar 4: Data & Analytics
// const dataAnalytics = {
//   // themeColor: "orange",
//   cardTitles: {
//     title: "Data & Analytics",
//     subTitle:
//       "Unify, manage, and analyze data from across your enterprise to drive data-driven decision-making.",
//   },
//   contentHeading: "Core Technologies",
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP Datasphere -- Unified data fabric that harmonizes data from all sources with built-in governance",
//     "SAP HANA Cloud -- In-memory, multi-model database for real-time data processing and analytics",
//     "SAP Analytics Cloud -- Comprehensive solution for planning, analytics, and predictive insights",
//     "Data Warehouse Cloud -- Enterprise data warehouse in the cloud",
//     "Data Intelligence -- Orchestrate and manage complex data pipelines",
//   ],
//   section: {
//     title: "Key Benefits",
//     content: [
//       "Single source of truth for all business data",
//       "Real-time insights for faster decisions",
//       "Self-service analytics for business users",
//       "Reduced data silos and duplication",
//       "Enterprise-grade security and governance",
//     ],
//   },
// };

// const dataManagement = {
//   // themeColor: "orange",
//   cardTitles: {
//     title: "Data Management Capabilities",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Data modeling and semantic layers",
//     "Data quality and governance",
//     "Master data management",
//     "Real-time data replication",
//     "Data virtualization and federation",
//     "Self-service data preparation",
//   ],
// };

// const analyticsFeatures = {
//   // themeColor: "orange",
//   cardTitles: {
//     title: "Analytics Features",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Interactive dashboards and visualizations",
//     "Ad-hoc analysis and exploration",
//     "Predictive and what-if scenarios",
//     "Collaborative planning and forecasting",
//     "Mobile analytics",
//     "Augmented analytics with NLP",
//   ],
// };

// const dataUseCases = {
//   // themeColor: "orange",
//   cardTitles: {
//     title: "Use Cases",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Real-time financial consolidation and reporting",
//     "Sales performance dashboards and forecasting",
//     "Supply chain visibility and optimization",
//     "Customer 360-degree view",
//     "Workforce analytics and planning",
//     "Operational intelligence for manufacturing",
//   ],
// };

// // Pillar 5: Artificial Intelligence
// const artificialIntelligence = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "Artificial Intelligence (AI)",
//     subTitle:
//       "Embed intelligent capabilities into business processes with enterprise-ready AI and machine learning services powered by SAP Business AI.",
//   },
//   contentHeading: "Core Technologies",
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "SAP AI Core -- Scalable AI runtime for training and deploying custom ML models with MLOps capabilities",
//     "SAP AI Launchpad -- Central interface for managing AI scenarios, models, and deployments",
//     "Generative AI Hub -- Access to multiple large language models (LLMs) with enterprise governance and data privacy",
//     "SAP Business AI -- Comprehensive AI strategy embedding intelligence across all SAP solutions",
//     "SAP AI Business Services -- Pre-trained, industry-specific AI services for common business scenarios",
//   ],
//   section: {
//     title: "Key Benefits",
//     content: [
//       "Enterprise-ready AI with built-in governance",
//       "Data privacy and security compliance",
//       "Faster time-to-value with pre-built services",
//       "Industry-specific AI models",
//       "Scalable MLOps infrastructure",
//     ],
//   },
// };

// const aiCapabilities = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "AI Capabilities",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Machine learning model training and deployment",
//     "Natural language processing and understanding",
//     "Computer vision and image recognition",
//     "Predictive analytics and forecasting",
//     "Intelligent document processing",
//     "Conversational AI and chatbots",
//   ],
// };

// const aiUseCases = {
//   themeColor: "blue",
//   cardTitles: {
//     title: "Use Cases",
//   },
//   contentIcon: <IconPointFilled size={17} className="text-blue-400" />,
//   content: [
//     "Intelligent invoice processing and extraction",
//     "Predictive maintenance for equipment",
//     "Customer sentiment analysis",
//     "Automated product recommendations",
//     "Supply chain demand forecasting",
//     "AI-powered chatbots for customer service",
//   ],
// };

// function SAPBTPPillars() {
//   return (
//     <ContentLayout cardBg="bg-white">
//       <section className="flex flex-col gap-15">
//         <Title title="Five Key Pillars of SAP BTP" />

//         {/* Pillar 1: Application Development */}
//         <section className="flex flex-col gap-5">
//           <h1 className="font-semibold text-2xl text-blue-500">
//             1. Application Development
//           </h1>
//           <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <DynamicCard {...applicationDevelopment} cardType="section" />
//             <section className="flex flex-col gap-4">
//               <DynamicCard {...developmentApproaches} cardType="stack" />
//               <DynamicCard {...applicationUseCases} cardType="stack" />
//             </section>
//           </section>
//         </section>

//         {/* Pillar 2: Automation */}
//         <section className="flex flex-col gap-5">
//           <h1 className="font-semibold text-2xl text-blue-500">
//             2. Automation
//           </h1>
//           <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <DynamicCard {...automation} cardType="stack" />
//             <section className="flex flex-col gap-4">
//               <DynamicCard {...automationCapabilities} cardType="stack" />
//               <DynamicCard {...automationUseCases} cardType="stack" />
//             </section>
//           </section>
//         </section>

//         {/* Pillar 3: Integration */}
//         <section className="flex flex-col gap-5">
//           <h1 className="font-semibold text-2xl text-blue-500">
//             3. Integration
//           </h1>
//           <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <DynamicCard {...integration} cardType="stack" />
//             <section className="flex flex-col gap-4">
//               <DynamicCard {...integrationPatterns} cardType="stack" />
//               <DynamicCard {...integrationUseCases} cardType="stack" />
//             </section>
//           </section>
//         </section>

//         {/* Pillar 4: Data & Analytics */}
//         <section className="flex flex-col gap-5">
//           <h1 className="font-semibold text-2xl text-blue-500">
//             4. Data & Analytics
//           </h1>
//           <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <DynamicCard {...dataAnalytics} cardType="stack" />
//             <section className="flex flex-col gap-4">
//               <DynamicCard {...dataManagement} cardType="stack" />
//               <section className="grid grid-cols-1 gap-4">
//                 <DynamicCard {...analyticsFeatures} cardType="stack" />
//                 <DynamicCard {...dataUseCases} cardType="stack" />
//               </section>
//             </section>
//           </section>
//         </section>

//         {/* Pillar 5: Artificial Intelligence */}
//         <section className="flex flex-col gap-5">
//           <h1 className="font-semibold text-2xl text-blue-500">
//             5. Artificial Intelligence (AI)
//           </h1>
//           <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <DynamicCard {...artificialIntelligence} cardType="stack" />
//             <section className="flex flex-col gap-4">
//               <DynamicCard {...aiCapabilities} cardType="stack" />
//               <DynamicCard {...aiUseCases} cardType="stack" />
//             </section>
//           </section>
//         </section>
//       </section>
//     </ContentLayout>
//   );
// }

// export default SAPBTPPillars;
