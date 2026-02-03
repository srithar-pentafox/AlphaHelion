import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import SimpleCard from "../../SimpleCard";
import {
  IconCircleCheckFilled,
  IconEye,
  IconTargetArrow,
} from "@tabler/icons-react";

const missionVision = [
  {
    title: "Mission",
    themeColor: "green",
    iconConfig: {
      Icon: IconTargetArrow,
      // singleColor: "green",
      iconBg: "bg-white",
    },
    contentIcon: <IconCircleCheckFilled className="text-green-400" />,

    content:
      "To help organizations modernize and scale through advanced technology, AI, and ERP solutions—combining intelligent design, advanced AI capabilities, and execution excellence to deliver lasting business value.",
  },
  {
    title: " Vision",
    themeColor: "violet",
    iconConfig: {
      Icon: IconEye,
      iconBg: "bg-white",
    },
    contentIcon: <IconCircleCheckFilled className="text-orange-300" />,
    content:
      "To be the most trusted global partner for intelligent enterprise transformation—driving measurable business outcomes through excellence and innovation across industries. ",
  },
];

function MissionVision() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        <Title title="Our Mission &  Vision" />
        <div
          className="
                        grid gap-4
                      sm:grid-cols-1
                      md:grid-cols-2 md:gap-8 
                      lg:grid-cols-2 md:gap-8
                      "
        >
          {missionVision?.map((item, index) => (
            <SimpleCard {...item} key={index} />
          ))}
        </div>
      </section>
    </ContentLayout>
  );
}

export default MissionVision;
