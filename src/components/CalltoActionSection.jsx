import React from "react";
import { Button, Typography } from "@mui/material";

function CallToActionSection() {
  return (
    <section className="bg-[#002228] py-20 px-6 text-center text-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        {/* Top Label */}
        <Typography
          variant="caption"
          className="uppercase tracking-wider text-cyan-400"
        >
          Get Started
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h4"
          component="h2"
          className="font-semibold"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
          }}
        >
          Embrace the new era of outbound.
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body2"
          className="text-gray-400"
          sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, maxWidth: "80%" }}
        >
          Walks lets you train, activate, and optimize aiDRs.
          <br />
          Take your outbound to new levels of performance and efficiency.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          className="!bg-cyan-400 !text-black !rounded-full !mt-4 px-6 py-2 normal-case text-sm hover:!bg-cyan-300 transition-all"
        >
          Sign Up for the Beta
        </Button>
      </div>
    </section>
  );
}

export default CallToActionSection;
