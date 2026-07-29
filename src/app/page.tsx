import Image from "next/image";
import { CheckCircle2, ChevronRight, MapPin, Phone, Mail, Clock, ShieldCheck, TreePine, Leaf, Scissors, Star } from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPreview from "./components/ProjectsPreview";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" id="top">
      {/* Header / Nav */}
      <header className="sticky top-0 left-0 z-50 w-full bg-[#111111]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
          <a href="#top" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary/20 p-2 rounded-lg">
              <TreePine className="text-primary h-6 w-6" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-heading font-bold text-xl tracking-wide uppercase text-white whitespace-nowrap">
              Golden<span className="text-primary">Landscaping</span>
            </span>
          </a>
          <a
            href="/projects"
            className="hidden md:flex items-center gap-2 font-medium text-white hover:text-primary transition-colors"
          >
            Our Work
          </a>
          <a
            href="tel:2293003727"
            className="hidden md:flex items-center gap-2 font-medium text-white hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5 text-primary" />
            (229) 300-3727
          </a>

          {/* Social Icons — desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61589055429507" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/goldenlandscapingvaldosta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@goldenlandscapevaldosta" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/>
              </svg>
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Get a Free Quote
          </a>
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#111111] to-[#111111] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-gray-300">Accepting New Clients in Valdosta</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-white">
                Premium <span className="text-primary relative inline-block">Lawn Care
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10C50 2 150 2 198 10" stroke="#d4af37" strokeWidth="4" strokeLinecap="round"/></svg>
                </span> <br/>Done Right.
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Transform your outdoor space with Valdosta's trusted experts. From precision mowing to full landscape maintenance, we deliver reliable, high-quality service all year round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Request Your Free Estimate
                  <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:2293003727"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  (229) 300-3727
                </a>

              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl" />
              <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/hero-lawn.png"
                  alt="Perfectly manicured lawn by Golden Landscaping LLC in Valdosta GA"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Decorative badge */}
                <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Serving Valdosta &</p>
                    <p className="font-bold text-white">30-Mile Radius</p>
                  </div>
                </div>
                {/* Free estimates badge */}
                <div className="absolute top-6 right-6 bg-primary text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                  FREE Estimates!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#161616] border-y border-white/5" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Services</h2>
            <h3 className="text-4xl font-heading font-bold text-white mb-4">Complete Landscape Solutions</h3>
            <p className="text-gray-400">Everything you need to keep your property looking pristine, vibrant, and healthy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Lawn Mowing & Edging", desc: "Precision cutting, crisp edges, and clean blow-offs for a perfect finish every time." },
              { icon: TreePine, title: "Tree Pruning", desc: "Expert trimming to keep your trees healthy, safe, and structurally sound." },
              { icon: Scissors, title: "Shrub Trimming", desc: "Detailed shaping of hedges and shrubs to maintain your property's aesthetic." },
              { icon: CheckCircle2, title: "Mulching", desc: "Premium mulch installation to retain moisture, suppress weeds, and beautify beds." },
              { icon: ShieldCheck, title: "Weed Control", desc: "Targeted weed spraying to keep your lawn and flower beds looking pristine." },
              { icon: Clock, title: "Yard Cleanups", desc: "Seasonal and overgrown property cleanups, including leaf removal and debris clearing." }
            ].map((service, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <section className="py-12 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-semibold mb-8">Proudly Serving These Communities</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Valdosta, GA", "Hahira, GA", "Lake Park, GA", "Lakeland, GA", "Nashville, GA", "Remerton, GA", "Morven, GA", "Barwick, GA", "Stockton, GA"].map((city) => (
              <span key={city} className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full text-sm text-gray-300 font-medium">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectsPreview />

      {/* Why Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">Why Choose Golden Landscaping?</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We understand that your property is an investment. Our team is dedicated to providing reliable, professional services that transform outdoor spaces into stunning masterpieces. We show up on time, do the job right, and leave your property looking better than ever.
                  </p>
                  <ul className="space-y-4">
                    {["Locally owned and operated in Valdosta", "Serving a 30-mile radius", "Free, no-obligation estimates", "Reliable and professional service"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-white font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-gray-400 font-medium">Mile Service Radius</div>
                  </div>
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-gray-400 font-medium">Free Estimates</div>
                  </div>
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5 col-span-2">
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-primary fill-primary" />)}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">5-Star Service Guarantee</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5 bg-[#111111]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Common Questions</h2>
            <h3 className="text-4xl font-heading font-bold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-400">Everything you need to know about our services and process.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "What areas do you serve?", a: "We proudly serve Valdosta, GA, and the surrounding communities within a 30-mile radius, including Hahira, Lake Park, and Lakeland." },
              { q: "Do you offer free estimates?", a: "Yes, we provide 100% free, no-obligation estimates. Contact us today, and we'll evaluate your property and provide a competitive quote." },
              { q: "What landscaping services do you provide?", a: "Our services include precision lawn mowing, edging, tree pruning, shrub trimming, mulching, weed control, and comprehensive yard cleanups." },
              { q: "Are you a locally owned business?", a: "Yes, Golden Landscaping LLC is proudly locally owned and operated right here in Valdosta, dedicated to serving our community." },
              { q: "Do you handle seasonal yard cleanups?", a: "Absolutely. We offer specialized seasonal cleanups, which cover overgrown property clearing, leaf removal, and general debris cleanup to keep your yard looking its best year-round." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary">Q:</span> {faq.q}
                </h4>
                <p className="text-gray-400 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#161616] border-t border-white/5" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Get In Touch</h2>
              <h3 className="text-4xl font-heading font-bold text-white mb-6">Ready for a Better Lawn?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Contact Jaime Diego and the team today for your free estimate. We'll evaluate your property and provide a competitive quote for our premium services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400"><a href="tel:2293003727" className="text-primary hover:underline">(229) 300-3727</a></p>
                  </div>
                </div>

                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <a href="mailto:goldenlandscaping26@gmail.com" className="text-primary hover:underline">goldenlandscaping26@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Service Area</h4>
                    <p className="text-gray-400">Valdosta, GA and surrounding areas (30-mile radius)</p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TreePine className="text-primary h-5 w-5" />
            <span className="font-heading font-bold text-lg uppercase text-white">
              Golden<span className="text-primary">Landscaping</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Golden Landscaping LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61589055429507" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Facebook</a>
            <a href="https://www.instagram.com/goldenlandscapingvaldosta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@goldenlandscapevaldosta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">TikTok</a>
            <a href="https://g.page/r/CTQLqS-b_uCyEAI/review" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Google Reviews</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
