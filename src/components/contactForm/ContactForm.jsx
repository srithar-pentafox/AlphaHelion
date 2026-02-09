import React, { useState } from "react";
import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";

/* =========================
   Styles
========================= */

const inputsStyle = `w-full rounded-md border border-slate-200 p-2
  focus:outline-none focus:ring-1 focus:ring-blue-400
  placeholder:text-slate-300`;

const labelStyle = "block text-xs font-semibold text-slate-400 mb-2";
const padding = "p-5 md:p-9";

/* =========================
   Component
========================= */

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  /* =========================
     Validation (optional)
  ========================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message || form.message.trim().length < 5) {
      newErrors.message = "Please enter your requirement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     Handlers
  ========================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // enable later if needed
    // if (!validate()) return;

    setSubmitting(true);

    /* =========================
       Lambda-ready payload
    ========================= */
    const payload = {
      name: form.name,
      email: form.email,
      company: form.company,
      message: form.message,
      source: "contact_form",
      timestamp: new Date(),
    };

    /* 🔥 LOG ON SUBMIT */
    console.log("✅ Contact Form Submitted");
    console.log("Payload →", payload);

    /* simulate submit */
    setTimeout(() => {
      setSubmitting(false);
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 500);
  };

  /* =========================
     JSX
  ========================= */
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] rounded-3xl shadow-xl bg-white overflow-hidden">
        {/* LEFT PANEL */}
        <div
          className={`bg-blue-500 text-white flex flex-col justify-between ${padding}`}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold leading-tight">
              Build, Transform and
              <br />
              Deliver with Confidence
            </h2>

            <p className="text-blue-100 max-w-sm">
              Ready to modernize your enterprise core? Our experts are standing
              by to map your roadmap to the cloud.
            </p>
          </div>

          <div className="space-y-4 mt-12 text-blue-100">
            <div className="flex items-center gap-3">
              <IconMailFilled size={20} />
              <span>info@alphahelion.in</span>
            </div>

            <div className="flex items-center gap-3">
              <IconMapPinFilled size={20} />
              <span>AlphaHelion, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className={`${padding} bg-white`}>
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            action="#"
            method="post"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>FULL NAME</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputsStyle}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>EMAIL ADDRESS</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={inputsStyle}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className={labelStyle}>COMPANY</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enterprise Name"
                className={inputsStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>REQUIREMENT</label>
              <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`${inputsStyle} resize-none`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`
                w-full mt-6 bg-blue-500 text-white font-semibold py-4 rounded-xl
                shadow-xl transition-colors
                ${submitting ? "opacity-60" : "hover:bg-blue-600"}
              `}
            >
              {submitting ? "Submitting..." : "Start a Conversation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

// import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
// import React from "react";

// const inputsStyle = `w-full rounded-md border border-slate-200 p-2
//                       focus:outline-none focus:ring-1 focus:ring-blue-400
//                       placeholder:text-slate-300
//                       `;

// const labelStyle = "block text-xs font-semibold text-slate-400 mb-2";
// const padding = "p-5 md:p-9"

// function ContactForm() {

//   return (
//     <div className="mx-auto max-w-6xl">
//       <div
//         className="
//             grid grid-cols-1
//             md:grid-cols-[2fr_3fr]
//             rounded-3xl overflow-hidden
//             shadow-xl bg-white
//           "
//       >
//         {/* LEFT PANEL (40%) */}
//         <div
//           className={`
//         bg-blue-500 text-white flex flex-col justify-between ${padding}
//         `}
//         >
//           <div className="space-y-6">
//             <h2 className="text-2xl font-semibold leading-tight">
//               Build, Transform and
//               Deliver with Confidence
//             </h2>

//             <p className="text-blue-100 max-w-sm">
//               Ready to modernize your enterprise core? Our experts are standing
//               by to map your roadmap to the cloud.
//             </p>
//           </div>

//           <div className="space-y-4 mt-15">
//             <div className="flex items-center gap-3 text-blue-100">
//               <IconMailFilled size={20} />
//               <span>info@alphahelion.com</span>
//             </div>

//             <div className="flex items-center gap-3 text-blue-100">
//               <IconMapPinFilled size={20} />
//               <span>AlphaHelion, Tamil Nadu, India</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL (60%) */}
//         <div className={`${padding} bg-white`}>
//           <form className="space-y-3">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className={labelStyle}>FULL NAME</label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className={inputsStyle}
//                 />
//               </div>

//               <div>
//                 <label className={labelStyle}>EMAIL ADDRESS</label>
//                 <input
//                   type="email"
//                   placeholder="john@company.com"
//                   className={inputsStyle}
//                 />
//               </div>
//             </div>

//             <div>
//               <label className={labelStyle}>COMPANY</label>
//               <input
//                 type="text"
//                 placeholder="Enterprise Name"
//                 className={inputsStyle}
//               />
//             </div>

//             <div>
//               <label className={labelStyle}>REQUIREMENT</label>
//               <textarea
//                 rows="3"
//                 placeholder="Tell us about your project..."
//                 className={`${inputsStyle} resize-none`}
//               />
//             </div>

//             <button
//               type="submit"
//               className="
//                   w-full mt-6 bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors shadow-xl
//                   hover:bg-blue-600 hover:cursor-pointer
//                 "
//             >
//               Start a Conversation
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
