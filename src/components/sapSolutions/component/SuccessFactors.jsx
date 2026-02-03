import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import {
  IconBrandFlightradar24,
  IconChartPie,
  IconCircleCheckFilled,
  IconCoins,
  IconPointFilled,
  IconRocket,
  IconSchool,
  IconSitemap,
  IconUserPlus,
  IconUsersGroup,
} from "@tabler/icons-react";
import DynamicCard from "../../DynamicCard";
import SimpleCard from "../../SimpleCard";
import QASimpleRender from "../../QASimpleRender";

function SuccessFactors() {
  const iconConfigSize = {
    size: 28,
  };
  const successFactors = [
    {
      cardHeader: {
        iconConfig: {
          Icon: IconUsersGroup,
          singleColor: "blue",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Employee Central",
      },
      contentIcon: (
        <IconPointFilled className="text-blue-400" size={20} stroke={3} />
      ),
      content: [
        "Global core HR system",
        "Time & attendance",
        "Benefits administration",
        "Regulatory compliance",
      ],
    },
    {
      themeColor: "violet",
      cardHeader: {
        iconConfig: {
          Icon: IconBrandFlightradar24, //    //IconUserPlus
          singleColor: "violet",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Performance & Goals",
        color: "text-violet-400",
      },
      cardBg: "bg-white",
      contentIcon: (
        <IconPointFilled className="text-violet-400" size={20} stroke={3} />
      ),

      content: [
        "Goal alignment",
        "Continuous feedback",
        "Development planning",
        "Performance culture",
      ],
    },
    {
      themeColor: "green",
      cardHeader: {
        iconConfig: {
          Icon: IconUserPlus,
          singleColor: "green",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Recruiting",
      },
      cardBg: "bg-white",
      contentIcon: (
        <IconPointFilled className="text-green-400" size={20} stroke={3} />
      ),

      content: [
        "Talent acquisition lifecycle",
        "Candidate management",
        "Hiring workflows",
        "Pipeline analytics",
      ],
    },
    {
      themeColor: "orange",
      cardHeader: {
        iconConfig: {
          Icon: IconSchool,
          iconBg: "bg-orange-100",
          iconColor: "text-orange-400",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Learning Management",
      },
      cardBg: "bg-white",
      contentIcon: (
        <IconPointFilled className="text-orange-400" size={20} stroke={3} />
      ),
      content: [
        "Personalized learning",
        "Course administration",
        "Compliance training",
        "Skill development",
      ],
    },
    {
      themeColor: "blue",
      cardHeader: {
        iconConfig: {
          Icon: IconRocket,
          singleColor: "blue",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Onboarding",
      },
      cardBg: "bg-white",
      contentIcon: (
        <IconPointFilled className="text-blue-400" size={20} stroke={3} />
      ),
      content: [
        "Automated journeys",
        "Task checklists",
        "Policy acknowledgements",
        "Faster integration",
      ],
    },
    {
      themeColor: "green",
      cardHeader: {
        iconConfig: {
          Icon: IconCoins,
          singleColor: "green",
          ...iconConfigSize,
        },
      },
      cardTitles: {
        title: "Compensation",
      },
      cardBg: "bg-white",
      contentIcon: (
        <IconPointFilled className="text-green-400" size={20} stroke={3} />
      ),

      content: [
        "Salary planning",
        "Salary planning",
        "Budget management",
        "Rewards administration",
      ],
    },
  ];

  const data = [
    {
      title: "Succession & Development",
      iconConfig: {
        Icon: IconSitemap,
        singleColor: "green",
      },
      contentIcon: <IconCircleCheckFilled className="text-green-400" />,

      content: [
        "Identify and develop future leaders",
        "Succession planning and talent pools",
        "Career paths and development plans",
      ],
    },
    {
      title: "Workforce Analytics & Planning",
      iconConfig: {
        Icon: IconChartPie,
        // singleColor: "",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-400",
      },
      contentIcon: <IconCircleCheckFilled className="text-orange-300" />,
      content: [
        "Advanced people analytics and dashboards",
        "Workforce planning and predictive insights",
        "Performance benchmarking",
      ],
    },
  ];

  const SAP_SUCCESS_FACTOR = [
    {
      content: [
        "Employee Central -- A global core HR system that centralizes employee data, organizational structures, time and attendance, benefits, and compliance management, serving as the foundation for the SuccessFactors suite.",
        "Recruiting -- Supports the full talent acquisition lifecycle with tools for attracting, engaging, and hiring the right candidates, including job requisition management, candidate tracking, and pipeline analytics.",
        "Onboarding -- Provides a structured and automated journey for new hires with task checklists, documentation processing, and team introductions to accelerate integration.",
        "Performance & Goals -- Aligns individual and team goals with business objectives, enabling continuous performance reviews, feedback, and development conversations.",
        "Learning Management System (LMS) -- Delivers personalized learning experiences with course creation, training administration, competency tracking, and certification management.",
        "Compensation Management -- Enables effective planning and administration of salaries, bonuses, variable pay, and incentive programs through integrated budgeting tools.",
        "Succession & Development -- Helps identify and prepare future leaders through succession planning, talent pools, career paths, and development plans.",
        "Workforce Analytics & Planning -- Provides advanced people analytics, dashboards, workforce planning, and predictive insights for data-driven HR decisions.",
        "Employee Experience & Engagement -- Integrated with SAP Qualtrics to capture continuous employee feedback and sentiment, improving engagement, retention, and workplace experience.",
        "Additional Capabilities -- Includes Global Payroll, Time & Attendance, Benefits Management, and Employee Self-Service, available through modular licensing for organizations of any size.",
      ],
    },
  ];

  return (
    <ContentLayout>
      <section className="flex flex-col gap-8">
        <Title
          title="SAP Success Factors"
          subTitle="SAP Success Factors — Cloud Human Experience & Human Capital Management Solutions"
        />
        <QASimpleRender
          heading="OverView"
          content="SAP SuccessFactors is a leading cloud-based Human Capital Management (HCM) and Human Experience Management (HXM) suite designed to help organizations manage the entire employee lifecycle — from hiring and onboarding to performance, development, compensation, and analytics. It enables HR teams to automate core HR processes, improve workforce engagement, and make data-driven decisions at scale."
        />
        <section className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Core Offerings & Modules</h1>
        </section>

        {SAP_SUCCESS_FACTOR?.map((item, index) => (
          <QASimpleRender withContentBar={true} {...item} key={index} />
        ))}
      </section>
    </ContentLayout>
  );
}

export default SuccessFactors;
// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import {
//   IconBrandFlightradar24,
//   IconChartPie,
//   IconCircleCheckFilled,
//   IconCoins,
//   IconPointFilled,
//   IconRocket,
//   IconSchool,
//   IconSitemap,
//   IconUserPlus,
//   IconUsersGroup,
// } from "@tabler/icons-react";
// import DynamicCard from "../../DynamicCard";
// import SimpleCard from "../../SimpleCard";

// function SuccessFactors() {
//   const iconConfigSize = {
//     size: 28,
//   };
//   const successFactors = [
//     {
//       cardHeader: {
//         iconConfig: {
//           Icon: IconUsersGroup,
//           singleColor: "blue",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Employee Central",
//       },
//       contentIcon: (
//         <IconPointFilled className="text-blue-400" size={20} stroke={3} />
//       ),
//       content: [
//         "Global core HR system",
//         "Time & attendance",
//         "Benefits administration",
//         "Regulatory compliance",
//       ],
//     },
//     {
//       themeColor: "violet",
//       cardHeader: {
//         iconConfig: {
//           Icon: IconBrandFlightradar24, //    //IconUserPlus
//           singleColor: "violet",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Performance & Goals",
//                 color: "text-violet-400",
//       },
//       cardBg: "bg-white",
//       contentIcon: (
//         <IconPointFilled className="text-violet-400" size={20} stroke={3} />
//       ),

//       content: [
//         "Goal alignment",
//         "Continuous feedback",
//         "Development planning",
//         "Performance culture",
//       ],
//     },
//     {
//       themeColor: "green",
//       cardHeader: {
//         iconConfig: {
//           Icon: IconUserPlus,
//           singleColor: "green",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Recruiting",
//       },
//       cardBg: "bg-white",
//       contentIcon: (
//         <IconPointFilled className="text-green-400" size={20} stroke={3} />
//       ),

//       content: [
//         "Talent acquisition lifecycle",
//         "Candidate management",
//         "Hiring workflows",
//         "Pipeline analytics",
//       ],
//     },
//     {
//       themeColor: "orange",
//       cardHeader: {
//         iconConfig: {
//           Icon: IconSchool,
//           iconBg: "bg-orange-100",
//           iconColor: "text-orange-400",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Learning Management",
//       },
//       cardBg: "bg-white",
//       contentIcon: (
//         <IconPointFilled className="text-orange-400" size={20} stroke={3} />
//       ),
//       content: [
//         "Personalized learning",
//         "Course administration",
//         "Compliance training",
//         "Skill development",
//       ],
//     },
//     {
//       themeColor: "blue",
//       cardHeader: {
//         iconConfig: {
//           Icon: IconRocket,
//           singleColor: "blue",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Onboarding",
//       },
//       cardBg: "bg-white",
//       contentIcon: (
//         <IconPointFilled className="text-blue-400" size={20} stroke={3} />
//       ),
//       content: [
//         "Automated journeys",
//         "Task checklists",
//         "Policy acknowledgements",
//         "Faster integration",
//       ],
//     },
//     {
//       themeColor: "green",
//       cardHeader: {
//         iconConfig: {
//           Icon: IconCoins,
//           singleColor: "green",
//           ...iconConfigSize,
//         },
//       },
//       cardTitles: {
//         title: "Compensation",
//       },
//       cardBg: "bg-white",
//       contentIcon: (
//         <IconPointFilled className="text-green-400" size={20} stroke={3} />
//       ),

//       content: [
//         "Salary planning",
//         "Salary planning",
//         "Budget management",
//         "Rewards administration",
//       ],
//     },
//   ];

//   const data = [
//     {
//       title: "Succession & Development",
//       iconConfig: {
//         Icon: IconSitemap,
//         singleColor: "green",
//       },
//       contentIcon: <IconCircleCheckFilled className="text-green-400" />,

//       content: [
//         "Identify and develop future leaders",
//         "Succession planning and talent pools",
//         "Career paths and development plans",
//       ],
//     },
//     {
//       title: "Workforce Analytics & Planning",
//       iconConfig: {
//         Icon: IconChartPie,
//         // singleColor: "",
//         iconBg: "bg-orange-100",
//         iconColor: "text-orange-400",
//       },
//       contentIcon: <IconCircleCheckFilled className="text-orange-300" />,
//       content: [
//         "Advanced people analytics and dashboards",
//         "Workforce planning and predictive insights",
//         "Performance benchmarking",
//       ],
//     },
//   ];
//   return (
//     <ContentLayout>
//       <section className="flex flex-col gap-8">
//         <Title
//           title="SAP SuccessFactors - Cloud Human Experience & Human Capital Management"
//           subTitle="SAP SuccessFactors is a cloud-based Human Capital Management (HCM) and Human Experience Management (HXM) suite designed to manage the complete employee lifecycle — from hiring and onboarding to performance, development, compensation, and workforce analytics."
//         />
//         <div
//           className="
//                         grid gap-4
//                       sm:grid-cols-1
//                       md:grid-cols-3 md:gap-8
//                       lg:grid-cols-3 md:gap-8
//                       "
//         >
//           {successFactors?.map((service, index) => (
//             <DynamicCard {...service} hoverEffect={false} key={index} />
//           ))}
//         </div>

//         <div
//           className="
//                         grid gap-4
//                       sm:grid-cols-1
//                       md:grid-cols-2 md:gap-8
//                       lg:grid-cols-2 md:gap-8
//                       "
//         >
//           {data?.map((item, index) => (
//             <SimpleCard {...item} key={index} />
//           ))}
//         </div>
//       </section>
//     </ContentLayout>
//   );
// }

// export default SuccessFactors;
