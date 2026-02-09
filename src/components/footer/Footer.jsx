import React from "react";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import appLogo from "../../assets/alpha-helion-logo.jpeg";

const navData = [
  {
    navHeading: "Home",
    navigations: [{ name: "What We Do", navLink: "/" }],
  },
  {
    navHeading: "Intelligent Solutions",
    navigations: [
      { name: "SAP", navLink: "/sapsolutions#" },
      { name: "SalesForce", navLink: "/salesforce#" },
      { name: "Data Science & Analytics", navLink: "/datascience#" },
    ],
  },
  {
    navHeading: "Strategic Delivery",
    navigations: [
      {
        name: "Portfolio Management",
        navLink: "/delivery#portfolio-management",
      },
      { name: "Program Management", navLink: "/delivery#program-management" },
      { name: "Project Management", navLink: "/delivery#project-management" },
      {
        name: "PMO Establishment & Optimization",
        navLink: "/delivery#pmo-establishment",
      },
      { name: "Delivery Models", navLink: "/delivery#delivery-models" },
      { name: "Engagement Models", navLink: "/delivery#engagement-models" },
    ],
  },
];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-[#1F2F3F] text-slate-300">
//       {/* ===== TOP BRAND SECTION ===== */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 text-center">
//         <a href="/" className="inline-flex items-center gap-3">
//           <span className="text-lg font-semibold text-white">
//             AlphaHelion Global
//           </span>
//         </a>

//         <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
//           Digital transformation powered by SAP, Microsoft, Salesforce, AI,
//           Data, and Cloud.
//         </p>
//       </div>

//       {/* ===== NAVIGATION GRID ===== */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
//         <div className="grid gap-12 md:grid-cols-[0.5fr_1fr_2fr_0.5fr]">
//           {navData?.map((item, index1) => (
//             <div key={index1}>
//               <h3
//                 className={`
//                   text-white font-semibold mb-4`}
//               >
//                 {item?.navHeading}
//               </h3>

//               <ul
//                 className={`
//                   text-sm
//                   ${
//                     item?.navigations?.length > 3
//                       ? "grid grid-cols-[0.4fr_0.5fr] gap-y-2 gap-x-3"
//                       : "space-y-3"
//                   }
//                 `}
//               >
//                 {item?.navigations?.map((nav, index2) => (
//                   <li key={index2}>
//                     <a
//                       href={nav?.navLink}
//                       className="hover:text-white transition"
//                     >
//                       {nav?.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* ===== CONNECT ===== */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Connect</h3>
//             <div className="flex items-center gap-4">
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
//               >
//                 <IconBrandLinkedin size={20} />
//               </a>
//               <a
//                 href="mailto:info@alphahelion.in"
//                 className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
//               >
//                 <IconMail size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-12 border-t border-slate-600/40" />

//         {/* Bottom */}
//         <p className="mt-6 text-center text-sm text-slate-400">
//           © {year} AlphaHelion Global LLP. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2F3F] text-slate-300">
      {/* <div className="flex justify-center">
        
      </div> */}

      <div className="mx-auto px-6 md:px-10 py-10">
        <div className="grid gap-12 md:grid-cols-[2fr_0.5fr_1fr_2fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              {/* <img
            src={appLogo?.src}
            alt="AlphaHelion Global"
            className="h-10 w-10 rounded-md"
             /> */}
              <span className="text-lg font-semibold text-white">
                AlphaHelion Global
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400">
              AlphaHelion Global LLP enables organizations to drive digital
              transformation and measurable business outcomes through expertise
              in SAP, Microsoft, Salesforce, Data, AI, and Cloud technologies.
            </p>
          </div>

          {navData?.map((item, index1) => (
            <div key={index1}>
              <h3
                className={`
                  text-white font-semibold mb-4`}
              >
                {item?.navHeading}
              </h3>

              <ul
                // className={`
                //   text-sm space-y-3
                //   `}
                className={`
                  text-sm
                  ${
                    item?.navigations?.length > 3
                      ? `grid grid-cols-1 gap-x-2 gap-y-3
                      md:grid-cols-2
                      `
                      : "space-y-3"
                  }
                  `}
              >
                {item?.navigations?.map((nav, index2) => (
                  <li key={index2}>
                    <a
                      href={nav?.navLink}
                      className="text-slate-400 hover:text-white transition"
                    >
                      {nav?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connect */}

        <div className="mt-6 border-t border-slate-600/40" />

        <div className="flex flex-col-reverse gap-6 justify-between align-center pt-5 md:flex-row">
          <p className="text-center text-sm text-slate-400">
            © {year} AlphaHelion Global LLP. All rights reserved.
          </p>

          <div className="flex justify-center">
            <div className="flex items-center gap-5">
              <a
                href="#"
                // href="https://www.linkedin.com"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                <IconBrandLinkedin size={20} />
              </a>
              <a
                href="/#contact-form"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                <IconMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import appLogo from "../../assets/alpha-helion-logo.jpeg";

// function Footer() {
//   const year = new Date()?.getFullYear();
//   const navigateConfig = [
//     {
//       label: "Privacy Policy",
//       href: "/privacy-policy",
//     },
//     {
//       label: "Terms of Service",
//       href: "/terms",
//     },
//     {
//       label: "SAP Compliance",
//       href: "/sap-compliance",
//     },
//     {
//       label: "Legal Objects",
//       href: "/legal",
//     },
//   ];
//   return (
//     <footer className="bg-slate-800 text-slate-300">
//       <div className="mx-auto px-10 py-5">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-3">
//             <a href="/" className="flex items-center gap-2">
//               <img
//                 src={appLogo?.src}
//                 className="h-9 w-9 rounded-md"
//                 alt="AlphaHelion"
//               />
//               <span className="font-semibold text-lg">AlphaHelion</span>
//             </a>
//           </div>

//           <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
//             {navigateConfig?.map((nav, index) => (
//               <a
//                 href={nav?.href}
//                 key={index}
//                 className="hover:text-white transition"
//               >
//                 {nav?.label}
//               </a>
//             ))}
//           </nav>

//           <p className="text-sm text-slate-400 text-center md:text-right">
//             © {year} AlphaHelion Global LLP. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
