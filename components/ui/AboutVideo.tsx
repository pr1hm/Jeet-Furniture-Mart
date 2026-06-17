'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the video URL from the Cloudinary API route
  useEffect(() => {
    let active = true;
    fetch('/api/about-video')
      .then((res) => res.json())
      .then((data) => {
        if (active && data.url) {
          setVideoUrl(data.url);
        }
      })
      .catch((err) => {
        console.error('Error fetching about video URL:', err);
        if (active) {
          setVideoUrl('/assets/About us Video.mp4');
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  // Sync isMuted state with video element property
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] md:h-[500px] bg-stone-950 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Ambient shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 opacity-50 animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-[#C9A84C]/25 rounded-full" />
            <div className="absolute inset-0 border-2 border-t-[#C9A84C] rounded-full animate-spin" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-sans font-bold animate-pulse">
            Loading Experience...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-[60vh] md:h-[500px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        key={videoUrl} // Reset video playback if source changes
      >
        <source src={videoUrl} type="video/mp4" />
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

