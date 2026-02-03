import React from "react";
import CommonHero from "../CommonHero";
import WhoWeAre from "./component/WhoWeAre";
import ContactForm from "../contactForm/ContactForm";
import ContentLayout from "../ContentLayout";

export const heroData = {
  heading: `
    About AlphaHelion Global LLP
  `,
  tagline: "Accelerate | Innovate | Transform",
  description:
    "A technology and consulting firm delivering scalable digital and enterprise solutions.",
};

function Company() {
  return (
    <section>
      <CommonHero data={heroData} />

      <WhoWeAre />

      <ContentLayout cardBg="bg-slate-50">
        <ContactForm />
      </ContentLayout>
    </section>
  );
}

export default Company;
