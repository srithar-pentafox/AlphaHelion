import React from "react";

export default function ContentLayout({
  cardBg = "bg-slate-50",
  padYStyle = "py-15",
  children,
}) {
  return (
    <section className={
      `px-4 py-5 ${cardBg}
      md:px-10 ${padYStyle}
      
    `}>
      {children}
    </section>
  );
}
