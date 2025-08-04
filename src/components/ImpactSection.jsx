import React from "react";
import { Typography } from "@mui/material";

function ImpactSection({
  backgroundImage = "/public/Frame 18.png",
  stats = [
    { value: "32%", label: "Improvement in Open Rates" },
    { value: "75%", label: "Improvement in Ramp Time" },
    { value: "35%", label: "Improvement in Meetings Booked" },
  ],
}) {
  return (
    <div className="relative bg-[#002228] pb-16">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative">
        {/* Background image */}
        <img
          className="w-full object-cover h-full block mt-32 md:mt-0"
          src={backgroundImage}
          alt="Impact Background"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021826cc] to-[#0f2d3bcc]" />

        {/* Content over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-16">
          <div className="max-w-5xl w-full text-white">
            {/* Heading + description */}
            <div className="mb-4 mt-8 text-start">
              <h2 className="font-medium text-sm md:text-3xl">
                Allocate effort where your reps make an impact.
              </h2>
              <span className="font-medium text-teal-300 italic block text-sm md:text-3xl">
                Let us handle the rest.
              </span>
              <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl">
                Keep your reps “in the air” — out in the field and on the phone
                where they can build relationships.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-5">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <Typography
                    variant="h4"
                    className="font-bold text-teal-400 !text-[.80rem] md:!text-[2.25rem]"
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="text-gray-300 mt-1 !text-[0.65rem] md:!text-[0.85rem]"
                  >
                    {s.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
