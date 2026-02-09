import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";

import { IconChartBar, IconCode, IconPointFilled } from "@tabler/icons-react";
import SimpleCard from "../../SimpleCard";
import QASimpleRender from "../../QASimpleRender";

const contentColor = "text-md text-slate-800"; // text-slate-400

/* ---------------- QA DATA ---------------- */

const QAquestions = [
  {
    heading: "What is Joule?",
    content: [
      "Conversational AI assistant embedded across SAP applications",
      "Understands business context and user intent",
      "Proactive recommendations based on role and patterns",
      "Natural language interface - no technical knowledge required",
      "Continuous learning from interactions",
    ],
  },
  {
    heading: "Joule Capabilities",
    content: [
      "Natural language search across SAP systems",
      "Contextual answers from SAP knowledge base",
      "Task automation and workflow triggers",
      "Data insights and analytics on demand",
      "Intelligent suggestions and next best actions",
      "Multi-application orchestration",
    ],
  },
  {
    heading: "Joule for End Users",
    content:
      "Enhance productivity and decision-making for business users across all departments.",
  },
  {
    heading: "Key Features",
    content: [
      "Ask questions in plain language about business data",
      "Get instant answers from SAP S/4HANA, SuccessFactors, Ariba, etc.",
      "Receive proactive alerts and recommendations",
      "Execute transactions through conversation",
      "Access contextual help and guidance",
    ],
  },
  {
    heading: "Business User Scenarios",
    content: [
      "Show me pending purchase orders over $10,000",
      "What are my team's top performing products this quarter?",
      "Create an expense report for my recent trip to Berlin",
      "Who approved this invoice and when?",
      "Find similar suppliers with better pricing",
    ],
  },
  {
    heading: "Developer-Specific Features",
    content: [
      "AI-Powered Code Generation -- Generate CAP/ABAP code from natural language descriptions",
      "Code Explanation -- Understand complex code with AI-generated documentation",
      "Code Optimization -- Get suggestions for performance improvements",
      "Test Case Generation -- Automatically create unit tests",
      "API Discovery -- Find and understand relevant APIs through conversation",
      "Debugging Assistant -- AI-guided troubleshooting and error resolution",
    ],
  },
  {
    heading: "Developer Scenarios",
    content: [
      "Generate a CAP service for customer order management",
      "Explain what this ABAP function module does",
      "Create unit tests for this Node.js controller",
      "How do I integrate with SAP Ariba APIs?",
      "Optimize this SQL query for better performance",
      "Debug this OData service error",
    ],
  },
  {
    heading: "Benefits for Developers",
    content: [
      "Reduce coding time by 40-50%",
      "Lower learning curve for new technologies",
      "Faster onboarding for new team members",
      "Improved code quality and consistency",
      "Focus on business logic instead of boilerplate",
    ],
  },
  {
    heading: "Joule for Consultants",
    content:
      "Empower consultants with AI-driven insights, best practices, and implementation guidance.",
  },
  {
    heading: "Consultant-Specific Features",
    content: [
      "Implementation Guidance -- Best practices for SAP implementations",
      "Configuration Recommendations -- AI-suggested optimal system settings",
      "Gap Analysis  -- Identify differences between standard and custom processes",
      "Documentation Generation  -- Auto-create technical and functional documentation",
      "Knowledge Discovery  -- Access SAP notes, documentation, and community content",
      "Impact Analysis  -- Understand implications of configuration changes",
    ],
  },
  {
    heading: "Consultant Scenarios",
    content: [
      "What are best practices for S/4HANA finance configuration?",
      "Generate functional specification for approval workflow",
      "Find SAP notes related to tax calculation issues",
      "What's the impact of changing this pricing procedure?",
      "Create a data migration strategy for customer master",
      "Compare standard vs custom order-to-cash process",
    ],
  },
  {
    heading: "Benefits for Consultants",
    content: [
      "Accelerate project delivery by 30%",
      "Access deep SAP knowledge instantly",
      "Reduce research and documentation time",
      "Ensure adherence to best practices",
      "Improve solution quality and consistency",
    ],
  },
  {
    heading: "Embedded AI in SAP Applications",
    content:
      "AI capabilities deeply integrated into core SAP business processes, powered by SAP Business AI.",
  },
];

const SAP_AI_BUSINESS_SERVICE = [
  {
    heading: "Available Services",
    content: [
      "Document Information Extraction -- Extract structured data from invoices, POs, receipts, delivery notes, payment advices",
      "Document Classification -- Automatically categorize documents by type",
      "Data Attribute Recommendation -- AI-powered master data completion and enrichment",
      "Business Entity Recognition -- Extract business entities from unstructured text",
      "Invoice Object Recommendation -- Suggest GL accounts and cost centers",
      "Service Ticket Intelligence -- Categorize, route, and recommend solutions for support tickets",
      "Personalized Recommendation -- Product, content, and next-best-action recommendations",
    ],
  },
  {
    heading: "Industry-Specific AI",
    content: [
      "Retail -- Demand forecasting, assortment optimization",
      "Manufacturing -- Predictive maintenance, quality prediction",
      "Banking -- Fraud detection, credit risk assessment",
      "Healthcare -- Clinical documentation, appointment optimization",
    ],
  },
];

