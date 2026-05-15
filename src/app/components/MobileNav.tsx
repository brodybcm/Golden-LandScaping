"use client";

import { useState, useEffect } from "react";
import { Menu, X, TreePine, Phone } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services"  },
  { href: "/projects",  label: "Our Work"  },
  { href: "/#faq",      label: "FAQ"       },
  { href: "/#contact",  label: "Contact"   },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        id="mobile-nav-toggle"
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Full-screen overlay — blocks ALL page content */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[70] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0a0a0a" }}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b border-white/20"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="flex items-center gap-2">
            <TreePine className="text-[#d4af37] h-5 w-5" />
            <span className="font-heading font-bold text-lg uppercase text-white">
              Golden<span className="text-[#d4af37]">Landscaping</span>
            </span>
          </div>
          <button
            id="mobile-nav-close"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg text-white"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-col px-4 pt-4 flex-1"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-4 text-white font-semibold text-lg border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-5 pb-8 pt-5 border-t border-white/20 space-y-3"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <a
            href="tel:3868550292"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-semibold px-6 py-3 rounded-full"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <Phone className="h-4 w-4 text-[#d4af37]" />
            (386) 855-0292
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full text-black font-bold px-6 py-3 rounded-full"
            style={{ backgroundColor: "#d4af37" }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
