"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "@/src/components/UI/Button";
import { useToggleLenis } from "@/src/logic/useToggleLenis";

interface Clinic {
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  mapUrl: string;
  distance?: number;
}

const CLINICS_DB: Clinic[] = [
  {
    name: "Epitome Neuro-Care Mumbai",
    lat: 19.0760,
    lng: 72.8777,
    address: "Epitome Tower, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    phone: "+91 22 5550 0192",
    mapUrl: "https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai"
  },
  {
    name: "Epitome Neuro-Hospital Delhi",
    lat: 28.7041,
    lng: 77.1025,
    address: "Sector 12, Dwarka, New Delhi, Delhi 110075",
    phone: "+91 11 4455 0108",
    mapUrl: "https://maps.google.com/?q=Dwarka+New+Delhi"
  },
  {
    name: "Epitome Medical Hub Bangalore",
    lat: 12.9716,
    lng: 77.5946,
    address: "7th Block, Koramangala, Bengaluru, Karnataka 560095",
    phone: "+91 80 6677 0211",
    mapUrl: "https://maps.google.com/?q=Koramangala+Bangalore"
  },
  {
    name: "Epitome South Care Chennai",
    lat: 13.0827,
    lng: 80.2707,
    address: "Greams Road, Thousand Lights, Chennai, Tamil Nadu 600006",
    phone: "+91 44 3322 0184",
    mapUrl: "https://maps.google.com/?q=Greams+Road+Chennai"
  },
  {
    name: "Epitome Epilepsy Hub Hyderabad",
    lat: 17.3850,
    lng: 78.4867,
    address: "Gachibowli, Hyderabad, Telangana 500032",
    phone: "+91 40 7788 0143",
    mapUrl: "https://maps.google.com/?q=Gachibowli+Hyderabad"
  },
  {
    name: "Epitome Clinic Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    address: "Salt Lake Sector V, Kolkata, West Bengal 700091",
    phone: "+91 33 2288 0156",
    mapUrl: "https://maps.google.com/?q=Salt+Lake+Sector+V+Kolkata"
  },
  {
    name: "Epitome Global Clinic London",
    lat: 51.5074,
    lng: -0.1278,
    address: "Harley Street, Marylebone, London W1G 9QD, United Kingdom",
    phone: "+44 20 7946 0192",
    mapUrl: "https://maps.google.com/?q=Harley+Street+London"
  },
  {
    name: "Epitome Neuro-Center New York",
    lat: 40.7128,
    lng: -74.0060,
    address: "Park Avenue, Manhattan, New York, NY 10021, USA",
    phone: "+1 212 555 0199",
    mapUrl: "https://maps.google.com/?q=Park+Avenue+New+York"
  }
];

// Haversine formula to compute great-circle distance
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

interface PresetCity {
  name: string;
  lat: number;
  lng: number;
}

const PRESET_CITIES: PresetCity[] = [
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Delhi", lat: 28.7041, lng: 77.1025 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "New York", lat: 40.7128, lng: -74.0060 }
];

