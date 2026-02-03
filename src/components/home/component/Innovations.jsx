import React from "react";
import ContentLayout from "../../ContentLayout";
import { IconArrowsShuffle, IconChartPie, IconWand } from "@tabler/icons-react";

const iconConfig = {
  size: 25,
  className: "text-blue-500",
};
const Innovation = {
  title: "Why AlphaHelion Global",
  // subTitle: `The foundation for the Intelligent Enterprise. We leverage SAP
  //             Business Technology Platform to build upgrade-safe extensions and
  //             unified data landscapes.`,
  innovation: [
    {
      icon: <IconArrowsShuffle {...iconConfig} />,
      title: "Delivery Excellence",
      content: "End-to-end governance, execution, and measurable outcomes",
    },
    {
      icon: <IconWand {...iconConfig} />,
      title: "Innovation at Scale",
      content: `Modern, clean-core, and future-ready technology solutions`,
    },
    {
      icon: <IconChartPie {...iconConfig} />,
      title: "Trusted Partnerships",
      content: `Long-term collaboration, not just projects`,
    },
    {
      icon: <IconChartPie {...iconConfig} />,
      title: "Industry Expertise",
      content: `Deep knowledge across enterprise technology and key sectors`,
    },
  ],
};

function Innovations() {
  return (
    <ContentLayout cardBg="bg-gradient-to-br from-slate-900 to-slate-800">
      <div
        className="
      mx-auto grid grid-cols-1 
      lg:grid-cols-2 items-center
      "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl text-white font-semibold">
              {Innovation?.title}
            </h2>
            <p className="max-w-xl text-slate-400 text-xl">
              {Innovation?.subTitle}
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            {Innovation?.innovation?.map((innovation, index) => (
              <div className="flex gap-4" kay={index}>
                {innovation?.icon}
                <div>
                  <h4 className="text-white text-xl font-semibold">
                    {innovation?.title}
                  </h4>
                  <p className="text-slate-400 text-md">
                    {innovation?.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FUNNEL */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10">
          <h3 className="text-center mb-10 text-lg font-medium text-slate-200">
            Transformation Maturity Model
          </h3>

          <div className="space-y-4">
            {/* Funnel Row */}
            <div className="flex items-center gap-6">
              <span className="w-32 text-sm text-slate-400">Assessment</span>
              <div className="flex-1 h-12 bg-slate-600/60 rounded-md flex items-center justify-center">
                100
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="w-32 text-sm text-slate-400">
                Clean-Core Setup
              </span>
              <div className="flex-1 h-12 bg-slate-500/70 rounded-md flex items-center justify-center">
                85
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="w-32 text-sm text-slate-400">
                BTP Integration
              </span>
              <div className="w-[75%] h-12 bg-blue-600 rounded-md flex items-center justify-center">
                70
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="w-32 text-sm text-slate-400">
                Innovation Scale
              </span>
              <div className="w-[60%] h-12 bg-blue-500 rounded-md flex items-center justify-center">
                55
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="w-32 text-sm text-slate-400">
                Managed Support
              </span>
              <div className="w-[45%] h-12 bg-blue-400 rounded-md flex items-center justify-center">
                45
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-100 mt-10 flex p-8 rounded-sm">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-blue-500">
            Ready to Transform Your Business?
          </h1>
          <p className="text-xl">
          Partner with AlphaHelion Global to modernize systems, automate
          operations, and unlock strategic business value.
          </p>
        </div>
      </div> */}
    </ContentLayout>
  );
}

export default Innovations;
