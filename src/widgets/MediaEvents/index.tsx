"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SmokeTitle from "@/src/components/UI/SmokeTitle";
import Button from "@/src/components/UI/Button";
import { useToggleLenis } from "@/src/logic/useToggleLenis";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./MediaEvents.module.scss";

interface EventItem {
  id: string;
  category: "conferences" | "workshops" | "videos" | "galleries";
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  duration?: string;
  speaker?: string;
  avatar?: string;
  thumbnail?: string;
  images?: string[];
  videoUrl?: string;
  badge?: string;
}

const MEDIA_EVENTS_DATA: EventItem[] = [
  // Conferences
  {
    id: "conf-1",
    category: "conferences",
    title: "International Epilepsy Congress 2026",
    subtitle: "Presented on advanced EEG mapping & surgical outcomes in focal cortical dysplasia.",
    date: "Oct 12-14, 2026",
    location: "Mumbai, India",
    speaker: "Dr. Alok Sharma",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    badge: "Keynote presentation",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "conf-2",
    category: "conferences",
    title: "European Epilepsy Surgery Symposium",
    subtitle: "Discussing deep brain stimulation trials & responsive neurostimulation updates.",
    date: "Nov 04-06, 2026",
    location: "London, UK",
    speaker: "Prof. Clara Vance",
    avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=150&auto=format&fit=crop&q=80",
    badge: "Panel Discussion",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80"
  },
  // Workshops
  {
    id: "work-1",
    category: "workshops",
    title: "Advanced SEEG Placement & Mapping",
    subtitle: "Hands-on simulation for precise clinical electrode mapping in stereotactic EEG.",
    date: "Sept 18, 2026",
    location: "Epitome Training Center",
    duration: "Full-day Workshop",
    badge: "Clinical CME Certified",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-2",
    category: "workshops",
    title: "Pediatric Neuro-modulation Training",
    subtitle: "Focusing on ketogenic dietary adjustments & VNS therapy programming in children.",
    date: "Dec 02, 2026",
    location: "Bangalore Hub",
    duration: "6 Hours",
    badge: "Hands-on Demo",
    thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80"
  },
  // Educational Videos
  {
    id: "vid-1",
    category: "videos",
    title: "Understanding Drug-Resistant Epilepsy Pathways",
    subtitle: "Deep-dive video explaining the clinical pathways of focal seizures & drug resistance.",
    duration: "18:45 min",
    speaker: "Dr. Rajesh Iyer",
    badge: "Educational Video",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "vid-2",
    category: "videos",
    title: "Ketogenic Dietary Therapies: A Clinical Guide",
    subtitle: "A detailed visual walkthrough of the clinical protocols for keto diets in epilepsy.",
    duration: "24:10 min",
    speaker: "Dietician Nidhi Mehta",
    badge: "Video Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  // Event Galleries
  {
    id: "gal-1",
    category: "galleries",
    title: "Epitome Annual Neuro Summit 2025",
    subtitle: "Photos highlighting the scientific poster sessions, roundtables, and international delegations.",
    badge: "12 Photos",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "gal-2",
    category: "galleries",
    title: "Clinical EEG Hands-On Training",
    subtitle: "Gallery showcasing practical workshops on pediatric EEG lead placements and simulation software.",
    badge: "8 Photos",
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80"
    ]
  }
];

const CATEGORIES = [
  { value: "all", label: "All Events" },
  { value: "conferences", label: "Conferences" },
  { value: "workshops", label: "Workshops" },
  { value: "videos", label: "Educational Videos" },
  { value: "galleries", label: "Event Galleries" }
];

const MediaEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const swiperRef = useRef<any>(null);

  const { lenisStart, lenisStop } = useToggleLenis();

  const isModalOpen = lightboxImages !== null || activeVideoUrl !== null;

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

  const filteredData = activeTab === "all"
    ? MEDIA_EVENTS_DATA
    : MEDIA_EVENTS_DATA.filter(item => item.category === activeTab);

  const handleOpenGallery = (images?: string[]) => {
    if (images && images.length > 0) {
      setLightboxImages(images);
      setActiveImageIndex(0);
    }
  };

  const handleOpenVideo = (videoUrl?: string) => {
    if (videoUrl) {
      setActiveVideoUrl(videoUrl);
    }
  };

  return (
    <section id="events" className={`relative py-24 bg-white text-neutral-900 overflow-hidden font-sans`}>
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <SmokeTitle
              tag="h2"
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4"
              text="Media & [Events]"
            />
            <p className="text-sm md:text-lg text-neutral-500 font-light leading-relaxed">
              Explore our scientific advancements, clinical workshops, video resources, participant experiences, and summits.
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className={`flex overflow-x-auto pb-4 mb-10 gap-2 border-b border-neutral-200 ${styles.noScrollbar}`}>
          {CATEGORIES.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                swiperRef.current?.slideTo(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${activeTab === tab.value
                ? "bg-neutral-900 border-neutral-900 text-white"
                : "bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!overflow-visible"
          >
            {filteredData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer border border-neutral-200 shadow-lg">
                  {/* Background Image */}
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    />
                  )}

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black/20 group-hover:from-black transition-colors duration-500" />

                  {/* Content (Title) anchored to top */}
                  <div className="absolute inset-x-0 top-0 z-20 p-6 md:p-8 flex flex-col justify-start">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E1B77E] transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between items-center mt-8">
          {/* Swiper Controls & View All */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Button variant="secondary" size="md">
            View All
          </Button>
        </div>

      </div>

      {/* LIGHTBOX FOR EVENT GALLERIES */}
      {lightboxImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button
            onClick={() => setLightboxImages(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
            className="absolute left-6 w-12 h-12 rounded-full bg-neutral-900/60 hover:bg-neutral-900 flex items-center justify-center text-white cursor-pointer"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-[85vw] max-h-[75vh] flex flex-col items-center">
            <img
              src={lightboxImages[activeImageIndex]}
              alt={`Gallery Image ${activeImageIndex + 1}`}
              className="max-w-full max-h-full rounded-2xl object-contain border border-neutral-900"
            />
            <span className="text-xs text-neutral-500 mt-4">
              Image {activeImageIndex + 1} of {lightboxImages.length}
            </span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setActiveImageIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
            className="absolute right-6 w-12 h-12 rounded-full bg-neutral-900/60 hover:bg-neutral-900 flex items-center justify-center text-white cursor-pointer"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="w-full max-w-4xl bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden shadow-2xl relative">

            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-900 flex justify-between items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Video Player</span>
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video container */}
            <div className="aspect-video bg-black w-full">
              <video
                src={activeVideoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      )}


    </section>
  );
};

export default MediaEvents;
