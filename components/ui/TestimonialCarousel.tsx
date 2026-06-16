"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Hammer, Upload } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  category: string;
  location: string;
  dimensions: string;
  woodType: string;
  finish: string;
  blueprintType: string;
  iconName: string;
  dwgNo: string;
}

const PLACEHOLDER_SLIDES: Slide[] = [
  {
    id: 1,
    title: "Royal Handcarved Mandir",
    category: "Spiritual Zone",
    location: "New Jersey, USA",
    dimensions: "60\" W x 24\" D x 78\" H",
    woodType: "Premium Burma Teak Wood",
    finish: "Natural Melamine Satin Finish",
    blueprintType: "Mandir Elevation Plan",
    iconName: "mandir",
    dwgNo: "JFM-2026-M04",
  },
  {
    id: 2,
    title: "Classic Wooden Swing (Jhula)",
    category: "Classical Collection",
    location: "Houston, Texas, USA",
    dimensions: "72\" W x 30\" D x 84\" H",
    woodType: "Premium Burma Teak Wood",
    finish: "Dual-Tone Mahogany & Gold Polish",
    blueprintType: "Swing Support Framing",
    iconName: "swing",
    dwgNo: "JFM-2026-S12",
  },
  {
    id: 3,
    title: "Modern Modular Kitchen Layout",
    category: "Modern Zone",
    location: "Melbourne, Australia",
    dimensions: "14' L-Shape Panel Layout",
    woodType: "Marine Plywood + Veneer",
    finish: "Matte Charcoal & Soft Gold Accent",
    blueprintType: "Sectional Cabinet Elevation",
    iconName: "kitchen",
    dwgNo: "JFM-2026-K08",
  },
  {
    id: 4,
    title: "Artistic CNC Partition Screen",
    category: "Artistic Zone",
    location: "London, United Kingdom",
    dimensions: "48\" W x 3\" D x 96\" H",
    woodType: "High-Density Fiber Board",
    finish: "Champagne Gold Metallic Leafing",
    blueprintType: "CNC Pattern Vector Path",
    iconName: "cnc",
    dwgNo: "JFM-2026-C23",
  },
  {
    id: 5,
    title: "Luxury Maharaja Sofa Set",
    category: "Living Lounge",
    location: "Mumbai, India",
    dimensions: "3-Seater + 2-Seater Suite",
    woodType: "Teak Wood Frame & Premium Upholstery",
    finish: "Antique Gold Foil Detailing",
    blueprintType: "Sofa Section Detail",
    iconName: "sofa",
    dwgNo: "JFM-2026-F05",
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Resize listener to adjust layout responsive styles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PLACEHOLDER_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + PLACEHOLDER_SLIDES.length) % PLACEHOLDER_SLIDES.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [handleNext, isPaused]);

  // SVG Blueprints matching each product category
  const renderBlueprintIcon = (iconName: string) => {
    switch (iconName) {
      case "mandir":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-24 h-24 text-[#C9A84C]/35">
            <path d="M10 90 H90 V85 H10 Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 85 H85 V80 H15 Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="22" y="45" width="6" height="35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="72" y="45" width="6" height="35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 45 C22 25, 78 25, 78 45" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 45 C28 32, 72 32, 72 45" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
            <path d="M35 30 C35 10, 50 5, 50 5 C50 5, 65 10, 65 30 Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="50" y1="5" x2="50" y2="2" strokeWidth="1" />
            <path d="M50 2 L55 3.5 L50 5" strokeWidth="1" fill="currentColor" className="text-[#C9A84C]/10" />
            <circle cx="50" cy="42" r="3" strokeWidth="1" />
            <line x1="50" y1="35" x2="50" y2="39" strokeWidth="1" />
          </svg>
        );
      case "swing":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-24 h-24 text-[#C9A84C]/35">
            <path d="M20 90 L35 15 L38 15 L23 90 Z" strokeWidth="1" />
            <path d="M80 90 L65 15 L62 15 L77 90 Z" strokeWidth="1" />
            <rect x="25" y="12" width="50" height="6" rx="1" strokeWidth="1" />
            <line x1="38" y1="18" x2="38" y2="60" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="62" y1="18" x2="62" y2="60" strokeWidth="1" strokeDasharray="3 2" />
            <rect x="32" y="60" width="36" height="5" rx="1" strokeWidth="1" />
            <path d="M32 60 C32 55, 68 55, 68 60" strokeWidth="1" />
            <line x1="32" y1="63" x2="32" y2="72" strokeWidth="1" />
            <line x1="68" y1="63" x2="68" y2="72" strokeWidth="1" />
            <rect x="30" y="72" width="40" height="3" rx="0.5" strokeWidth="1" />
          </svg>
        );
      case "kitchen":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-24 h-24 text-[#C9A84C]/35">
            <rect x="10" y="10" width="24" height="25" strokeWidth="1" />
            <rect x="34" y="10" width="32" height="25" strokeWidth="1" />
            <rect x="66" y="10" width="24" height="25" strokeWidth="1" />
            <line x1="31" y1="28" x2="31" y2="32" strokeWidth="1" />
            <line x1="37" y1="28" x2="37" y2="32" strokeWidth="1" />
            <line x1="63" y1="28" x2="63" y2="32" strokeWidth="1" />
            <rect x="10" y="50" width="80" height="4" strokeWidth="1" />
            <rect x="10" y="54" width="26" height="36" strokeWidth="1" />
            <rect x="36" y="54" width="28" height="12" strokeWidth="1" />
            <rect x="36" y="66" width="28" height="24" strokeWidth="1" />
            <rect x="64" y="54" width="26" height="36" strokeWidth="1" />
            <line x1="23" y1="58" x2="23" y2="62" strokeWidth="1" />
            <line x1="50" y1="60" x2="50" y2="62" strokeWidth="1" />
            <line x1="50" y1="72" x2="50" y2="76" strokeWidth="1" />
            <line x1="77" y1="58" x2="77" y2="62" strokeWidth="1" />
            <line x1="10" y1="42" x2="90" y2="42" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        );
      case "cnc":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-24 h-24 text-[#C9A84C]/35">
            <rect x="10" y="10" width="80" height="80" rx="2" strokeWidth="1" />
            <rect x="14" y="14" width="72" height="72" rx="1" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="10" y1="10" x2="90" y2="90" strokeWidth="0.5" />
            <line x1="90" y1="10" x2="10" y2="90" strokeWidth="0.5" />
            <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" />
            <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="35" strokeWidth="1" />
            <circle cx="10" cy="10" r="12" strokeWidth="0.5" />
            <circle cx="90" cy="10" r="12" strokeWidth="0.5" />
            <circle cx="10" cy="90" r="12" strokeWidth="0.5" />
            <circle cx="90" cy="90" r="12" strokeWidth="0.5" />
          </svg>
        );
      case "sofa":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-24 h-24 text-[#C9A84C]/35">
            <path d="M15 45 C15 30, 25 20, 50 20 C75 20, 85 30, 85 45 C85 55, 80 60, 80 75 H20 C20 60, 15 55, 15 45 Z" strokeWidth="1" strokeLinecap="round" />
            <path d="M15 55 C10 55, 10 75, 20 75" strokeWidth="1" />
            <path d="M85 55 C90 55, 90 75, 80 75" strokeWidth="1" />
            <rect x="20" y="62" width="60" height="10" rx="2" strokeWidth="1" />
            <circle cx="35" cy="35" r="1" fill="currentColor" />
            <circle cx="50" cy="35" r="1" fill="currentColor" />
            <circle cx="65" cy="35" r="1" fill="currentColor" />
            <circle cx="42" cy="45" r="1" fill="currentColor" />
            <circle cx="58" cy="45" r="1" fill="currentColor" />
            <path d="M25 75 L22 88" strokeWidth="1" strokeLinecap="round" />
            <path d="M75 75 L78 88" strokeWidth="1" strokeLinecap="round" />
            <path d="M20 75 C35 72, 65 72, 80 75" strokeWidth="0.75" strokeDasharray="2 1" />
          </svg>
        );
      default:
        return <Hammer className="w-16 h-16 text-[#C9A84C]/30" strokeWidth={1} />;
    }
  };

  const getSlideStyle = (index: number) => {
    let diff = index - activeIndex;
    const len = PLACEHOLDER_SLIDES.length;

    // Wrap diff to be in [-floor(N/2), floor(N/2)]
    if (diff < -Math.floor(len / 2)) diff += len;
    if (diff > Math.floor(len / 2)) diff -= len;

    const isActive = diff === 0;
    const isLeft = diff === -1;
    const isRight = diff === 1;
    const isVisible = isActive || isLeft || isRight;

    let translateX = "0%";
    if (isLeft) {
      translateX = isMobile ? "-80%" : "-108%";
    } else if (isRight) {
      translateX = isMobile ? "80%" : "108%";
    }

    return {
      transform: `translate3d(calc(-50% + ${translateX}), -50%, 0) scale(${
        isActive ? 1 : 0.82
      })`,
      opacity: isActive ? 1 : isVisible ? 0.45 : 0,
      zIndex: isActive ? 30 : isVisible ? 20 : 10,
      pointerEvents: isActive ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <div className="w-full mb-20">
      {/* Subheader Title */}
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-sans font-bold">
          Visual Showcase
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-display font-light text-[#1C1C1E]">
          Delivered <span className="font-bold text-[#C9A84C] italic">Crafts</span>
        </h2>
        <p className="mt-2 text-xs font-sans text-stone-500 uppercase tracking-widest max-w-lg mx-auto">
          Preview of our customized installations before the full galleries are loaded
        </p>
      </div>

      {/* Carousel Core Area */}
      <div 
        className="relative h-[440px] w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Repeating Draft Grid Background */}
        <div className="absolute inset-0 bg-[#0F0E0D] border-y border-[#C9A84C]/15 overflow-hidden">
          {/* Blueprint style grid lines */}
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#C9A84C_1px,transparent_1px),linear-gradient(to_bottom,#C9A84C_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          {/* Subtle concentric circles in center bg */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5 border-dashed pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#C9A84C]/5 border-dashed pointer-events-none" />
          
          {/* Top Info Banner */}
          <div className="absolute top-4 left-6 hidden md:flex items-center space-x-2 text-[9px] font-mono text-[#C9A84C]/45 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 animate-pulse" />
            <span>Project: Showcase Carousel V1</span>
            <span>|</span>
            <span>CAD Scale: 1:15</span>
          </div>

          <div className="absolute top-4 right-6 hidden md:flex items-center space-x-2 text-[9px] font-mono text-[#C9A84C]/45 uppercase tracking-wider">
            <span>Status: {isPaused ? "Draft Paused on Hover" : "Autoplay Streaming..."}</span>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {PLACEHOLDER_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={slide.id}
                style={getSlideStyle(index)}
                className="absolute top-1/2 left-1/2 w-[88vw] sm:w-[420px] h-[360px] bg-gradient-to-b from-[#1C1A19] to-[#131110] border border-[#C9A84C]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-6 transition-all duration-700 ease-in-out flex flex-col justify-between group overflow-hidden"
              >
                {/* Blueprint Drawing Crosshairs */}
                <span className="absolute top-3 left-3 text-[10px] text-[#C9A84C]/20 font-sans font-light pointer-events-none">+</span>
                <span className="absolute top-3 right-3 text-[10px] text-[#C9A84C]/20 font-sans font-light pointer-events-none">+</span>
                <span className="absolute bottom-3 left-3 text-[10px] text-[#C9A84C]/20 font-sans font-light pointer-events-none">+</span>
                <span className="absolute bottom-3 right-3 text-[10px] text-[#C9A84C]/20 font-sans font-light pointer-events-none">+</span>

                {/* Dashed Layout Markers */}
                <div className="absolute inset-4 border border-dashed border-[#C9A84C]/5 pointer-events-none" />

                {/* Top Bar inside Card */}
                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-[#C9A84C] tracking-widest bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-1.5 py-0.5 rounded">
                      {slide.category}
                    </span>
                    <h3 className="mt-2 text-sm font-display font-bold text-white tracking-wide uppercase">
                      {slide.title}
                    </h3>
                  </div>

                  {/* Pending image alert badge */}
                  <div className="flex items-center space-x-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-[8px] font-mono px-2 py-0.5 rounded-full tracking-wider uppercase backdrop-blur-sm shadow-sm">
                    <Upload className="w-2.5 h-2.5 text-[#C9A84C] animate-bounce" />
                    <span>Upload Pending</span>
                  </div>
                </div>

                {/* Middle Blueprint Art Representation */}
                <div className="flex-1 flex items-center justify-center relative my-4">
                  {/* Subtle dimension annotation line */}
                  <div className="absolute top-1/2 left-4 right-4 border-t border-[#C9A84C]/10 border-dotted pointer-events-none hidden group-hover:block transition-all duration-300">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#131110] px-1 text-[8px] font-mono text-[#C9A84C]/50">
                      {slide.dimensions}
                    </span>
                  </div>

                  {renderBlueprintIcon(slide.iconName)}
                  
                  {/* Blueprint label */}
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-[#C9A84C]/25 tracking-widest uppercase">
                    {slide.blueprintType}
                  </span>
                </div>

                {/* Bottom Card Specifications */}
                <div className="border-t border-[#C9A84C]/15 pt-3 z-10 bg-gradient-to-t from-[#131110] to-transparent">
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-[9px] font-mono">
                    <div className="text-stone-400">
                      <span className="text-stone-500 block text-[7px] uppercase tracking-wider">Primary Wood</span>
                      <span className="truncate block font-semibold text-stone-200">{slide.woodType}</span>
                    </div>
                    <div className="text-stone-400">
                      <span className="text-stone-500 block text-[7px] uppercase tracking-wider">Destination</span>
                      <span className="truncate block font-semibold text-[#C9A84C]">{slide.location}</span>
                    </div>
                    <div className="text-stone-400">
                      <span className="text-stone-500 block text-[7px] uppercase tracking-wider">Surface Polish</span>
                      <span className="truncate block font-semibold text-stone-200">{slide.finish}</span>
                    </div>
                    <div className="text-stone-400">
                      <span className="text-stone-500 block text-[7px] uppercase tracking-wider">Reference Drawing</span>
                      <span className="truncate block font-semibold text-stone-200">{slide.dwgNo}</span>
                    </div>
                  </div>
                </div>

                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-[#C9A84C] text-[#C9A84C] hover:text-black border border-[#C9A84C]/30 hover:border-[#C9A84C] p-2.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg group/btn"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-[#C9A84C] text-[#C9A84C] hover:text-black border border-[#C9A84C]/30 hover:border-[#C9A84C] p-2.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg group/btn"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>

      {/* Navigation Indicators (Dots) */}
      <div className="flex justify-center items-center space-x-3 mt-6">
        {PLACEHOLDER_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              index === activeIndex
                ? "bg-[#C9A84C] w-8"
                : "bg-stone-300 hover:bg-[#C9A84C]/50 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
