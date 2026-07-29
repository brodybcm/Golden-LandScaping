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
          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-6 pb-1">
            <a href="https://www.facebook.com/profile.php?id=61589055429507" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={() => setOpen(false)} className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/goldenlandscapingvaldosta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => setOpen(false)} className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@goldenlandscapevaldosta" target="_blank" rel="noopener noreferrer" aria-label="TikTok" onClick={() => setOpen(false)} className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/>
              </svg>
            </a>
          </div>

          <a
            href="tel:2293003727"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-semibold px-6 py-3 rounded-full"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <Phone className="h-4 w-4 text-[#d4af37]" />
            (229) 300-3727
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
