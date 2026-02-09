import React, { useEffect } from "react";
import CommonHero from "../CommonHero";
import ContentLayout from "../ContentLayout";
import ContactForm from "../contactForm/ContactForm";
import landingImage from "../../assets/home-hero.png";
import MissionVision from "./component/MissionVision";
import WhatWeDo from "./component/WhatWeDo";
import IndustryServices from "./component/IndustryServices";
import WhyChooseAlphaHelionGlobal from "./component/WhyChooseAlphaHelionGlobal";

const heroData = {
  heading: `
    AlphaHelion Global
  `,
  tagline: "Accelerate | Innovate | Transform",
  description:
    "AlphaHelion Global LLP is a technology consulting and digital solutions firm that helps organizations accelerate transformation, drive innovation, and achieve measurable business outcomes. With deep expertise in SAP, Microsoft, Salesforce, Data Science, AI, and Cloud technologies, we empower enterprises to modernize systems, automate operations, and create scalable, future-ready digital landscapes.",
  actionButtons: [
    {
      label: "Explore Solutions",
      href: "/sapsolutions#",
      styles: {
        base: "bg-slate-900 text-white transition-colors duration-500",
        hover: `border-slate-400 md:hover:bg-white md:hover:text-slate-900 md:hover:shadow-lg`,
        border: "border-2 border-slate-400",
      },
    },
    {
      label: "Our Deliveries",
      href: "/delivery",
      styles: {
        base: "bg-blue-500 text-white transition-colors duration-500",
        hover: `border-blue-400 md:hover:bg-white md:hover:text-blue-500 md:hover:shadow-lg`,
        border: "border-2 border-blue-400",
      },
    },
  ],
  sectionImage: landingImage,
};

function Home() {
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
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section>
      <CommonHero
        data={heroData}
        floatingCard={true}
        cardBg="bg-gradient-to-l from-blue-400 via-blue-300 to-white-100"
      />

      <MissionVision />
      {/* <ServicePillar /> */}

      <WhatWeDo />

      <IndustryServices />

      <WhyChooseAlphaHelionGlobal />

      {/* <Innovations /> */}

      {/* <WhyChooseAlphaHelion /> */}

      <div id="contact">
        <ContentLayout cardBg="bg-slate-50">
          <ContactForm />
        </ContentLayout>
      </div>
    </section>
  );
}

export default Home;
