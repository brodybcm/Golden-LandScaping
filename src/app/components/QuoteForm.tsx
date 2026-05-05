"use client";

import { useState, FormEvent } from "react";
import { ChevronRight, CheckSquare, CheckCircle2, Send, ArrowLeft } from "lucide-react";

const SERVICES = [
  "Lawn Mowing",
  "Edging",
  "Trimming",
  "Tree Pruning",
  "Shrub Trimming",
  "Mulching",
  "Weed Control",
  "Yard Cleanup",
  "Other",
];

export default function QuoteForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const toggle = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("body") as HTMLTextAreaElement).value;

    const servicesLine = selected.length > 0
      ? `Services Requested: ${selected.join(", ")}`
      : "Services Requested: Not specified";

    const body = `${servicesLine}\nPhone: ${phone || "Not provided"}\n\n${message}`;
    const subject = `Free Quote Request from ${name}`;

    // Show sending state briefly
    setFormState("sending");

    setTimeout(() => {
      window.location.href = `mailto:goldenlandscaping26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormState("sent");
    }, 800);
  };

  const resetForm = () => {
    setSelected([]);
    setFormState("idle");
  };

  // ── Success State ──
  if (formState === "sent") {
    return (
      <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
        <div className="flex flex-col items-center justify-center py-8 animate-[fadeIn_0.5s_ease-out]">
          {/* Animated checkmark circle */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-[scaleIn_0.4s_ease-out]">
              <CheckCircle2 className="w-10 h-10 text-primary animate-[scaleIn_0.4s_ease-out_0.2s_both]" />
            </div>
            <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "1.5s", animationIterationCount: "2" }} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Quote Request Sent!</h3>
          <p className="text-gray-400 text-center max-w-sm mb-2">
            Your email app should have opened with the details filled in. Just hit <span className="text-primary font-semibold">Send</span> in your email to complete the request.
          </p>
          <p className="text-gray-500 text-sm text-center mb-6">
            We typically respond within a few hours during business hours.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-6" />

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={resetForm}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Submit Another Request
            </button>
            <a
              href="tel:3868550292"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-black font-bold transition-all text-sm"
            >
              Or Call Now: (386) 855-0292
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ── Form State ──
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5">
      <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
      <p className="text-gray-400 text-sm mb-6">We typically respond within a few hours during business hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              disabled={formState === "sending"}
              className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              disabled={formState === "sending"}
              className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
              placeholder="(386) 000-0000"
            />
          </div>
        </div>

        {/* Services Multi-Select */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-3">
            Services Needed <span className="text-gray-600">(select all that apply)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SERVICES.map((service) => {
              const isChecked = selected.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggle(service)}
                  disabled={formState === "sending"}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium text-left transition-all disabled:opacity-50 ${
                    isChecked
                      ? "bg-primary/20 border-primary text-primary"
                      : "bg-[#222222] border-white/10 text-gray-400 hover:border-white/30 hover:text-gray-300"
                  }`}
                >
                  <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isChecked ? "bg-primary border-primary" : "border-gray-600"
                  }`}>
                    {isChecked && (
                      <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-black">
                        <path d="M1 4l2.5 2.5L9 1" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  {service}
                </button>
              );
            })}
          </div>
          {selected.length > 0 && (
            <p className="text-xs text-primary mt-2 flex items-center gap-1">
              <CheckSquare className="h-3.5 w-3.5" />
              {selected.length} service{selected.length > 1 ? "s" : ""} selected: {selected.join(", ")}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Tell Us About Your Property</label>
          <textarea
            name="body"
            rows={4}
            disabled={formState === "sending"}
            className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
            placeholder="Property size, frequency needed, specific concerns..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={selected.length === 0 || formState === "sending"}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/40 disabled:cursor-not-allowed text-black font-bold py-4 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          {formState === "sending" ? (
            <>
              <Send className="h-5 w-5 animate-[sendFly_0.8s_ease-in-out]" />
              Opening Email...
            </>
          ) : (
            <>
              Send My Free Quote Request <ChevronRight className="h-5 w-5" />
            </>
          )}
        </button>
        {selected.length === 0 && formState === "idle" && (
          <p className="text-xs text-gray-600 text-center -mt-2">Select at least one service above to continue</p>
        )}
        <p className="text-xs text-gray-500 text-center">
          Or call us directly: <a href="tel:3868550292" className="text-primary hover:underline">(386) 855-0292</a>
        </p>
      </form>
    </div>
  );
}
