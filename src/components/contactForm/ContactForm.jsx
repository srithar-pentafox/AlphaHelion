import React, { useState } from "react";
import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
import { URLs } from "../../services/requestURL";

/* =========================
   Styles
========================= */

const inputsStyle = `w-full rounded-md border p-2
  focus:outline-none focus:ring-1 focus:ring-blue-400
  placeholder:text-slate-300`;

const labelStyle = "block text-xs font-semibold text-slate-400 mb-2";
const padding = "p-5 md:p-9";

/* =========================
   Helpers
========================= */

const getInputClass = (hasError) =>
  `${inputsStyle} ${
    hasError
      ? "border-red-500 focus:ring-red-400"
      : "border-slate-200 focus:ring-blue-400"
  }`;


/* =========================
   Initial State
========================= */

const INITIAL_FORM = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  /* =========================
     Validation
  ========================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.mobile || !/^[6-9][0-9]{9}$/.test(form.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!form.message.trim() || form.message.trim().length < 5) {
      newErrors.message = "Please enter your requirement";
    }

    if (!form.company.trim() || form.company.trim().length < 3) {
      newErrors.company = "Please enter your company name";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     Handlers
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear field error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({
      ...prev,
      mobile: value,
    }));

    setErrors((prev) => ({ ...prev, mobile: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch(URLs.ContactFormApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": URLs.ContactFormApiKey,
        },
        body: JSON.stringify({
          fullname: form.name,
          phone: form.mobile,
          email: form.email,
          company: form.company,
          requirement: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      await response.json();

      // ✅ Clear form & errors
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
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
              <span>info@alphahelion.ai</span>
            </div>

            <div className="flex items-center gap-3">
              <IconMapPinFilled size={20} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className={`${padding} bg-white`}>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>FULL NAME</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={getInputClass(errors.name)}
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
                  className={getInputClass(errors.email)}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>MOBILE</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleMobileChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className={getInputClass(errors.mobile)}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>COMPANY</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Enterprise Name"
                  className={getInputClass(errors.company)}
                />
                {errors.company && (
                  <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            <div>
              <label className={labelStyle}>REQUIREMENT</label>
              <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`${getInputClass(errors.message)} resize-none`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full mt-6 bg-blue-500 text-white font-semibold py-4 rounded-xl
                shadow-xl transition-colors
                ${isLoading ? "opacity-60" : "hover:bg-blue-600"}
              `}
            >
              {isLoading ? "Submitting..." : "Start a Conversation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

// import React, { useEffect, useState } from "react";
// import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
// import { URLs } from "../../services/requestURL";

// /* =========================
//    Styles
// ========================= */

// const inputsStyle = `w-full rounded-md border border-slate-200 p-2
//   focus:outline-none focus:ring-1 focus:ring-blue-400
//   placeholder:text-slate-300`;

// const labelStyle = "block text-xs font-semibold text-slate-400 mb-2";
// const padding = "p-5 md:p-9";

// const INITIAL_FORM = {
//   name: null,
//   email: null,
//   mobile: null,
//   company: null,
//   message: null,
// };

// function ContactForm() {
//   const [form, setForm] = useState(INITIAL_FORM);

//   const [errors, setErrors] = useState({});
//   // const [submitting, setSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   /* =========================
//      Validation (optional)
//   ========================= */
//   const validate = () => {
//     const newErrors = {};

//     if (!form?.name || form?.name.trim().length < 2) {
//       newErrors.name = "Please Enter a valid name";
//     }

//     if (!/^\S+@\S+\.\S+$/.test(form?.email)) {
//       newErrors.email = "Please Enter a valid email address";
//     }

