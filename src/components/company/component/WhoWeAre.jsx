import React from "react";
import {
  IconCode,
  IconCloud,
  IconChecklist,
  IconWorld,
} from "@tabler/icons-react";
import ContentLayout from "../../ContentLayout";

function WhoWeAre() {
  return (
    <ContentLayout cardBg="bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Who We Are</h2>

          {/* underline */}
          <div className="mt-3 h-1 w-14 bg-blue-600 rounded-full" />

          <div className="mt-6 space-y-5 text-slate-600 max-w-xl leading-relaxed">
            <p>
              AlphaHelion Global LLP is a technology and consulting organization
              focused on delivering enterprise-grade software, SAP Public Cloud
              solutions, and project delivery services.
            </p>

            <p>
              We serve clients across multiple industries with a combination of
              technical capability, SAP partnership alignment, and structured
              delivery governance.
            </p>

            <p>
              Our operations span India and global markets, enabling both
              domestic and international engagement.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl bg-slate-100 border-2 border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
              <IconCode size={22} />
            </div>
            <h4 className="mt-4 font-semibold text-slate-900">
              Technology Services
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Software, cloud, AI, and digital platforms
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-slate-100 border-2 border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 text-white">
              <IconCloud size={22} />
            </div>
            <h4 className="mt-4 font-semibold text-slate-900">SAP Solutions</h4>
            <p className="mt-1 text-sm text-slate-600">
              S/4HANA Public Cloud &amp; SAP BTP
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-slate-100 border-2 border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 text-white">
              <IconChecklist size={22} />
            </div>
            <h4 className="mt-4 font-semibold text-slate-900">
              Project Delivery
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Program, portfolio &amp; PMO services
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-slate-100 border-2 border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
              <IconWorld size={22} />
            </div>
            <h4 className="mt-4 font-semibold text-slate-900">Global Reach</h4>
            <p className="mt-1 text-sm text-slate-600">
              India and international markets
            </p>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default WhoWeAre;
