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
        className="text-cyan-400 flex-shrink-0"
      />
      <Typography variant="body2" className="text-gray-300">
        {text}
      </Typography>
    </div>
  );

  return (
    <div className="relative bg-[#002228] pb-16">
      {/* Image card flush at top, no extra top padding */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden relative">
        {/* Image */}
        <img
          src="Frame 17.png"
          alt="background"
          className="w-full object-cover h-full block"
        />

        {/* Overlay dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021826cc] to-[#0f2d3bcc]" />

        {/* Content on top */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 py-16">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Typography
                variant="h4"
                component="h2"
                className="font-medium text-white"
              >
                Train your aiDR on your...
              </Typography>
              <Typography
                variant="h4"
                component="span"
                className="font-medium text-cyan-400 italic block"
              >
                prefered email stl
              </Typography>
            </div>
            <Typography variant="body2" className="text-gray-300 mb-6 max-w-xl">
              You're in control. Train your aiDR on elements of your Marketing
              strategy.
            </Typography>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <BenefitItem key={i} text={b.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
