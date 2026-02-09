import React, { useEffect } from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import StatsCard from "../../StatsCard";
import {
  IconBulb,
  IconRocket,
  IconSettings,
  IconChartLine,
} from "@tabler/icons-react";

const iconConfig = {
  size: 28,
  className: "text-blue-600",
};

export const engagementModels = [
  {
    iconConfig: {
      Icon: IconBulb,
      singleColor: "green",
    },
    title: "Consulting & Advisory",
  },
  {
    iconConfig: {
      Icon: IconRocket,
      singleColor: "green",
    },
    title: "Implementation & Delivery",
  },
  {
    iconConfig: {
      Icon: IconSettings,
      singleColor: "green",
    },
    title: "Managed Services",
  },
  {
    iconConfig: {
      Icon: IconChartLine,
      singleColor: "green",
    },
    title: "PMO as a Service",
  },
];

function EngagementModels() {
  // Handle hash on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove '#'
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure page is loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });

          // Optional: Add highlight effect
          element.style.backgroundColor = "#f0f9ff";
          setTimeout(() => {
            element.style.backgroundColor = "";
          }, 2000);
        }, 300);
      }
    }
  }, []);
  return (
    <ContentLayout>
      <div className="flex flex-col gap-8" id="engagement-models">
        <Title title="Engagement Models" />
        <section
          className="
                grid gap-4
              sm:grid-cols-1
              md:grid-cols-2 md:gap-8 
              xl:grid-cols-4 md:gap-8
              "
        >
          {engagementModels?.map((model, index) => (
            <StatsCard {...model} key={index} />
          ))}
        </section>
      </div>
    </ContentLayout>
  );
}

export default EngagementModels;
