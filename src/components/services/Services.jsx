import React from "react";
import CommonHero from "../CommonHero";
import ContactForm from "../contactForm/ContactForm";
import ContentLayout from "../ContentLayout";
import { IconUser } from "@tabler/icons-react";
import CoreService from "./component/CoreService";
import Footer from "../footer/Footer";
import EngagementModels from "./component/EngagementModels";

const heroData = {
  heading: `
    Technology & Digital Services
  `,
  description:
    "Enterprise-grade software, cloud, AI, cypersecurity and integration services designed for scale.",
};

function Services() {
  return (
    <section>
      <CommonHero
        data={heroData}
        cardBg="bg-gradient-to-l from-blue-500 via-blue-500 to-white-500"
      />

      <CoreService />

      <EngagementModels />

      <ContentLayout cardBg="bg-slate-50">
        <ContactForm />
      </ContentLayout>
      <Footer />
    </section>
  );
}

export default Services;
