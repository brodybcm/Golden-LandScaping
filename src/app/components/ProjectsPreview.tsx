import Image from "next/image";
import { ChevronRight } from "lucide-react";

const previewItems = [
  { src: "/images/projects/red-brick-house/rbh-1.jpg",  label: "Before",      job: "Lawn Restoration" },
  { src: "/images/projects/red-brick-house/rbh-8.jpg",  label: "In Progress",  job: "Lawn Restoration" },
  { src: "/images/projects/red-brick-house/rbh-16.jpg", label: "After",        job: "Lawn Restoration" },
  { src: "/images/projects/white-house/wh-1.jpg",       label: "Before",       job: "Property Cleanup" },
  { src: "/images/projects/white-house/wh-22.jpg",      label: "In Progress",  job: "Property Cleanup" },
  { src: "/images/projects/white-house/wh-44.jpg",      label: "After",        job: "Property Cleanup" },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-[#111111] border-t border-white/5" id="projects-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Recent Projects</h2>
            <h3 className="text-4xl font-heading font-bold text-white">Our Work Speaks for Itself</h3>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all shrink-0"
          >
            View All Projects <ChevronRight className="h-5 w-5" />
          </a>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {previewItems.map((item, i) => (
            <a
              key={i}
              href="/projects"
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] block border border-white/5 hover:border-primary/30 transition-colors"
            >
              <Image
                src={item.src}
                alt={`${item.job} – ${item.label}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                  {item.job}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-full transition-colors"
          >
            See All Before &amp; After Photos + Videos <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
