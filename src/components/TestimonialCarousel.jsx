import React from "react";
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
    <>
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
}

export default TestimonialCarousel;