//     if (!form.message || form.message.trim().length < 5) {
//       newErrors.message = "Please Enter your requirement";
//     }
//     if (!form.mobile || !/^[6-9][0-9]{9}$/.test(form.mobile)) {
//       newErrors.mobile = "Please Enter a Valid Mobile Number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   useEffect(() => {
//     console.log(form);
//   }, [form]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": URLs?.ContactFormApiKey,
//       },
//       body: JSON.stringify({
//         fullname: form.name,
//         phone: form?.mobile,
//         email: form?.email,
//         company: form?.company,
//         requirement: form?.message,
//       }),
//     };

//     setIsLoading(true);

//     console.log(`${URLs?.ContactFormApiUrl}`, requestOptions);

//     fetch(`${URLs?.ContactFormApiUrl}`, requestOptions)
//       .then((res) => {
//         console.log("row responseeee", res);

//         res.json();
//       })
//       .then((data) => {
//         console.log("response ------1 ", data);

//         setForm(INITIAL_FORM);
//       })
//       .finally(() => {
//         console.log("finally stattta");

//         setIsLoading(false);
//       });

//     /* simulate submit */
//     // setTimeout(() => {
//     //   setSubmitting(false);
//     //   setForm({
//     //     name: "",
//     //     email: "",
//     //     company: "",
//     //     message: "",
//     //   });
//     // }, 500);
//   };

//   /* =========================
//      JSX
//   ========================= */
//   return (
//     <div className="mx-auto max-w-6xl">
//       <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] rounded-3xl shadow-xl bg-white overflow-hidden">
//         {/* LEFT PANEL */}
//         <div
//           className={`bg-blue-500 text-white flex flex-col justify-between ${padding}`}
//         >
//           <div className="space-y-6">
//             <h2 className="text-2xl font-semibold leading-tight">
//               Build, Transform and
//               <br />
//               Deliver with Confidence
//             </h2>

//             <p className="text-blue-100 max-w-sm">
//               Ready to modernize your enterprise core? Our experts are standing
//               by to map your roadmap to the cloud.
//             </p>
//           </div>

//           <div className="space-y-4 mt-12 text-blue-100">
//             <div className="flex items-center gap-3">
//               <IconMailFilled size={20} />
//               <span>info@alphahelion.ai</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <IconMapPinFilled size={20} />
//               <span>Chennai, Tamil Nadu, India</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className={`${padding} bg-white`}>
//           <form
//             className="space-y-4"
//             onSubmit={handleSubmit}
//             action="#"
//             method="post"
//           >
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className={labelStyle}>FULL NAME</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className={`${inputsStyle}`}
//                 />
//                 {errors.name && (
//                   <p className="text-xs text-red-500 mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className={labelStyle}>EMAIL ADDRESS</label>
//                 <input
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="john@company.com"
//                   className={inputsStyle}
//                 />
//                 {errors.email && (
//                   <p className="text-xs text-red-500 mt-1">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label className={labelStyle}>MOBILE</label>
//                 <input
//                   name="mobile"
//                   value={form?.mobile}
//                   onChange={handleChange}
//                   placeholder="9876543210"
//                   className={inputsStyle}
//                 />
//                 {errors?.mobile && (
//                   <p className="text-xs text-red-500 mt-1">{errors?.mobile}</p>
//                 )}
//               </div>
//               <div>
//                 <label className={labelStyle}>COMPANY</label>
//                 <input
//                   name="company"
//                   value={form?.company}
//                   onChange={handleChange}
//                   placeholder="Enterprise Name"
//                   className={inputsStyle}
//                 />
//               </div>
//             </div>

//             <div>
//               <label className={labelStyle}>REQUIREMENT</label>
//               <textarea
//                 name="message"
//                 rows="3"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Tell us about your project..."
//                 className={`${inputsStyle} resize-none`}
//               />
//               {errors.message && (
//                 <p className="text-xs text-red-500 mt-1">{errors.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`
//                 w-full mt-6 bg-blue-500 text-white font-semibold py-4 rounded-xl
//                 shadow-xl transition-colors
//                 ${isLoading ? "opacity-60" : "hover:bg-blue-600"}
//               `}
//             >
//               {isLoading ? "Submitting..." : "Start a Conversation"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
