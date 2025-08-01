// FeaturesSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import OpenWithIcon from "@mui/icons-material/OpenWith";

function FeaturesSection() {
  const features = [
    {
      icon: <AutoFixHighIcon fontSize="large" />,
      title: "You're in Control",
      desc: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      icon: <ScatterPlotIcon fontSize="large" />,
      title: "Infinitely Scalable",
      desc: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      icon: <OpenWithIcon fontSize="large" />,
      title: "Incredibly Flexible",
      desc: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  const FeatureCard = ({ icon, title, desc }) => (
    <Box className="flex flex-col gap-2">
      <Box className="text-cyan-400">{icon}</Box>
      <Typography variant="h6" component="h3" className="font-medium">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-300">
        {desc}
      </Typography>
    </Box>
  );

  return (
    <div className="bg-[#04232e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
