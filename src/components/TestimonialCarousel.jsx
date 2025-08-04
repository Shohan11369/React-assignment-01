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
      <div className="absolute inset-0 pointer-events-none "></div>
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
        <Typography
          variant="body1"
          className="font-light leading-relaxed mb-4 px-2 sm:px-4 text-base md:text-lg max-w-[800px]"
          sx={{ fontWeight: 300, lineHeight: 1.5 }}
        >
          {testimonials[current].quote}
        </Typography>

        {/* name & title */}
        <div className="mt-2">
          <Typography
            variant="subtitle1"
            className="tracking-wide text-sm"
            sx={{ fontWeight: 600, color: "#30C7FF" }}
          >
            {testimonials[current].name}
          </Typography>
          <Typography
            variant="caption"
            className="block mt-1 text-[0.65rem]"
            sx={{ fontWeight: 400, opacity: 0.8 }}
          >
            {testimonials[current].title}
          </Typography>
        </div>
      </div>

      {/* dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              clearTimeout(autoRef.current);
              setCurrent(idx);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-transform duration-300 ${
              idx === current ? "scale-110 bg-[#30C7FF]" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-6">
        <IconButton
          aria-label="prev"
          onClick={prev}
          size="small"
          className="mb-4 md:mb-0 md:ml-[-8px]"
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
            boxShadow: 1,
            transition: "all .2s",
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <div className="flex-1" />

        <IconButton
          aria-label="next"
          onClick={next}
          size="small"
          className="md:mr-[-8px]"
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
            boxShadow: 1,
            transition: "all .2s",
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
