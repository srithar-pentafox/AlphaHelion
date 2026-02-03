import React from "react";
import ContentLayout from "../../ContentLayout";
import Title from "../../Title";
import SimpleCard from "../../SimpleCard";
import {
  IconBolt,
  IconArrowsShuffle,
  IconPointFilled,
  IconRipple,
} from "@tabler/icons-react";

// const 

// export const data = [
//   {
//     title: "Agile",
//     iconConfig: {
//       Icon: IconRecycle,
//       singleColor: "green",
//     },
//     content:
//       "Iterative delivery with continuous feedback and rapid value realization.",
//   },
//   {
//     title: "Waterfall",
//     iconConfig: {
//       Icon: IconLayoutList,
//       singleColor: "blue",
//     },
//     content:
//       "Structured, phase-gated approach for complex, regulated environments.",
//   },
//   {
//     title: "Hybrid",
//     iconConfig: {
//       Icon: IconLayoutList,
//       singleColor: "violet",
//     },
//     content: "Best of both worlds—adaptive planning with governance rigor.",
//   },
// ];

/* ---------- Sub Components ---------- */

function ModelItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>{icon}</div>
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="h-6 w-[2px] bg-blue-400" />;
}

function DeliveryModels() {
  return (
    <ContentLayout>
      <div className="mx-auto max-w-5xl text-center bg-blue-100 p-10" id="delivery-models">
        <Title title=" Delivery Models" />
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-10">
            <ModelItem
              icon={<IconBolt size={45} stroke={1.5} className="text-blue-400" />}
              label="Agile"
            />

            <Divider />
            <ModelItem
              icon={<IconArrowsShuffle size={45} stroke={1.5} className="text-blue-400" />}
              label="Hybrid"
            />

            <Divider />

            <ModelItem
              icon={<IconRipple size={45} stroke={1.5} className="text-blue-400" />}
              label="Waterfall"
            />
          </div>

          <section className="flex flex-col gap-2 mt-10">
            {[
              "Capability Development",
              "Strengthen internal delivery capability through training, coaching, and leadership enablement.",
              "Supporting speed, compliance, and predictability based on organizational maturity and business needs.",
            ]?.map((item, index) => (
              <div className="flex gap-1 align-start">
                <div className="p-1 rounded-xl">
                  <IconPointFilled
                    className="text-blue-400"
                    size={20}
                    stroke={1.5}
                  />
                </div>
                <p key={index} className="text-slate-700 font-normal">
                  {item}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </ContentLayout>
  );
}

export default DeliveryModels;

// import React from "react";
// import ContentLayout from "../../ContentLayout";
// import Title from "../../Title";
// import SimpleCard from "../../SimpleCard";
// import { IconRecycle, IconLayoutList } from "@tabler/icons-react";

// export const data = [
//   {
//     title: "Agile",
//     iconConfig: {
//       Icon: IconRecycle,
//       singleColor: "green",

//     },
//     content:
//       "Iterative delivery with continuous feedback and rapid value realization.",
//   },
//   {
//     title: "Waterfall",
//     iconConfig: {
//       Icon: IconLayoutList,
//       singleColor: "blue",
//     },
//     content:
//       "Structured, phase-gated approach for complex, regulated environments.",
//   },
//   {
//     title: "Hybrid",
//     iconConfig: {
//       Icon: IconLayoutList,
//       singleColor: "violet",

//     },
//     content: "Best of both worlds—adaptive planning with governance rigor.",
//   },
// ];

// function DeliveryModels() {
//   return (
//     <ContentLayout>
//       <section className="flex flex-col gap-8">
//         <Title title="Delivery Models" />
//         <section
//           className="
//         grid grid-cols-1
//         md:grid-cols-2 gap-8
//         lg:grid-cols-3 gap-10
//         "
//         >
//           {data?.map((item, index) => (
//             <SimpleCard {...item} key={index} />
//           ))}
//         </section>
//       </section>
//     </ContentLayout>
//   );
// }

// export default DeliveryModels;
