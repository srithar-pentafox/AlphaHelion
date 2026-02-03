import React, { useState, useRef, useEffect } from "react";
import appLogo from "../../assets/alpha-helion-logo.jpeg";
import {
  IconBrain,
  IconBriefcase,
  IconBuildingCog,
  IconChartBar,
  IconChecklist,
  IconHierarchy,
  IconNetwork,
  IconTruckDelivery,
  IconUsers,
  IconMenu2,
  IconX,
  IconChevronRight,
  IconChevronDown,
  IconPointFilled,
} from "@tabler/icons-react";

export default function Navbar({ pathname }) {
  /* ================= DESKTOP STATES ================= */
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
  const [isSolutionClicked, setIsSolutionClicked] = useState(false);
  const deliveryRef = useRef(null);
  const solutionRef = useRef(null);

  /* ================= MOBILE STATES ================= */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // "solutions" | "delivery"

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isSidebarOpen]);

  /* ================= DATA ================= */

  const deliveryItems = [
    {
      title: "Portfolio Management",
      href: "/delivery",
      hash: "#portfolio-management",
      Icon: IconBriefcase,
    },
    {
      title: "Program Management",
      href: "/delivery",
      hash: "#program-management",
      Icon: IconNetwork,
    },
    {
      title: "Project Management",
      href: "/delivery",
      hash: "#project-management",
      Icon: IconChecklist,
    },
    {
      title: "PMO Establishment & Optimization",
      href: "/delivery",
      hash: "#pmo-establishment",
      Icon: IconBuildingCog,
    },
    {
      title: "Delivery Models",
      href: "/delivery",
      hash: "#delivery-models",
      Icon: IconTruckDelivery,
    },
    {
      title: "Engagement Models",
      href: "/delivery",
      hash: "#engagement-models",
      Icon: IconUsers,
    },
  ];

  const solutionItems = [
    {
      title: "SAP Solutions",
      href: "/sapsolutions",
      hash: "#",
      Icon: IconChartBar,
      subCategories: [
        {
          title: "SAP S/4HANA Private Cloud",
          href: "/sapsolutions",
          hash: "#s4hana-private-cloud",
        },
        {
          title: "SAP S/4HANA Public Cloud Services",
          href: "/sapsolutions",
          hash: "#s4hana-public-cloud",
        },
        {
          title: "SAP Business Technology Platform (BTP)",
          href: "/sapsolutions",
          hash: "#btp",
        },
        { title: "SAP Ariba", href: "/sapsolutions", hash: "#ariba" },
        {
          title: "SAP SuccessFactors",
          href: "/sapsolutions",
          hash: "#successfactors",
        },
      ],
    },
    {
      title: "SalesForce",
      href: "/salesforce",
      hash: "#",
      Icon: IconHierarchy,
    },
    {
      title: "Data Science & Analytics",
      href: "/datascience",
      hash: "#",
      Icon: IconBrain,
    },
  ];

  /* ================= CLICK OUTSIDE (DESKTOP) ================= */
  useEffect(() => {
    const handleClick = (e) => {
      if (deliveryRef.current && !deliveryRef.current.contains(e.target)) {
        setIsDeliveryClicked(false);
      }
      if (solutionRef.current && !solutionRef.current.contains(e.target)) {
        setIsSolutionClicked(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ================= HELPERS ================= */

  const linkClass = (path) =>
    pathname === path || pathname.startsWith(path + "/")
      ? "text-blue-600 font-semibold"
      : "text-slate-600 hover:text-blue-600 transition";

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleLinkClick = (item) => {
    setIsDeliveryClicked(false);
    setIsSolutionClicked(false);
    setIsSidebarOpen(false);
    setOpenSection(null);

    const currentPath = window.location.pathname;
    if (currentPath === item.href) {
      const el = document.getElementById(item.hash.replace("#", ""));
      el && el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = item.href + item.hash;
    }
  };

  /* ================= JSX ================= */

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        <div className="mx-auto px-4 py-2 flex items-center justify-between lg:px-10">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={appLogo?.src}
              className="h-20 w-20 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-md"
              alt="AlphaHelion Global"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl lg:text-3xl">
                AlphaHelion Global
              </span>
              <span className="text-xs md:text-sm text-blue-600">
                Accelerate | Innovate | Transform
              </span>
            </div>
          </a>

          {/* ================= DESKTOP NAV (LG+) ================= */}
          <nav className="hidden lg:flex gap-6 text-lg font-semibold relative whitespace-nowrap">
            <a href="/" className={linkClass("/")}>
              What We Do
            </a>

            {/* SOLUTIONS */}
            <div ref={solutionRef} className="relative">
              <div
                className={`${linkClass("/sapsolutions")} flex items-center gap-1 cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSolutionClicked(!isSolutionClicked);
                  setIsDeliveryClicked(false);
                }}
              >
                Intelligent Solutions
                <IconChevronDown
                  size={16}
                  className={`transition-transform ${isSolutionClicked ? "rotate-180" : ""}`}
                />
              </div>

              {isSolutionClicked && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1000px] bg-blue-100 rounded-lg shadow-xl p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {solutionItems.map((item, i) => (
                      <div key={i}>
                        <div
                          className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-blue-50"
                          onClick={() => handleLinkClick(item)}
                        >
                          <item.Icon
                            size={30}
                            className="text-blue-400 bg-white p-1 rounded-md"
                          />
                          <span className="font-semibold">{item.title}</span>
                        </div>

                        {item.subCategories && (
                          <div className="ml-8 mt-2 space-y-2">
                            {item.subCategories.map((sub, si) => (
                              <div
                                key={si}
                                className="text-sm cursor-pointer hover:text-blue-600 font-medium"
                                onClick={() => handleLinkClick(sub)}
                              >
                                • {sub.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DELIVERY */}
            <div ref={deliveryRef} className="relative">
              <div
                className={`${linkClass("/delivery")} flex items-center gap-1 cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDeliveryClicked(!isDeliveryClicked);
                  setIsSolutionClicked(false);
                }}
              >
                Strategic Delivery
                <IconChevronDown
                  size={16}
                  className={`transition-transform ${isDeliveryClicked ? "rotate-180" : ""}`}
                />
              </div>

              {isDeliveryClicked && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-blue-100 rounded-lg shadow-xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-3">
                    {deliveryItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-blue-50"
                        onClick={() => handleLinkClick(item)}
                      >
                        <item.Icon
                          size={30}
                          className="text-blue-400 bg-white p-1 rounded-md"
                        />
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/#contact"
            className="hidden lg:inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
          >
            Talk to an Expert
          </a>

          {/* MOBILE / TABLET HAMBURGER */}
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <IconMenu2 size={28} className="text-slate-900" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE / TABLET SIDEBAR ================= */}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 right-0 h-full w-full bg-white z-50
          flex flex-col transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* SIDEBAR HEADER WITH LOGO */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src={appLogo?.src}
              className="h-15 w-15 rounded-md"
              alt="AlphaHelion"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base">AlphaHelion Global</span>
              <span className="text-xs text-blue-600">
                Accelerate | Innovate | Transform
              </span>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)}>
            <IconX size={22} />
          </button>
        </div>

        {/* SIDEBAR SCROLL AREA */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-6">
          <a href="/" className="block font-medium text-md">
            What We Do
          </a>

          {/* SOLUTIONS */}
          <button
            className="w-full flex justify-between items-center text-md font-medium"
            onClick={() => toggleSection("solutions")}
          >
            Intelligent Solutions
            {openSection === "solutions" ? (
              <IconChevronDown stroke={1.5} />
            ) : (
              <IconChevronRight stroke={1.5} />
            )}
          </button>

          {openSection === "solutions" && (
            <div className="ml-4 space-y-3">
              {solutionItems.map((item, i) => (
                <div key={i}>
                  <div
                    className="flex items-center gap-2"
                    onClick={() => handleLinkClick(item)}
                  >
                    <item.Icon
                      size={28}
                      className="text-blue-500 bg-blue-50 p-1 rounded-sm"
                    />
                    <span className="text-slate-900">{item.title}</span>
                  </div>
                  {item.subCategories && (
                    <div className="ml-6 mt-2 space-y-2 text-sm">
                      {item.subCategories.map((sub, si) => (
                        <div key={si} onClick={() => handleLinkClick(sub)}>
                          <IconPointFilled
                            size={14}
                            className="inline mr-1 text-blue-400"
                          />
                          <span className="text-slate-700">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* DELIVERY */}
          <button
            className="w-full flex justify-between items-center text-md font-medium"
            onClick={() => toggleSection("delivery")}
          >
            Strategic Delivery
            {openSection === "delivery" ? (
              <IconChevronDown stroke={1.5} />
            ) : (
              <IconChevronRight stroke={1.5} />
            )}
          </button>

          {openSection === "delivery" && (
            <div className="ml-4 space-y-3">
              {deliveryItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                  onClick={() => handleLinkClick(item)}
                >
                  <item.Icon
                    size={28}
                    className="text-blue-500 bg-blue-50 p-1 rounded-sm"
                  />{" "}
                  <span className="text-slate-900">{item.title}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href="/#contact"
            className="block text-center bg-blue-500 text-white py-3 rounded-md font-semibold text-md"
            onClick={() => setIsSidebarOpen(false)}
          >
            Talk to an Expert
          </a>
        </div>
      </aside>
    </>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import appLogo from "../../assets/alpha-helion-logo.jpeg";
// import {
//   IconBrain,
//   IconBriefcase,
//   IconBuildingCog,
//   IconChartBar,
//   IconChecklist,
//   IconHierarchy,
//   IconNetwork,
//   IconTruckDelivery,
//   IconUsers,
//   IconMenu2,
//   IconX,
//   IconChevronRight,
//   IconChevronDown,
// } from "@tabler/icons-react";

// export default function Navbar({ pathname }) {
//   /* ================= DESKTOP STATES ================= */
//   const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
//   const [isSolutionClicked, setIsSolutionClicked] = useState(false);
//   const deliveryRef = useRef(null);
//   const solutionRef = useRef(null);

//   /* ================= MOBILE STATES ================= */
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [openSection, setOpenSection] = useState(null); // "solutions" | "delivery"

//   /* ================= LOCK BODY SCROLL (MOBILE) ================= */
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isSidebarOpen]);

//   /* ================= DATA ================= */

//   const deliveryItems = [
//     {
//       title: "Portfolio Management",
//       href: "/delivery",
//       hash: "#portfolio-management",
//       Icon: IconBriefcase,
//     },
//     {
//       title: "Program Management",
//       href: "/delivery",
//       hash: "#program-management",
//       Icon: IconNetwork,
//     },
//     {
//       title: "Project Management",
//       href: "/delivery",
//       hash: "#project-management",
//       Icon: IconChecklist,
//     },
//     {
//       title: "PMO Establishment & Optimization",
//       href: "/delivery",
//       hash: "#pmo-establishment",
//       Icon: IconBuildingCog,
//     },
//     {
//       title: "Delivery Models",
//       href: "/delivery",
//       hash: "#delivery-models",
//       Icon: IconTruckDelivery,
//     },
//     {
//       title: "Engagement Models",
//       href: "/delivery",
//       hash: "#engagement-models",
//       Icon: IconUsers,
//     },
//   ];

//   const solutionItems = [
//     {
//       title: "SAP Solutions",
//       href: "/sapsolutions",
//       hash: "#",
//       Icon: IconChartBar,
//       subCategories: [
//         {
//           title: "SAP S/4HANA Private Cloud",
//           href: "/sapsolutions",
//           hash: "#s4hana-private-cloud",
//         },
//         {
//           title: "SAP S/4HANA Public Cloud Services",
//           href: "/sapsolutions",
//           hash: "#s4hana-public-cloud",
//         },
//         {
//           title: "SAP Business Technology Platform (BTP)",
//           href: "/sapsolutions",
//           hash: "#btp",
//         },
//         { title: "SAP Ariba", href: "/sapsolutions", hash: "#ariba" },
//         {
//           title: "SAP SuccessFactors",
//           href: "/sapsolutions",
//           hash: "#successfactors",
//         },
//       ],
//     },
//     {
//       title: "SalesForce",
//       href: "/salesforce",
//       hash: "#",
//       Icon: IconHierarchy,
//     },
//     {
//       title: "Data Science & Analytics",
//       href: "/datascience",
//       hash: "#",
//       Icon: IconBrain,
//     },
//   ];

//   /* ================= DESKTOP CLICK OUTSIDE ================= */
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (deliveryRef.current && !deliveryRef.current.contains(e.target)) {
//         setIsDeliveryClicked(false);
//       }
//       if (solutionRef.current && !solutionRef.current.contains(e.target)) {
//         setIsSolutionClicked(false);
//       }
//     };
//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, []);

//   /* ================= HELPERS ================= */

//   const linkClass = (path) =>
//     pathname === path || pathname.startsWith(path + "/")
//       ? "text-blue-600 font-semibold"
//       : "text-slate-600 hover:text-blue-600 transition";

//   const toggleSection = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//   };

//   const handleLinkClick = (item) => {
//     setIsDeliveryClicked(false);
//     setIsSolutionClicked(false);
//     setIsSidebarOpen(false);
//     setOpenSection(null);

//     const currentPath = window.location.pathname;
//     if (currentPath === item.href) {
//       const el = document.getElementById(item.hash.replace("#", ""));
//       el && el.scrollIntoView({ behavior: "smooth" });
//     } else {
//       window.location.href = item.href + item.hash;
//     }
//   };

//   /* ================= JSX ================= */

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
//         <div className="mx-auto px-4 py-2 flex items-center justify-between md:px-10">
//           {/* LOGO */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src={appLogo?.src}
//               className="h-20 w-20 rounded-md"
//               alt="AlphaHelion Global"
//             />
//             <div className="flex flex-col">
//               <span className="font-bold text-xl md:text-3xl">
//                 AlphaHelion Global
//               </span>
//               <span className="text-xs md:text-sm text-blue-600">
//                 Accelerate | Innovate | Transform
//               </span>
//             </div>
//           </a>

//           {/* ================= DESKTOP NAV ================= */}
//           <nav className="hidden md:flex gap-8 text-lg font-semibold relative">
//             <a href="/" className={linkClass("/")}>
//               What We Do
//             </a>

//             {/* SOLUTIONS */}
//             <div ref={solutionRef} className="relative">
//               <div
//                 className={`${linkClass("/sapsolutions")} flex items-center gap-1 cursor-pointer`}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsSolutionClicked(!isSolutionClicked);
//                   setIsDeliveryClicked(false);
//                 }}
//               >
//                 Intelligent Solutions
//                 <IconChevronDown
//                   size={16}
//                   className={`transition-transform ${isSolutionClicked ? "rotate-180" : ""}`}
//                 />
//               </div>

//               {isSolutionClicked && (
//                 <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1000px] bg-blue-100 rounded-lg shadow-xl p-6 z-50">
//                   <div className="grid grid-cols-3 gap-6">
//                     {solutionItems.map((item, i) => (
//                       <div key={i}>
//                         <div
//                           className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-blue-50"
//                           onClick={() => handleLinkClick(item)}
//                         >
//                           <item.Icon size={18} className="text-blue-400" />
//                           <span className="font-semibold">{item.title}</span>
//                         </div>

//                         {item.subCategories && (
//                           <div className="ml-8 mt-2 space-y-2">
//                             {item.subCategories.map((sub, si) => (
//                               <div
//                                 key={si}
//                                 className="text-sm cursor-pointer hover:text-blue-600"
//                                 onClick={() => handleLinkClick(sub)}
//                               >
//                                 • {sub.title}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* DELIVERY */}
//             <div ref={deliveryRef} className="relative">
//               <div
//                 className={`${linkClass("/delivery")} flex items-center gap-1 cursor-pointer`}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsDeliveryClicked(!isDeliveryClicked);
//                   setIsSolutionClicked(false);
//                 }}
//               >
//                 Strategic Delivery
//                 <IconChevronDown
//                   size={16}
//                   className={`transition-transform ${isDeliveryClicked ? "rotate-180" : ""}`}
//                 />
//               </div>

//               {isDeliveryClicked && (
//                 <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-blue-100 rounded-lg shadow-xl p-6 z-50">
//                   <div className="grid grid-cols-2 gap-3">
//                     {deliveryItems.map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-blue-50"
//                         onClick={() => handleLinkClick(item)}
//                       >
//                         <item.Icon size={18} className="text-blue-400" />
//                         {item.title}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* DESKTOP CTA */}
//           <a
//             href="/#contact"
//             className="hidden md:inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
//           >
//             Talk to an Expert
//           </a>

//           {/* MOBILE HAMBURGER */}
//           <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
//             <IconMenu2 size={28} className="text-blue-600" />
//           </button>
//         </div>
//       </header>

//       {/* ================= MOBILE SIDEBAR ================= */}

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`
//           fixed top-0 right-0 h-full w-full bg-white z-50
//           flex flex-col transition-transform duration-300
//           ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* SIDEBAR HEADER */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <button onClick={() => setIsSidebarOpen(false)}>
//             <IconX size={24} />
//           </button>
//         </div>

//         {/* SIDEBAR SCROLL AREA */}
//         <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-6">
//           <a href="/" className="block font-semibold text-lg">
//             What We Do
//           </a>

//           {/* MOBILE SOLUTIONS */}
//           <button
//             className="w-full flex justify-between items-center text-lg font-semibold"
//             onClick={() => toggleSection("solutions")}
//           >
//             Intelligent Solutions
//             {openSection === "solutions" ? (
//               <IconChevronDown />
//             ) : (
//               <IconChevronRight />
//             )}
//           </button>

//           {openSection === "solutions" && (
//             <div className="ml-4 space-y-3">
//               {solutionItems.map((item, i) => (
//                 <div key={i}>
//                   <div
//                     className="flex items-center gap-2"
//                     onClick={() => handleLinkClick(item)}
//                   >
//                     <item.Icon size={16} /> {item.title}
//                   </div>
//                   {item.subCategories && (
//                     <div className="ml-6 mt-2 space-y-2 text-sm">
//                       {item.subCategories.map((sub, si) => (
//                         <div key={si} onClick={() => handleLinkClick(sub)}>
//                           <IconChevronRight size={14} className="inline mr-1" />
//                           {sub.title}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* MOBILE DELIVERY */}
//           <button
//             className="w-full flex justify-between items-center text-lg font-semibold"
//             onClick={() => toggleSection("delivery")}
//           >
//             Strategic Delivery
//             {openSection === "delivery" ? (
//               <IconChevronDown />
//             ) : (
//               <IconChevronRight />
//             )}
//           </button>

//           {openSection === "delivery" && (
//             <div className="ml-4 space-y-3">
//               {deliveryItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2"
//                   onClick={() => handleLinkClick(item)}
//                 >
//                   <item.Icon size={16} /> {item.title}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* MOBILE CTA */}
//           <a
//             href="/#contact"
//             className="block text-center bg-blue-500 text-white py-4 rounded-lg font-semibold"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             Talk to an Expert
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import appLogo from "../../assets/alpha-helion-logo.jpeg";
// import {
//   IconBrain,
//   IconBriefcase,
//   IconBuildingCog,
//   IconChartBar,
//   IconCheck,
//   IconChecklist,
//   IconHierarchy,
//   IconNetwork,
//   IconRocket,
//   IconTruckDelivery,
//   IconUser,
//   IconUsers,
// } from "@tabler/icons-react";

// export default function Navbar({ pathname }) {
//   const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
//   const [isSolutionClicked, setIsSolutionClicked] = useState(false);
//   const deliveryRef = useRef(null);
//   const solutionRef = useRef(null);

//   const linkClass = (path) =>
//     pathname === path || pathname.startsWith(path + "/")
//       ? "text-blue-600 font-semibold"
//       : "text-slate-600 hover:text-blue-600 transition";

//   // Delivery dropdown items with hash IDs
//   const deliveryItems = [
//     {
//       title: "Portfolio Management",
//       href: "/delivery",
//       hash: "#portfolio-management",
//       Icon: IconBriefcase,
//     },
//     {
//       title: "Program Management",
//       href: "/delivery",
//       hash: "#program-management",
//       Icon: IconNetwork,
//     },
//     {
//       title: "Project Management",
//       href: "/delivery",
//       hash: "#project-management",
//       Icon: IconChecklist,
//     },
//     {
//       title: "PMO Establishment & Optimization",
//       href: "/delivery",
//       hash: "#pmo-establishment",
//       Icon: IconBuildingCog,
//     },
//     {
//       title: "Delivery Models",
//       href: "/delivery",
//       hash: "#delivery-models",
//       Icon: IconTruckDelivery,
//     },
//     {
//       title: "Engagement Models",
//       href: "/delivery",
//       hash: "#engagement-models",
//       Icon: IconUsers,
//     },
//   ];

//   // Solutions dropdown items with subcategories for SAP
//   const solutionItems = [
//     {
//       title: "SAP Solutions",
//       href: "/sapsolutions",
//       hash: "#",
//       Icon: IconChartBar,
//       subCategories: [
//         {
//           title: "SAP S/4HANA Private Cloud",
//           href: "/sapsolutions",
//           hash: "#s4hana-private-cloud",
//         },
//         {
//           title: "SAP S/4HANA Public Cloud Services",
//           href: "/sapsolutions",
//           hash: "#s4hana-public-cloud",
//         },
//         {
//           title: "SAP Business Technology Platform (BTP)",
//           href: "/sapsolutions",
//           hash: "#btp",
//         },
//         {
//           title: "SAP Ariba",
//           href: "/sapsolutions",
//           hash: "#ariba",
//         },
//         {
//           title: "SAP SuccessFactors",
//           href: "/sapsolutions",
//           hash: "#successfactors",
//         },
//       ],
//     },
//     {
//       title: "SalesForce",
//       href: "/salesforce",
//       hash: "#",
//       Icon: IconHierarchy,
//     },
//     {
//       title: "Data Science & Analytics",
//       href: "/datascience",
//       hash: "#",
//       Icon: IconBrain,
//     },
//   ];

//   // Toggle dropdown on click
//   const handleDeliveryClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDeliveryClicked(!isDeliveryClicked);
//     setIsSolutionClicked(false);
//   };
//   const handleSolutionClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsSolutionClicked(!isSolutionClicked);
//     setIsDeliveryClicked(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (deliveryRef.current && !deliveryRef.current.contains(event.target)) {
//         setIsDeliveryClicked(false);
//       }
//     };

//     if (isDeliveryClicked) {
//       document.addEventListener("click", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isDeliveryClicked]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (solutionRef.current && !solutionRef.current.contains(event.target)) {
//         setIsSolutionClicked(false);
//       }
//     };

//     if (isSolutionClicked) {
//       document.addEventListener("click", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isSolutionClicked]);

//   // Handle link click with hash navigation
//   const handleLinkClick = (item) => {
//     setIsDeliveryClicked(false);
//     setIsSolutionClicked(false);

//     // Check if we're already on the target page
//     const currentPath = window.location.pathname;

//     if (currentPath === item.href) {
//       // Already on the page, scroll to section
//       const element = document.getElementById(item.hash.substring(1)); // Remove '#'
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       // Navigate to page with hash
//       window.location.href = item.href + item.hash;
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
//       <div className="mx-auto px-4 py-2 flex items-center justify-between
//       md:px-10
//       ">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-2">
//           <img
//             src={appLogo?.src}
//             className="h-20 w-20 rounded-md"
//             alt="AlphaHelion Global"
//           />
//           <div className="flex flex-col justify-center align-center">
//             <span className="font-bold text-3xl">AlphaHelion Global</span>
//             <span className="text-sm text-blue-600 text-center">Accelerate | Innovate | Transform</span>
//           </div>
//         </a>

//         {/* Menu */}
//         <nav className="hidden md:flex gap-8 text-lg font-semibold relative">
//           <a href="/" className={linkClass("/")}>
//             What We Do
//           </a>

//           <div ref={solutionRef} className="relative">
//             <div
//               className={`${linkClass("/sapsolutions")} flex items-center gap-1 cursor-pointer`}
//               onClick={handleSolutionClick}
//             >
//               Intelligent Solutions
//               <svg
//                 className={`w-4 h-4 transition-transform ${
//                   isSolutionClicked ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//             {isSolutionClicked && (
//               <div
//                 className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1000px] bg-blue-100 rounded-lg shadow-xl border border-gray-200 p-6 z-50"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="grid grid-cols-3 gap-6">
//                   {solutionItems.map((item, index) => {
//                     const Icon = item?.Icon ? item?.Icon : IconCheck;
//                     return (
//                       <div key={index} className="space-y-3">
//                         <div
//                           className="flex items-center gap-3 p-3 rounded-md transition-colors text-slate-700 cursor-pointer hover:bg-blue-50 hover:text-blue-700"
//                           onClick={() => handleLinkClick(item)}
//                         >
//                           <div className="flex p-2 bg-white rounded-md shadow-md">
//                             <Icon size={18} className="text-blue-400" />
//                           </div>
//                           <span className="text-md font-semibold">
//                             {item.title}
//                           </span>
//                         </div>

//                         {/* Subcategories for SAP Solutions */}
//                         {item.subCategories &&
//                           item.title === "SAP Solutions" && (
//                             <div className="pl-10 space-y-2 border-l-2 border-blue-200 ml-2">
//                               {item.subCategories.map((subItem, subIndex) => (
//                                 <div
//                                   key={subIndex}
//                                   className="flex items-center gap-2 p-2 rounded-md transition-colors text-slate-600 cursor-pointer hover:bg-blue-50 hover:text-blue-700"
//                                   onClick={() => handleLinkClick(subItem)}
//                                 >
//                                   <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
//                                   <span className="text-sm">
//                                     {subItem.title}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Delivery with dropdown */}
//           <div ref={deliveryRef} className="relative">
//             <div
//               className={`${linkClass("/delivery")} flex items-center gap-1 cursor-pointer`}
//               onClick={handleDeliveryClick}
//             >
//               Strategic Delivery
//               <svg
//                 className={`w-4 h-4 transition-transform ${
//                   isDeliveryClicked ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>

//             {/* Dropdown Card */}
//             {isDeliveryClicked && (
//               <div
//                 className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-blue-100 rounded-lg shadow-xl border border-gray-200 p-6 z-50"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="grid grid-cols-2 gap-1">
//                   {deliveryItems.map((item, index) => {
//                     const Icon = item?.Icon ? item?.Icon : IconCheck;
//                     return (
//                       <div
//                         key={index}
//                         className="flex align-center gap-3 block p-3 rounded-md transition-colors text-slate-700 cursor-pointer
//                       hover:bg-blue-50 hover:text-blue-700
//                       align-center
//                       "
//                         onClick={() => handleLinkClick(item)}
//                       >
//                         <div className="flex p-2 bg-white rounded-md shadow-md">
//                           <Icon size={18} className="text-blue-400" />
//                         </div>
//                         <span className="text-md">{item.title}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* <a href="/company" className={linkClass("/company")}>
//             Company
//           </a> */}
//         </nav>

//         <a
//           href="/#contact"
//           className="
//             bg-blue-500 text-md text-white py-2 px-4 rounded-lg shadow-md shadow-blue-300 transition cursor-pointer
//             hover:bg-blue-700
//           "
//         >
//           Talk to an Expert
//         </a>
//       </div>
//     </header>
//   );
// }
