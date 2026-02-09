import React, { useEffect } from "react";
import CommonHero from "../CommonHero";
import PublicCloud from "./component/PublicCloud";
import PrivateCloud from "./component/PrivateCloud";
import BusinessTech from "./component/BusinessTech";
import SuccessFactors from "./component/SuccessFactors";
import SAPSolutionsHeroImage from "../../assets/sap-hero-image.png";
import SAPBTPPillars from "./component/SAPBTPPillars";
import SAPJoule from "./component/SAPJoule";
import OurService from "./component/OurService";
import SAPAriba from "./component/SAPAriba";
import ContentLayout from "../ContentLayout";
import ContactForm from "../contactForm/ContactForm";

export const heroData = {
  heading: `
    SAP Public & Private Cloud, SAP BTP, SAP Ariba & SAP
    SuccessFactors
  `,
  tagline: "Accelerate | Innovate | Transform",
  description:
    "Modernize ERP, enable clean-core innovation, and transform workforce experiences using SAP cloud solutions.",
  actionButtons: [
    {
      label: "Talk to an SAP Expert",
      href: "/sapsolutions#contact-form",
      styles: {
        base: "bg-blue-500 text-white",
        hover: "hover:bg-blue-600",
        border: "",
      },
    },
  ],
  sectionImage: SAPSolutionsHeroImage,
};

function SapSolutions() {
  // Function to handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the '#' character
      const id = hash.substring(1);

      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []); // Run once on component mount

  return (
    <section>
      <CommonHero data={heroData} />

      <div id="s4hana-private-cloud">
        <PrivateCloud />
      </div>

      <div id="s4hana-public-cloud">
        <PublicCloud />
      </div>

      <div id="btp">
        <BusinessTech />
      </div>

      <div id="analytics-cloud">
        <SAPBTPPillars />
      </div>

      <div id="joule">
        <SAPJoule client:visible />
      </div>

      <div id="our-services">
        <OurService />
      </div>

      <div id="ariba">
        <SAPAriba />
      </div>

      <div id="successfactors">
        <SuccessFactors />
      </div>
<div id="contact-form">
      <ContentLayout cardBg="bg-slate-50">
        <ContactForm />
      </ContentLayout>
      </div>
    </section>
  );
}

export default SapSolutions;
// import React from "react";

// import CommonHero from "../CommonHero";
// import PublicCloud from "./component/PublicCloud";
// import PrivateCloud from "./component/PrivateCloud";
// import BusinessTech from "./component/BusinessTech";
// import SuccessFactors from "./component/SuccessFactors";
// import SAPSolutionsHeroImage from "../../assets/sap-solution-hero.jpg";
// import SAPBTPPillars from "./component/SAPBTPPillars";
// import SAPJoule from "./component/SAPJoule";
// import OurService from "./component/OurService";
// import SAPAriba from "./component/SAPAriba";

// export const heroData = {
//   heading: `
//     SAP Public & Private Cloud, SAP BTP, SAP Ariba & SAP
//     SuccessFactors
//   `,
//   description:
//     "Modernize ERP, enable clean-core innovation, and transform workforce experiences using SAP cloud solutions.",
//   actionButtons: [
//     {
//       label: "Talk to an SAP Expert",
//       href: "/service",
//       styles: {
//         base: "bg-blue-500 text-white",
//         hover: "hover:bg-blue-600",
//         border: "",
//       },
//     },
//   ],
//   sectionImage: SAPSolutionsHeroImage,
// };

// function SapSolutions() {
//   return (
//     <section>
//       <CommonHero
//         data={heroData}
//       />
//       <PrivateCloud />
//       <PublicCloud />

//       <BusinessTech />

//       <SAPBTPPillars />

//       <SAPJoule client:visible />

//       <OurService />

//       <SAPAriba />

//       <SuccessFactors />
//     </section>
//   );
// }

// export default SapSolutions;
