import React, { useEffect } from "react";
import CommonHero from "../CommonHero";
import { IconTruckDelivery } from "@tabler/icons-react";
import OurServices from "./component/OurServices";
import DeliveryModels from "./component/DeliveryModels";
import ContentLayout from "../ContentLayout";
import ContactForm from "../contactForm/ContactForm";
import RiskChangeAssurance from "./component/RiskChangeAssurance";
import EngagementModels from "../services/component/EngagementModels";
import deliveryHeroImage from "../../assets/delivery-hero.png"

export const heroData = {
  heading: `
    Strategic Delivery
  `,
  tagline: "Deliver with Clarity | Control Risk | Realize Outcomes",
  description: `Portfolio, Program & Project Management. 
    Deliver with Clarity.`,
  keypoints: ["Standardized delivery models", " Integrated risk and dependency management", "Data-driven decision support"],
  sectionImage: deliveryHeroImage,

};

export default function Delivery() {
  // Handle hash when page loads
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section className="bg-primary text-primary-foreground">
      <CommonHero
        data={heroData}
      />

      <OurServices />
      <DeliveryModels />
      <EngagementModels />

      <ContentLayout>
        <ContactForm />
      </ContentLayout>
    </section>
  );
}

// import React from "react";
// import CommonHero from "../CommonHero";
// import { IconTruckDelivery } from "@tabler/icons-react";
// import WhatWeDo from "./component/WhatWeDo";
// import DeliveryModels from "./component/DeliveryModels";
// import ContentLayout from "../ContentLayout";
// import ContactForm from "../contactForm/ContactForm";
// import RiskChangeAssurance from "./component/RiskChangeAssurance";
// import EngagementModels from "../services/component/EngagementModels";

// export const heroData = {
//   badge: {
//     icon: <IconTruckDelivery size={15} />,
//     content: "DELIVERY EXCELLENCE",
//   },
//   heading: `
//     Delivery Excellence
//   `,
//   description:
//     "Portfolio, Program & Project Management. Deliver with Clarity. Control Risk. Realize Outcomes.",
// };

// export default function Delivery() {
//   return (
//     <section className="bg-primary text-primary-foreground">
//       <CommonHero
//         data={heroData}
//         cardBg="bg-gradient-to-l from-blue-50 via-blue-50 to-white-50"
//       />

//       <WhatWeDo />
//       <DeliveryModels />
//       <EngagementModels />
//       {/* <DeliveryModels /> */}

//       {/* <RiskChangeAssurance /> */}

//       <ContentLayout>
//         <ContactForm />
//       </ContentLayout>
//     </section>
//   );
// }