const GenerativeAICapabilities = [
  {
    heading: "Generative AI Features",
    content: [
      "Natural language to SQL query generation",
      "Automated report and document creation",
      "Content summarization and synthesis",
      "Conversational interfaces for applications",
      "Code generation and explanation",
      "Creative content generation for marketing",
    ],
  },
  {
    heading: "Enterprise Governance",
    content: [
      "Data privacy and residency controls",
      "Model selection and management",
      "Audit trails and compliance",
      "Responsible AI frameworks",
      "Bias detection and mitigation",
    ],
  },
  {
    heading: "Key Benefits of SAP AI on BTP",
    content: [
      "Accelerate digital transformation with purpose-built AI",
      "No data science expertise required for pre-built services",
      "Enterprise-grade security, privacy, and compliance",
      "Seamless integration with SAP applications",
      "Responsible AI with built-in governance and ethics",
      "Continuous innovation with regular updates",
      "Choice of AI models and providers",
    ],
  },
  {
    heading: "AI Use Cases",
    content: [
      "Intelligent invoice processing reducing manual work by 90%",
      "AI-powered chatbots for HR and IT support",
      "Predictive maintenance for manufacturing equipment",
      "Customer churn prediction and prevention",
      "Automated contract analysis and compliance checking",
      "Sentiment analysis from customer feedback and surveys",
      "Demand forecasting and inventory optimization",
      "Quality inspection using computer vision",
      "Fraud detection in financial transactions",
      "Personalized customer experiences at scale",
    ],
  },
];
/* ---------------- SAP AI SUITE ---------------- */

const SAP_AI_Suite = [
  {
    title: "SAP S/4HANA",
    iconConfig: { Icon: IconCode, iconBg: "bg-white" },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Intelligent payment prediction",
      "Smart invoice processing",
      "Automated GL account determination",
      "Cash flow forecasting",
      "Anomaly detection",
    ],
  },
  {
    title: "SAP SuccessFactors",
    iconConfig: { Icon: IconChartBar, iconBg: "bg-white" },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Talent intelligence",
      "Learning recommendations",
      "Compensation insights",
      "Performance analysis",
    ],
  },
  {
    title: "SAP Ariba",
    iconConfig: { Icon: IconChartBar, iconBg: "bg-white" },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Supplier risk assessment",
      "Spend analytics and insights",
      "Contract intelligence",
      "Automated guided buying",
      "Price optimization",
    ],
  },
  {
    title: "SAP Customer Experience",
    iconConfig: { Icon: IconChartBar, iconBg: "bg-white" },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Next-best-action recommendations",
      "Customer churn prediction",
      "Personalized product recommendations",
      "Marketing campaign optimization",
      "Service ticket routing and resolution",
    ],
  },
];

const AccordionRender = ({ accData = [] }) => {
  return (
    <Accordion type="multiple" defaultValue={accData.map((_, index) => `item-${index}`)} className="flex flex-col gap-4">
      {accData.map((QA, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-blue-200 rounded-xl px-4 bg-blue-50 md:cursor-pointer"
        >
          <AccordionTrigger className="text-left font-semibold text-lg text-blue-500">
            {QA.heading}
          </AccordionTrigger>

          <AccordionContent className="pt-4">
            <section className="flex flex-col gap-4 w-full">
              {Array.isArray(QA?.content) ? (
                <section className="flex flex-col gap-3 grid grid-cols-1 md:grid-cols-2">
                  {QA?.content.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-1 items-start align-center"
                    >
                      <div className="mt-1">
                        <IconPointFilled
                          className="text-blue-400"
                          size={16}
                          stroke={1.5}
                        />
                      </div>

                      {item.split("--").length === 1 ? (
                        <p className={`${contentColor} text-md font-normal`}>{item}</p>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <p className={`${contentColor} text-md font-semibold`}>
                            {item.split("--")[0]}
                          </p>
                          <p className={`${contentColor} text-md font-normal`}>
                            {item.split("--")[1]}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              ) : (
                <p className={`${contentColor} text-md font-normal`}>{QA?.content}</p>
              )}
            </section>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

/* ---------------- COMPONENT ---------------- */

function SAPJoule() {
  return (
    <ContentLayout>
      <section className="flex flex-col gap-10">
        <Title
          title="SAP Joule - Your AI Copilot"
          subTitle="SAP Joule is SAP's natural language, generative AI copilot designed to transform how users interact with SAP systems"
        />

        <AccordionRender accData={QAquestions} />

        <section className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">
            Embedded AI Across SAP Suite
          </h1>

          <div
            className="
              grid gap-4
              sm:grid-cols-1
              md:grid-cols-2 md:gap-6
            "
          >
            {SAP_AI_Suite.map((item, index) => (
              <SimpleCard {...item} key={index} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <QASimpleRender
            heading="SAP AI Business Services"
            content="Pre-built, industry-specific AI services ready to use without data science expertise."
          />
          <AccordionRender accData={SAP_AI_BUSINESS_SERVICE} />
        </section>

        <section className="flex flex-col gap-5">
          <QASimpleRender
            heading="Generative AI Capabilities"
            content="Leverage cutting-edge generative AI with enterprise governance and security."
          />
          <AccordionRender accData={GenerativeAICapabilities} />
        </section>
      </section>
    </ContentLayout>
  );
}

export default SAPJoule;
