import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import {
  IconChecklist,
  IconPointFilled,
  IconSettings,
  IconTools,
} from "@tabler/icons-react";
import SimpleCard from "../../SimpleCard";

const whatWeDo = [
  {
    title: "Implementation Services",
    iconConfig: {
      Icon: IconSettings,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "BTP landscape setup and configuration",
      "Application development and deployment",
      "Integration design and implementation",
      "Migration from on-premise to cloud",
    ],
  },
  {
    title: "Support Services",
    iconConfig: {
      Icon: IconTools,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "24/7 technical support",
      "Performance optimization",
      "Continuous improvement",
      "Training and knowledge transfer",
    ],
  },
  {
    title: "Consulting Services",
    iconConfig: {
      Icon: IconChecklist,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "BTP strategy and roadmap",
      "Clean Core transformation planning",
      "Architecture design and review",
      "Best practices and governance",
      "AI and Joule implementation strategy",
      "Generative AI adoption and use case identification",
      "SAP Business AI integration consulting",
      "Joule customization and training for your organization",
    ],
  },
];

function OurService() {
  const isOdd = whatWeDo.length % 2 !== 0;

  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        <Title title="Our Services" />
        <div
          className="
            grid gap-4
            sm:grid-cols-1
            md:grid-cols-2 md:gap-6
          "
        >
          {whatWeDo.map((item, index) => {
            const isLast = index === whatWeDo.length - 1;

            return (
              <div
                key={index}
                className={
                  isOdd && isLast ? "md:col-span-2 flex justify-center" : ""
                }
              >
                <div
                  className={
                    isOdd && isLast ? "w-full md:max-w-[900px]" : "w-full"
                  }
                >
                  <SimpleCard {...item} key={index} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </ContentLayout>
  );
}

export default OurService;
