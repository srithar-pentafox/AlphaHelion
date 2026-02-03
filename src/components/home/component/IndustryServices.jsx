import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import SimpleCard from "../../SimpleCard";

import {
  IconAntennaBars5,
  IconBolt,
  IconBuildingBank,
  IconBuildingCommunity,
  IconBuildingFactory2,
  IconBuildingSkyscraper,
  IconHeartbeat,
  IconPointFilled,
  IconSchool,
  IconShoppingBag,
} from "@tabler/icons-react";

const industryService = [
  {
    title: "Financial Services & Insurance",
    iconConfig: {
      Icon: IconBuildingBank,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Banking, Financial Services & Insurance (BFSI)",
      "InsurTech & FinTech startups",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    iconConfig: {
      Icon: IconHeartbeat,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Healthcare providers, hospitals, and clinics",
      "Pharmaceuticals, Biotech, and Life Sciences",
    ],
  },
  {
    title: "Telecom & Technology",
    iconConfig: {
      Icon: IconAntennaBars5,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Telecommunications",
      "Media, Entertainment & Gaming Technology",
      "Startups & Enterprise Technology Solutions",
    ],
  },
  {
    title: "Retail, E-Commerce & Consumer Goods",
    iconConfig: {
      Icon: IconShoppingBag,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Retail chains and online marketplaces",
      "Fast-Moving Consumer Goods (FMCG)",
      "Textile & Consumer Products",
    ],
  },
  {
    title: "Energy, Utilities & Natural Resources",
    iconConfig: {
      Icon: IconBolt,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Energy providers, utilities, and renewables",
      "Oil, Gas, and Mining industries",
    ],
  },
  {
    title: "Real Estate, Smart Cities & Infrastructure",
    iconConfig: {
      Icon: IconBuildingSkyscraper,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Real Estate development and management",
      "Smart Cities initiatives and urban infrastructure",
    ],
  },
  {
    title: "Education & EdTech",
    iconConfig: {
      Icon: IconSchool,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Schools, universities, and online education platforms",
      "Educational technology solutions",
    ],
  },
  {
    title: "Government & Public Sector",
    iconConfig: {
      Icon: IconBuildingCommunity,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Central, state, and municipal government programs",
      "Public sector digital transformation",
    ],
  },
  {
    title: "Manufacturing, Supply Chain & Mobility",
    iconConfig: {
      Icon: IconBuildingFactory2,
      iconBg: "bg-white",
    },
    contentIcon: <IconPointFilled className="text-blue-400" size={20} />,
    content: [
      "Automotive, Aerospace, and Mobility solutions",
      "Manufacturing operations and industrial supply chains",
      "Logistics, freight, and transportation",
    ],
  },
];

function IndustryServices() {
  const isOdd = industryService.length % 2 !== 0;

  return (
    <ContentLayout cardBg="bg-white">
      <section className="flex flex-col gap-8">
        <Title title="Industries We Serve" />

        <div
          className="
            grid gap-4
            sm:grid-cols-1
            md:grid-cols-2
            md:gap-8
          "
        >
          {industryService.map((item, index) => {
            const isLast = index === industryService.length - 1;

            return (
              <div
                key={index}
                className={
                  isOdd && isLast
                    ? "md:col-span-2 flex justify-center"
                    : ""
                }
              >
                <div
                  className={
                    isOdd && isLast
                      ? "w-full md:max-w-[900px]"
                      : "w-full"
                  }
                >
                  <SimpleCard {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </ContentLayout>
  );
}

export default IndustryServices;



// import React from 'react'
// import ContentLayout from '../../ContentLayout'
// import Title from '../../Title'
// import { IconAntennaBars5, IconBolt, IconBuildingBank, IconBuildingCommunity, IconBuildingFactory2, IconBuildingSkyscraper, IconHeartbeat, IconPointFilled, IconRocket, IconSchool, IconShoppingBag } from '@tabler/icons-react';
// import SimpleCard from '../../SimpleCard';

// const industryService = [
//   {
//       title: "Financial Services & Insurance",
//     iconConfig: {
//       Icon: IconBuildingBank,
//       iconBg: "bg-white",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Banking, Financial Services & Insurance (BFSI)",
//       "InsurTech & FinTech startups",
//     ],
//   },
//   {
//       title: "Healthcare & Life Sciences",
//     iconConfig: {
//       Icon: IconHeartbeat,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Healthcare providers, hospitals, and clinics",
//       "Pharmaceuticals, Biotech, and Life Sciences",
//     ],
//   },
//     {
//       title: "Telecom & Technology",
//     iconConfig: {
//       Icon: IconAntennaBars5,
//       iconBg: "bg-white",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Telecommunications",
//       "Media, Entertainment & Gaming Technology",
//       "Startups & Enterprise Technology Solutions",
//     ],
//   },
//   {
//       title: "Retail, E-Commerce & Consumer Goods",
//     iconConfig: {
//       Icon: IconShoppingBag,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Retail chains and online marketplaces",
//       "Fast-Moving Consumer Goods (FMCG)",
//       "Textile & Consumer Products",
//     ],
//   },
//   {
//       title: "Manufacturing, Supply Chain & Mobility",
//     iconConfig: {
//       Icon: IconBuildingFactory2,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Automotive, Aerospace, and Mobility solutions",
//       "Manufacturing operations and industrial supply chains",
//       "Logistics, freight, and transportation",
//     ],
//   },
//   {
//       title: "Energy, Utilities & Natural Resources",
//     iconConfig: {
//       Icon: IconBolt,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Energy providers, utilities, and renewables",
//       "Oil, Gas, and Mining industries",
//     ],
//   },
//   {
//       title: "Real Estate, Smart Cities & Infrastructure",
//     iconConfig: {
//       Icon: IconBuildingSkyscraper,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Real Estate development and management",
//       "Smart Cities initiatives and urban infrastructure",
//     ],
//   },
//   {
//       title: "Education & EdTech",
//     iconConfig: {
//       Icon: IconSchool,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Schools, universities, and online education platforms",
//       "Educational technology solutions",
//     ],
//   },
//   {
//       title: "Government & Public Sector",
//     iconConfig: {
//       Icon: IconBuildingCommunity,
//       iconBg: "bg-white",
//       iconColor: "text-blue-400",
//     },
//     contentIcon: (
//       <IconPointFilled className="text-blue-400" size={20} stroke={1.5} />
//     ),
//     content: [
//       "Central, state, and municipal government programs",
//       "Public sector digital transformation",
//     ],
//   },
// ];

// function IndustryServices() {
//   return (
//     <ContentLayout cardBg={"bg-white"}>
//       <section className="flex flex-col gap-8">
//         <Title
//           title="Industries We Serve"
//         />
//         <div
//           className="
//                         grid gap-4
//                       sm:grid-cols-1
//                       md:grid-cols-2 md:gap-8 
//                       lg:grid-cols-2 md:gap-8
//                       "
//         >
//           {industryService?.map((item, index) => (
//             <SimpleCard {...item} key={index} />
//           ))}
//         </div>
//       </section>
//     </ContentLayout>
//   )
// }

// export default IndustryServices