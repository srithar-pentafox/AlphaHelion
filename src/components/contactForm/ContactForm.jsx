import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
import React from "react";

const inputsStyle = `w-full rounded-md border border-slate-200 p-2
                      focus:outline-none focus:ring-1 focus:ring-blue-400
                      placeholder:text-slate-300
                      `;

const labelStyle = "block text-xs font-semibold text-slate-400 mb-2";
const padding = "p-5 md:p-9"

function ContactForm() {
  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="
            grid grid-cols-1
            md:grid-cols-[2fr_3fr]
            rounded-3xl overflow-hidden
            shadow-xl bg-white
          "
      >
        {/* LEFT PANEL (40%) */}
        <div
          className={`
        bg-blue-500 text-white flex flex-col justify-between ${padding}
        `}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold leading-tight">
              Build, Transform, and
              <br />
              Deliver with Confidence
            </h2>

            <p className="text-blue-100 max-w-sm">
              Ready to modernize your enterprise core? Our experts are standing
              by to map your roadmap to the cloud.
            </p>
          </div>

          <div className="space-y-4 mt-15">
            <div className="flex items-center gap-3 text-blue-100">
              <IconMailFilled size={20} />
              <span>info@alphahelion.com</span>
            </div>

            <div className="flex items-center gap-3 text-blue-100">
              <IconMapPinFilled size={20} />
              <span>AlphaHelion, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (60%) */}
        <div className={`${padding} bg-white`}>
          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>FULL NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={inputsStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className={inputsStyle}
                />
              </div>
            </div>

            <div>
              <label className={labelStyle}>COMPANY</label>
              <input
                type="text"
                placeholder="Enterprise Name"
                className={inputsStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>REQUIREMENT</label>
              <textarea
                rows="3"
                placeholder="Tell us about your project..."
                className={`${inputsStyle} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="
                  w-full mt-6 bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors shadow-xl
                  hover:bg-blue-600 hover:cursor-pointer
                "
            >
              Start a Conversation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;