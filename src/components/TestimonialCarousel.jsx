import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "He is Big Boss in this company",
      name: "John Doe",
      title: "Chief Strategy Officer @ Company",
    },
    {
      quote: "He is HR this Company,Very intelligence person",
      name: "Jane Smith",
      title: "Product Lead @ Startup",
    },
    {
      quote: "He is the director of this company",
      name: "Ali Rahman",
      title: "UX Designer @ Agency",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const autoRef = useRef();

  useEffect(() => {
    clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearTimeout(autoRef.current);
  }, [current, length]);

  const prev = () => {
    clearTimeout(autoRef.current);
    setCurrent((prev) => (prev - 1 + length) % length);
  };
  const next = () => {
    clearTimeout(autoRef.current);
    setCurrent((prev) => (prev + 1) % length);
  };
  return (
    <section className="w-full flex flex-col items-center justify-center relative bg-[#002228] text-white py-20 px-4">
      <div className="relative max-w-3xl w-full flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4 w-[50px] h-[50px] rounded-full bg-[rgba(48,199,255,0.1)]">
          <Typography
            variant="h3"
            component="div"
            sx={{ color: "#30C7FF", fontWeight: 600, lineHeight: 1 }}
          >
            “
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