const EpitomeNetwork: React.FC = () => {
  const ring1Ref = useRef<SVGGElement>(null);
  const ring2Ref = useRef<SVGGElement>(null);
  const ring3Ref = useRef<SVGGElement>(null);
  const ring4Ref = useRef<SVGGElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [clinics, setClinics] = useState<Clinic[]>(CLINICS_DB);
  const [refCoords, setRefCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { lenisStart, lenisStop } = useToggleLenis();

  useEffect(() => {
    if (isModalOpen) {
      lenisStop();
      document.body.style.overflow = "hidden";
    } else {
      lenisStart();
      document.body.style.overflow = "";
    }
    return () => {
      lenisStart();
      document.body.style.overflow = "";
    };
  }, [isModalOpen, lenisStart, lenisStop]);

  useEffect(() => {
    // Staggered orbital continuous infinite rotation of concentric background border circles
    const anim1 = gsap.to(ring1Ref.current, {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: "linear",
      svgOrigin: "250 250"
    });

    const anim2 = gsap.to(ring2Ref.current, {
      rotation: -360,
      duration: 75,
      repeat: -1,
      ease: "linear",
      svgOrigin: "250 250"
    });

    const anim3 = gsap.to(ring3Ref.current, {
      rotation: 360,
      duration: 100,
      repeat: -1,
      ease: "linear",
      svgOrigin: "250 250"
    });

    const anim4 = gsap.to(ring4Ref.current, {
      rotation: -360,
      duration: 130,
      repeat: -1,
      ease: "linear",
      svgOrigin: "250 250"
    });

    return () => {
      anim1.kill();
      anim2.kill();
      anim3.kill();
      anim4.kill();
    };
  }, []);
  const handleFindLocation = () => {
    setIsModalOpen(true);
    setLoading(true);
    setErrorMsg(null);
    setSelectedCity(null);

    if (!navigator.geolocation) {
      setErrorMsg("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRefCoords({ lat: latitude, lng: longitude });
        setLoading(false);
      },
      (error) => {
        let msg = "Could not access location. Select a city below to calculate distances.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "Location permission denied. Select a city below to calculate distances.";
        }
        setErrorMsg(msg);
        setLoading(false);
      },
      { timeout: 8000 }
    );
  };

  const handleCitySelect = (city: PresetCity) => {
    setSelectedCity(city.name);
    setRefCoords({ lat: city.lat, lng: city.lng });
    setErrorMsg(null);
  };

  const handleUseCurrentLocation = () => {
    setLoading(true);
    setErrorMsg(null);
    setSelectedCity(null);

    if (!navigator.geolocation) {
      setErrorMsg("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRefCoords({ lat: latitude, lng: longitude });
        setLoading(false);
      },
      (error) => {
        let msg = "Could not access location. Please select a city below.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "Location permission denied. Please select a city below.";
        }
        setErrorMsg(msg);
        setLoading(false);
      },
      { timeout: 8000 }
    );
  };

  const displayedClinics = clinics
    .map((clinic) => {
      if (refCoords) {
        return {
          ...clinic,
          distance: calculateDistance(refCoords.lat, refCoords.lng, clinic.lat, clinic.lng)
        };
      }
      return {
        ...clinic,
        distance: undefined
      };
    })
    .sort((a, b) => {
      if (refCoords) {
        return (a.distance || 0) - (b.distance || 0);
      }
      return 0;
    })
    .filter((clinic) => {
      if (!searchQuery) return true;
      const term = searchQuery.toLowerCase();
      return (
        clinic.name.toLowerCase().includes(term) ||
        clinic.address.toLowerCase().includes(term)
      );
    });

  return (
    <section id="network" className="relative z-10 h-[680px] sm:h-auto sm:min-h-screen bg-white text-neutral-900 py-10 sm:py-20 flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Light Radial background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Orbit Rings and Logo Area */}
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">

        {/* Orbital SVG Wrapper */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        >
          {/* Definitions for logo clip paths and gradients */}
          <defs>
            <clipPath id="logo-triangle-clip">
              <polygon points="250,75 410,345 90,345" />
            </clipPath>
            <linearGradient id="road-grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#eae1f0" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#eae1f0" />
              <stop offset="100%" stopColor="#eae1f0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
              <stop offset="40%" stopColor="var(--primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* 1. Static Concentric Circle Lines with Left-to-Right Faded Gradient */}
          <g>
            <circle cx="250" cy="250" r="160" fill="none" stroke="url(#ring-grad)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="280" fill="none" stroke="url(#ring-grad)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="400" fill="none" stroke="url(#ring-grad)" strokeWidth="1.5" />
          </g>

          {/* 2. Rotating Orbiting Nodes */}
          <g ref={ring1Ref}>
            {/* Nodes on Inner Circle */}
            <circle cx="250" cy="90" r="6" fill="var(--primary)" opacity="0.8" />
            <circle cx="90" cy="250" r="5" fill="var(--primary)" opacity="0.6" />
          </g>
          <g ref={ring2Ref}>
            {/* Nodes on Middle Circle */}
            <circle cx="448" cy="448" r="6.5" fill="var(--primary)" opacity="0.7" />
            <circle cx="52" cy="448" r="5.5" fill="var(--primary)" opacity="0.8" />
            {/* Red accent node */}
            <circle cx="448" cy="52" r="5" fill="var(--primary)" opacity="0.9" />
          </g>
          <g ref={ring3Ref}>
            {/* Nodes on Outer Circle */}
            <circle cx="533" cy="533" r="7" fill="var(--primary)" opacity="0.8" />
            <circle cx="250" cy="650" r="5" fill="var(--primary)" opacity="0.7" />
          </g>
        </svg>

        {/* 3. The Core Logo Triangle (Pure Inline CSS Styled HTML Wrapper) */}
        <div className="relative w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] z-10 flex flex-col items-center justify-center">
          {/* Header Texts */}
          <h2 className="h2 absolute top-[-40px] sm:top-[-65px] text-center w-full font-bold tracking-tight text-neutral-900 leading-none py-2 sm:py-3 bg-[linear-gradient(to_right,_transparent_0%,_white_25%,_white_75%,_transparent_100%)]">
            <span className="text-xl sm:text-2xl font-light tracking-wide text-neutral-500 font-sans block mb-1">The</span>
            <span className="block">Epitome</span>
          </h2>

          {/* Center Graphic Triangle */}
          <svg viewBox="0 0 500 500" className="w-[120px] h-[120px] sm:w-[220px] sm:h-[220px]">
            <g transform="translate(0, 40)">
              {/* Triangle Clipping Block */}
              <g clipPath="url(#logo-triangle-clip)">
                {/* Layer 1 (bottom light base) */}
                <path d="M 50 350 L 450 350 L 450 290 Q 250 310, 50 290 Z" fill="#eae2f1" />
                {/* Layer 2 */}
                <path d="M 50 295 L 450 295 L 450 230 Q 250 250, 50 230 Z" fill="#c3a2d5" />
                {/* Layer 3 */}
                <path d="M 50 235 L 450 235 L 450 170 Q 250 190, 50 170 Z" fill="#9c63b7" />
                {/* Layer 4 */}
                <path d="M 50 175 L 450 175 L 450 120 Q 250 140, 50 120 Z" fill="#752e9a" />
                {/* Layer 5 (apex) */}
                <path d="M 50 125 L 450 125 L 250 50 Z" fill="#572a65" />

                {/* Glowing Sun at Apex */}
                <circle cx="250" cy="120" r="28" fill="url(#sun-glow)" />
                <circle cx="250" cy="120" r="10" fill="white" className="shadow-lg" />

                {/* Curved Pathway */}
                <path
                  d="M 250 345 C 220 300, 180 260, 260 210 C 310 165, 270 140, 250 120"
                  stroke="url(#road-grad)"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 250 345 C 220 300, 180 260, 260 210 C 310 165, 270 140, 250 120"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Dark crisp border overlay around the triangle */}
              <polygon points="250,75 410,345 90,345" fill="none" stroke="#572a65" strokeWidth="6" strokeLinejoin="round" />
            </g>
          </svg>

          {/* Subtitle Labels below Logo */}
          <div className="absolute bottom-[-20px] sm:bottom-[-40px] text-center w-full flex items-center justify-center gap-1.5 sm:gap-2 text-neutral-800">
            <span className="text-lg sm:text-2xl font-bold tracking-wider font-sans uppercase">Epitome</span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase whitespace-nowrap">Epilepsy Network</span>
          </div>
        </div>
      </div>

      {/* Find Location CTA */}
      <div className="absolute bottom-0 sm:bottom-16 left-0 right-0 z-20 flex flex-col items-start sm:items-center px-8 sm:px-6">
        {/* Mobile-only descriptive text */}
        <div className="block sm:hidden text-left max-w-[340px] mb-4">
          <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-6">
            India's Connected Epilepsy Network
          </p>
          <p className="text-[12px] text-neutral-500 font-normal leading-normal">
            The Epitome is a connected care network bringing together advanced epilepsy expertise, specialized diagnostics, multidisciplinary teams, and continuous innovation to improve access to high-quality epilepsy care.
          </p>
        </div>

        <Button
          onClick={handleFindLocation}
          variant="primary"
          className=""
        >
          Find Center
        </Button>
      </div>

      {/* Geolocation Results Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          <div
            className="bg-neutral-950 text-white border border-neutral-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] transition-transform duration-500 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-neutral-900 flex justify-between items-center bg-neutral-950 z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Nearest Epitome Centers</h3>
                <p className="text-xs text-neutral-500 mt-1">Epitome Clinical Epilepsy Network Hubs</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-hidden"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {loading ? (
                /* Loading State */
                <div className="flex flex-col items-center justify-center py-16 space-y-4">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-3 border-[#572a65]/20" />
                    <div className="absolute inset-0 rounded-full border-3 border-t-[#e687ec] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                  </div>
                  <p className="text-sm text-neutral-400 font-medium animate-pulse">Requesting location coordinates...</p>
                </div>
              ) : (
                /* Success / Fallback State */
                <>
                  {errorMsg && (
                    <div className="p-4 bg-yellow-950/20 border border-yellow-500/20 rounded-2xl flex items-start gap-3 text-xs text-yellow-400 mb-4">
                      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <span className="font-semibold block mb-0.5">Location Access Note</span>
                        {errorMsg}
                      </div>
                    </div>
                  )}

                  {/* Location Search & Selection Controls */}
                  <div className="mb-6 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-900 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Search by center name or city..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-900 focus:border-[#e687ec]/50 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-500 focus:outline-hidden transition-colors"
                        />
                        <svg className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>

                      <button
                        onClick={handleUseCurrentLocation}
                        className="bg-neutral-950 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4 text-[#e687ec]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Use My Location
                      </button>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                        Or select a starting city to check nearby centers:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {PRESET_CITIES.map((city) => (
                          <button
                            key={city.name}
                            onClick={() => handleCitySelect(city)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${selectedCity === city.name
                              ? "bg-[#e687ec]/10 border-[#e687ec] text-white"
                              : "bg-neutral-950/60 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                              }`}
                          >
                            {city.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {displayedClinics.length > 0 ? (
                      displayedClinics.map((clinic, index) => {
                        const isNearest = index === 0 && clinic.distance !== undefined;
                        return (
                          <div
                            key={clinic.name}
                            className={`p-5 rounded-2xl border transition-all duration-300 ${isNearest
                              ? "bg-purple-950/10 border-[#e687ec]/30 shadow-lg shadow-purple-950/5"
                              : "bg-neutral-950 border-neutral-900 hover:border-neutral-800"
                              }`}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex gap-3">
                                {/* Location Pin Icon */}
                                <div className={`p-3 rounded-full shrink-0 ${isNearest ? "bg-purple-950/40 text-[#e687ec]" : "bg-neutral-900 text-neutral-400"
                                  }`}>
                                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>

                                <div>
                                  <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                                    {clinic.name}
                                    {isNearest && (
                                      <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#e687ec] text-neutral-950 rounded-full">
                                        Nearest
                                      </span>
                                    )}
                                  </h4>
                                  <p className="text-xs text-neutral-500 mt-1 max-w-sm leading-relaxed">{clinic.address}</p>
                                  <p className="text-xs text-neutral-400 mt-2 font-medium">Tel: {clinic.phone}</p>
                                </div>
                              </div>

                              {/* Distance indicator */}
                              {clinic.distance !== undefined && (
                                <div className="text-right shrink-0">
                                  <span className="text-xs font-bold text-[#e687ec] tracking-tight block">
                                    {clinic.distance.toFixed(1)} km
                                  </span>
                                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                                    away
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Quick buttons */}
                            <div className="flex gap-3 border-t border-neutral-900/60 mt-4 pt-3.5">
                              <a
                                href={clinic.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-neutral-300 hover:text-white px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5"
                              >
                                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Get Directions
                              </a>
                              <a
                                href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                                className="text-xs font-medium text-neutral-300 hover:text-[#e687ec] px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                              >
                                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.996.86h3.1c.495 0 .923-.31.997-.765l.547-2.19a1 1 0 00-.996-.86H21a2 2 0 012 2v1.618a1 1 0 01-.553.894L15 21a2 2 0 01-2-2v-2.28a1 1 0 01.725-.94l2.2-.548a1 1 0 00.86-.996v-3.1a1 1 0 00-.765-.997l-2.19-.547a1 1 0 00-.86.996V3H5a2 2 0 00-2 2z" />
                                </svg>
                                Call Hub
                              </a>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-sm text-neutral-500">No centers match your search filter.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EpitomeNetwork;
