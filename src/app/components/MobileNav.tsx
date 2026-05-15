"use client";

import { useState, useEffect } from "react";
import { Menu, X, TreePine, Phone } from "lucide-react";

const navLinks = [
  { href: "/#services",  label: "Services"  },
  { href: "/projects",   label: "Our Work"  },
  { href: "/#faq",       label: "FAQ"       },
  { href: "/#contact",   label: "Contact"   },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        id="mobile-nav-toggle"
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-[#0a0a0a] border-l border-white/20 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/20 bg-[#0a0a0a]">
          <div className="flex items-center gap-2">
            <TreePine className="text-[#d4af37] h-5 w-5" />
            <span className="font-heading font-bold text-lg uppercase text-white">
              Golden<span className="text-[#d4af37]">Landscaping</span>
            </span>
          </div>
          <button
            id="mobile-nav-close"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3.5 rounded-xl text-white hover:bg-white/10 font-semibold transition-colors text-base border border-transparent hover:border-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-white/20 bg-[#0a0a0a] space-y-3">
          <a
            href="tel:3868550292"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Phone className="h-4 w-4 text-[#d4af37]" />
            (386) 855-0292
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full bg-[#d4af37] hover:bg-[#d4af37]/90 text-black font-semibold px-6 py-3 rounded-full transition-all"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
