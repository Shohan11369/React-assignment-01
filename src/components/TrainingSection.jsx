// TrainingSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function TrainingSection() {
  const benefits = [
    { text: "Quick to ramp" },
    { text: "Easy to optimize" },
    { text: "Quick to scale up" },
    { text: "Works with all your existing tools" },
  ];

  const BenefitItem = ({ text }) => (
    <div className="flex items-center gap-2 text-sm md:text-base">
      <CheckCircleOutlineIcon
        fontSize="small"
        className="text-cyan-400 flex-shrink-0 mt-[2px]"
      />
      <span className="text-gray-300">{text}</span>
    </div>
  );

  return (
    <>
      <div className="relative bg-[#002228] pb-16">
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative">
          {/* Background image */}
          <img
            className="w-full object-cover h-full block mt-32 md:mt-0"
            src="Frame 17.png"
            alt="Frame"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021826cc] to-[#0f2d3bcc]" />

          {/* Content on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-16">
            <div className="max-w-3xl text-center">
              {/* Heading */}
              <div className="mb-4 text-start">
                <h2 className="font-medium text-white text-base md:text-3xl">
                  Train your aiDR on your...
                </h2>
                <span className="font-medium text-cyan-400 italic block text-base md:text-3xl">
                  prefered email stl
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 max-w-xl text-sm md:text-base text-start">
                You're in control. Train your aiDR on elements of your Marketing
                strategy.
              </p>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mr-6">
                {benefits.map((b, i) => (
                  <BenefitItem key={i} text={b.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingSection;
