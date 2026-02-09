import React from "react";
import { IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import appLogo from "../../assets/alpha-helion-logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2F3F] text-slate-300">
      {/* Top Section */}
      <div className="mx-auto px-6 md:px-10 py-7">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src={appLogo?.src}
                alt="AlphaHelion Global"
                className="h-10 w-10 rounded-md"
              />
              <span className="text-lg font-semibold text-white">
                AlphaHelion Global
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Digital transformation powered by SAP, Microsoft, Salesforce, AI, Data, and Cloud.
              {/* AlphaHelion Global LLP enables organizations to drive digital
              transformation and measurable business outcomes through expertise
              in SAP, Microsoft, Salesforce, Data, AI, and Cloud technologies. */}
            </p>
          </div>

          <div>
            {/* <h3 className="text-white font-semibold mb-4">Solutions</h3> */}
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                 What We Do
                </a>
              </li>
              <li>
                <a href="/sapsolutions#" className="hover:text-white transition">
                  Intelligent Solutions
                </a>
              </li>
              <li>
                <a href="/delivery" className="hover:text-white transition">
                  Strategic Delivery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="/industries" className="hover:text-white transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                <IconBrandLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                <IconBrandTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-600/40" />

        {/* Bottom */}
        <p className="mt-6 text-center text-sm text-slate-400">
          © {year} AlphaHelion Global LLP. All rights reserved.
        </p>
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
