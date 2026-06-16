'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Sync isMuted state with video element property
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-[60vh] md:h-[500px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/About%20us%20Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Mute/Unmute control matching the website theme */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 p-3.5 rounded-full bg-[#FAF8F5]/90 hover:bg-[#C9A84C] text-[#2E1912] hover:text-white border border-[#E0DDD8] hover:border-[#C9A84C] shadow-lg hover:shadow-xl hover:shadow-[#C9A84C]/25 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 active:scale-95 group/btn"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
        ) : (
          <Volume2 className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
        )}
      </button>
    </div>
  );
}
