"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, TreePine, Phone, Play } from "lucide-react";
import MobileNav from "../components/MobileNav";

// ─── Data ───────────────────────────────────────────────────────────────────
const redBrickPhotos = Array.from({ length: 16 }, (_, i) => ({
  type: "photo" as const,
  src: `/images/projects/red-brick-house/rbh-${i + 1}.jpg`,
  alt: `Lawn Restoration – landscape cleanup photo ${i + 1}`,
  job: "Lawn Restoration",
}));

const redBrickVideos = Array.from({ length: 4 }, (_, i) => ({
  type: "video" as const,
  src: `/videos/projects/red-brick-house/rbh-${i + 1}.mp4`,
  poster: `/images/projects/red-brick-house/rbh-${i + 1}.jpg`,
  alt: `Lawn Restoration – video ${i + 1}`,
  job: "Lawn Restoration",
}));

const whiteHousePhotos = Array.from({ length: 45 }, (_, i) => ({
  type: "photo" as const,
  src: `/images/projects/white-house/wh-${i + 1}.jpg`,
  alt: `Property Cleanup – property cleanup photo ${i + 1}`,
  job: "Property Cleanup",
}));

const whiteHouseVideos = Array.from({ length: 19 }, (_, i) => ({
  type: "video" as const,
  src: `/videos/projects/white-house/wh-${i + 1}.mp4`,
  poster: `/images/projects/white-house/wh-${i + 1}.jpg`,
  alt: `Property Cleanup – video ${i + 1}`,
  job: "Property Cleanup",
}));

const allItems = [
  ...redBrickPhotos,
  ...redBrickVideos,
  ...whiteHousePhotos,
  ...whiteHouseVideos,
];

const PAGE_SIZE = 24;

type Tab = "All" | "Lawn Restoration" | "Property Cleanup";

// ─── Component ──────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeTab === "All"
      ? allItems
      : allItems.filter((item) => item.job === activeTab);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const photoItems = filtered.filter((i) => i.type === "photo");
  const lightboxPhotos = photoItems;

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE); // reset pagination on tab change
  }

  function openLightbox(src: string) {
    const idx = lightboxPhotos.findIndex((p) => p.src === src);
    if (idx !== -1) setLightboxIndex(idx);
  }

  function closeLightbox() { setLightboxIndex(null); }
  function prevPhoto() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  }
  function nextPhoto() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % lightboxPhotos.length);
  }

  const tabs: Tab[] = ["All", "Lawn Restoration", "Property Cleanup"];

  return (
    <main className="flex flex-col min-h-screen bg-[#111111]" id="top">
      {/* ── Nav ── */}
      <header className="sticky top-0 left-0 z-50 w-full bg-[#111111]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-[#d4af37]/20 p-2 rounded-lg">
              <TreePine className="text-[#d4af37] h-6 w-6" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide uppercase text-white">
              Golden<span className="text-[#d4af37]">Landscaping</span>
            </span>
          </a>
          <a
            href="tel:3868550292"
            className="hidden md:flex items-center gap-2 font-medium text-white hover:text-[#d4af37] transition-colors"
          >
            <Phone className="h-5 w-5 text-[#d4af37]" />
            (386) 855-0292
          </a>
          <a
            href="/#contact"
            className="hidden md:inline-flex bg-[#d4af37] hover:bg-[#d4af37]/90 text-black font-semibold px-6 py-2.5 rounded-full transition-all"
          >
            Get a Free Quote
          </a>
          <MobileNav />
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-20 pb-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-[#111111] to-[#111111]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#d4af37] font-bold uppercase tracking-wider text-sm mb-3">Our Work</p>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
            Project Gallery
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Browse all {allItems.length} photos and videos from our recent landscape transformations right here in the Valdosta, GA area.
          </p>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all border ${
                  activeTab === tab
                    ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                {tab}
                <span className="ml-2 text-xs opacity-70">
                  ({tab === "All" ? allItems.length : allItems.filter((i) => i.job === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="flex-1 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {visible.map((item, i) =>
              item.type === "photo" ? (
                <div
                  key={`photo-${i}`}
                  className="break-inside-avoid rounded-xl overflow-hidden border border-white/5 hover:border-[#d4af37]/40 transition-colors cursor-pointer group relative"
                  onClick={() => openLightbox(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={700}
                    height={525}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ) : (
                <div
                  key={`video-${i}`}
                  className="break-inside-avoid rounded-xl overflow-hidden border border-white/5 relative group"
                >
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="none"
                    className="w-full h-auto rounded-xl"
                    aria-label={item.alt}
                  />
                  <div className="absolute top-2 right-2 bg-[#d4af37] text-black text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none flex items-center gap-1">
                    <Play className="h-2.5 w-2.5 fill-black" /> VIDEO
                  </div>
                </div>
              )
            )}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 mt-20">No items found.</p>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm mb-4">
                Showing {visible.length} of {filtered.length} items
              </p>
              <button
                id="load-more-btn"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            id="lightbox-close"
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            id="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxPhotos[lightboxIndex].src}
              alt={lightboxPhotos[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            id="lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {lightboxPhotos.length}
          </div>
        </div>
      )}

      {/* ── Footer CTA ── */}
      <section className="py-16 bg-[#161616] border-t border-white/5 text-center px-4">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">
          Ready for Your Own Transformation?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Contact Golden Landscaping today for a free, no-obligation estimate. We serve Valdosta and the surrounding 30-mile radius.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#d4af37]/90 text-black font-semibold px-10 py-4 rounded-full transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          Get My Free Estimate <ChevronRight className="h-5 w-5" />
        </a>
      </section>
    </main>
  );
}
