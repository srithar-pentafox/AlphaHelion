import { IconBolt, IconBuildingBank, IconBuildingFactory, IconBuildingSkyscraper, IconHeart, IconPlane, IconRocket, IconTruck } from "@tabler/icons-react";
import React from "react";
import ContentLayout from "../../ContentLayout";

const dataConfig = {
  industries: {
    title: "Expertise Across Industries",
    subTitle: ` AlphaHelion Global LLP serves a diverse portfolio of sectors,
            bringing specialized knowledge to solve unique enterprise
            challenges.`,
    keyPoints: [
      {
        icon: <IconBuildingBank size={20} className="text-blue-500" />,
        key: "BFSI",
      },
      {
        icon: <IconHeart size={20} className="text-blue-500" />,
        key: "Healthcare",
      },
      {
        icon: <IconBolt size={20} className="text-blue-500" />,
        key: "Energy & Utilities",
      },
      {
        icon: <IconRocket size={20} className="text-blue-500" />,
        key: "Startups & SaaS",
      },
      {
        icon: <IconTruck size={20} className="text-blue-500" />,
        key: "Supply Chain",
      },
      {
        icon: <IconBuildingFactory size={20} className="text-blue-500" />,
        key: "Manufacturing",
      },
      {
        icon: <IconPlane size={20} className="text-blue-500" />,
        key: "Aviation",
      },
      {
        icon: <IconBuildingSkyscraper size={20} className="text-blue-500" />,
        key: "Smart Cities",
      },
    ],
  },
  WhyChooseAlphaHelion: {
    title: "Why Choose AlphaHelion?",
    reasons: [
      {
        keypoint: "SAP-Recommended",
        content: "Architecture following clean-core best practices.",
      },
      {
        keypoint: "Executive Visibility",
        content: "Strong governance and transparent reporting.",
      },
      {
        keypoint: "Outcome Focused",
        content: "Measurable business value from assessment to innovation.",
      },
    ],
  },
};

function WhyChooseAlphaHelion() {
  return (
    <ContentLayout cardBg="bg-white">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            {dataConfig?.industries?.title}
          </h2>

          <p className="mt-4 max-w-xl text-slate-500 text-lg">
            {dataConfig?.industries?.subTitle}
          </p>

          {/* Industry List */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-10 text-slate-700">
            {dataConfig?.industries?.keyPoints?.map((keyPoint, index) => (
              <div className="flex items-center gap-3" key={index}>
                <span className="text-blue-600">{keyPoint?.icon}</span>
                <p className="font-semibold text-slate-500">{keyPoint?.key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-blue-50 rounded-2xl p-10 border border-slate-200 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900 mb-8">
            {dataConfig?.WhyChooseAlphaHelion?.title}
          </h3>

          <div className="space-y-6">
            {dataConfig?.WhyChooseAlphaHelion?.reasons?.map((reason, index) => (
              <div className="flex gap-4" key={index}>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                  {index + 1}
                </div>
                <div>
                  <span className="font-semibold text-blue-700">
                    {reason?.keypoint}
                  </span>
                  <p className="text-slate-800">{reason?.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentLayout>
  );
}

export default WhyChooseAlphaHelion;
