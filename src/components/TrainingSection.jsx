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
    <>
      <div></div>
    </>
  );
}

export default TrainingSection;
