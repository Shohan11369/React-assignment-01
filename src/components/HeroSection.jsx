// Herosection.jsx
import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Herosection() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="Img.png"
        alt="Background image"
      />

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start px-6 md:px-16 py-10 bg-black bg-opacity-40">
        <p className="text-[#0FF1F6] mt-6 md:mt-10">AI SDRs (aiDRs)</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2 max-w-sm">
          More leads, less people.
        </h1>
        <p className="text-white text-md md:text-lg mt-2 max-w-lg">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>

        <div className="mt-4">
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#0FF1F6",
              color: "black",
              textTransform: "none",
              fontSize: "16px",
              paddingX: "16px",
              padding: "4px 12px",
              borderRadius: "20px",
              margin: "4px",
              "&:hover": {
                backgroundColor: "#3f41aa",
              },
            }}
          >
            Sign Up for the Beta
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
