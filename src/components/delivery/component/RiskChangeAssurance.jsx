import React from "react";
import {
  IconAlertTriangle,
  IconShieldCheck,
  IconRefresh,
  IconCheck,
} from "@tabler/icons-react";
import ContentLayout from "../../ContentLayout";

function RiskChangeAssurance() {
  return (
    <ContentLayout cardBg="bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            Risk, Change & Assurance
          </h2>

          <p className="mt-6 max-w-xl text-slate-600">
            Proactive risk management, governance oversight, and project
            stabilization when it matters most.
          </p>

          {/* Feature list */}
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <IconAlertTriangle className="text-red-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Risk & Dependency Management
                </h4>
                <p className="text-slate-400">
                  Identify, track, and mitigate program risks before they
                  escalate.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <IconShieldCheck className="text-blue-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Governance & Escalation
                </h4>
                <p className="text-slate-400">
                  Clear decision frameworks and executive visibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                <IconRefresh className="text-orange-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Project Recovery & Stabilization
                </h4>
                <p className="text-slate-400">
                  Rapid intervention to bring troubled projects back on track.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl bg-slate-800 p-10 text-white shadow-xl">
          <h3 className="text-xl font-semibold">Capability Development</h3>

          <p className="mt-3 text-slate-300 max-w-md">
            Build internal delivery excellence through structured enablement.
          </p>

          {/* Highlighted checklist */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
              <IconCheck size={18} className="text-blue-400" />
              <span>PMO design</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 text-slate-400">
              <IconCheck size={18} />
              <span>Governance frameworks</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 text-slate-400">
              <IconCheck size={18} />
              <span>Transparency &amp; control</span>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default RiskChangeAssurance;
