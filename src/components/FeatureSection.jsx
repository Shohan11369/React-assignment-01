// FeaturesSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import OpenWithIcon from "@mui/icons-material/OpenWith";

function FeaturesSection() {
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
